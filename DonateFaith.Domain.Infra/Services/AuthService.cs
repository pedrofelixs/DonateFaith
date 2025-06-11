using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Infra.Services
{
    public class AuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _config;

        public AuthService(IUserRepository userRepository, IConfiguration config)
        {
            _userRepository = userRepository;
            _config = config;
        }

        public async Task<AuthResponseDTO> AuthenticateAsync(LoginDTO login)
        {
            if (string.IsNullOrEmpty(login.Email) || string.IsNullOrEmpty(login.Password))
                throw new ArgumentException("Email and password are required.");


            var user = await _userRepository.GetByEmailAsync(login.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(login.Password, user.PasswordHash))
                throw new UnauthorizedAccessException("Invalid credentials.");

            var token = GenerateJwtToken(user);
            return new AuthResponseDTO
            {
                Token = token,
                Role = user.Role.ToString(),
                UserName = user.FullName,
                ChurchId = user.ChurchId ?? 0
            };
        }

        public async Task RegisterAsync(RegisterUserDTO dto)
        {
            var existing = await _userRepository.GetByEmailAsync(dto.Email);

            if (existing == null)
            {
                // Usuário não existe → criar novo
                var user = new User
                {
                    FullName = dto.FullName,
                    Email = dto.Email,
                    CPF = dto.CPF,
                    Role = dto.Role, // ou UserRole.Member, se preferir forçar
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password)
                };
                await _userRepository.AddAsync(user);
            }
            else if (existing.Role == UserRole.Member)
            {
                // Usuário já existe e é um membro → atualizar a senha
                existing.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
                await _userRepository.UpdateAsync(existing);
            }
            else
            {
                // Usuário já existe, mas não é um membro → lançar exceção
                throw new Exception("Email já cadastrado e pertence a outro perfil.");
            }

        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Role, user.Role.ToString()),
            new Claim(ClaimTypes.Name, user.FullName)
        };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
