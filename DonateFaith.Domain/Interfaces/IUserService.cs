using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserDTO>> GetUsersAsync(int page, int pageSize);
        Task<UserDTO> GetByIdAsync(int id);
        Task<UserDTO> RegisterUserAsync(RegisterUserDTO registerUserDto);
        Task<string> AuthenticateAsync(LoginDTO loginDto);
        Task<IEnumerable<UserDTO>> GetMembersAsync();
        Task DeleteAsync(int id);
    }
}
