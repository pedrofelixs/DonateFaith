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
            // CPF já existe?
            var existingUser = await _userRepository.GetByCPFAsync(registerUserDto.CPF);

            if (existingUser != null)
            {
                // Atualiza usuário existente
                if (!string.IsNullOrEmpty(existingUser.Email))
                    throw new Exception("Usuário já registrado com este CPF.");

                existingUser.Email = registerUserDto.Email;
                existingUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerUserDto.Password);
                existingUser.FullName = registerUserDto.FullName;
                existingUser.Name = registerUserDto.FullName.Split(' ')[0];
                existingUser.Role = UserRole.Member; // força member

                await _userRepository.UpdateAsync(existingUser);

                return new UserDTO
                {
                    Id = existingUser.Id,
                    FullName = existingUser.Name,
                    Email = existingUser.Email,
                    Role = existingUser.Role
                };
            }

            // Novo usuário (CPF ainda não registrado)
            var user = new User
            {
                Name = registerUserDto.FullName.Split(' ')[0],
                FullName = registerUserDto.FullName,
                Email = registerUserDto.Email,
                CPF = registerUserDto.CPF,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerUserDto.Password),
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
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role.ToString())
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
        public async Task AddMemberAsync(UserDTO dto, int pastorId)
        {
            var pastor = await _userRepository.GetByIdAsync(pastorId);
            if (pastor == null || pastor.Role != UserRole.Pastor || pastor.ChurchId == null)
                throw new Exception("Pastor inválido ou não vinculado a uma igreja.");

            // Verifica se já existe usuário com o mesmo CPF
            var existingUser = await _userRepository.GetByCPFAsync(dto.CPF);

            if (existingUser != null)
            {
                // Atualiza para membro, vincula à igreja do pastor
                existingUser.Role = UserRole.Member;
                existingUser.ChurchId = pastor.ChurchId;
                existingUser.Name = dto.FullName.Split(' ')[0];
                existingUser.FullName = dto.FullName;

                await _userRepository.UpdateAsync(existingUser);
            }
            else
            {
                // Cria novo usuário como membro, só com nome e CPF
                var newUser = new User
                {
                    CPF = dto.CPF,
                    Name = dto.FullName.Split(' ')[0],
                    FullName = dto.FullName,
                    Role = UserRole.Member,
                    ChurchId = pastor.ChurchId
                };

                await _userRepository.AddAsync(newUser);
            }
        }
    }
}
