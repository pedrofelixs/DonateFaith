using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;

namespace DonateFaith.Domain.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
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
            }).ToList();
        }
    }
}
