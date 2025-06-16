using DonateFaith.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IMemberRepository
    {
        Task<IEnumerable<User>> GetAllMembersAsync();
        Task<User?> GetMemberByIdAsync(int id);
        Task<IEnumerable<User>> GetMembersByChurchIdAsync(int churchId);
        Task AddMemberAsync(User member);
        Task UpdateMemberAsync(User member);
        Task DeleteMemberAsync(int id);
    }

}
