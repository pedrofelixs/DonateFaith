using DonateFaith.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IMemberService
    {
 
            Task<IEnumerable<UserDTO>> GetAllMembersAsync();
            Task<UserDTO?> GetMemberByIdAsync(int id);
            Task AddMemberAsync(CreateMemberDTO member, int pastorId);
            Task UpdateMemberAsync(UserDTO member);
            Task DeleteMemberAsync(int id);
            Task<IEnumerable<UserDTO>> GetMembersByChurchIdAsync(int churchId);
    }
}
