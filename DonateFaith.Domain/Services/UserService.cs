using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using BCrypt.Net;
using System.Text;

namespace DonateFaith.Domain.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public async Task<IEnumerable<UserDTO>> GetUsersAsync(int page, int pageSize)
        {
            var users = await _userRepository.GetUsersAsync(page, pageSize);
            return users.Select(user => new UserDTO
            {
                Id = user.Id,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role
            });
        }

        public async Task<UserDTO> GetByIdAsync(int id)
        {
            var user = await _userRepository.GetByIdAsync(id);
            return new UserDTO
            {
                Id = user.Id,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role
            };
        }

        public async Task<UserDTO> RegisterUserAsync(RegisterUserDTO registerUserDto)
        {
            var userExists = await _userRepository.GetByEmailAsync(registerUserDto.Email);
            if (userExists != null)
                throw new Exception("Usuário já registrado.");

            var passwordHash = BCrypt.Net.BCrypt.HashPassword(registerUserDto.Password);

            var user = new User
            {
                Name = registerUserDto.FullName,
                Email = registerUserDto.Email,
                PasswordHash = passwordHash,
                CPF = registerUserDto.CPF,
                Role = registerUserDto.Role
            };

            await _userRepository.AddAsync(user);

            return new UserDTO
            {
                Id = user.Id,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role
            };
        }

        public async Task<string> AuthenticateAsync(LoginDTO loginDto)
        {
            var user = await _userRepository.GetByEmailAsync(loginDto.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
                throw new Exception("Email ou senha inválidos.");

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
                new Claim("UserId", user.Id.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(8),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<IEnumerable<UserDTO>> GetMembersAsync()
        {
            var members = await _userRepository.GetMembersAsync();
            return members.Select(user => new UserDTO
            {
                Id = user.Id,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role
            });
        }

        public async Task DeleteAsync(int id)
        {
            await _userRepository.DeleteAsync(id);
        }
    }
}
