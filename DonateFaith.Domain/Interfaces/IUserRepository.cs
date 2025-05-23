using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Interfaces
{
    public interface IUserRepository
    {
        Task<User?> GetByEmailAsync(string email);
        Task<IEnumerable<User>> GetUsersAsync(int page, int pageSize);
        Task<User?> GetByCPFAsync(string cpf);
        Task<User> GetByIdAsync(int id);
        Task<IEnumerable<User>> GetMembersAsync();
        Task AddAsync(User user);
        Task UpdateAsync(User user);
        Task DeleteAsync(int id);
    }
}
