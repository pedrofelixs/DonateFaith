using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace DonateFaith.Domain.Infra.Repositories
{
    public class MemberRepository : IMemberRepository
    {
        private readonly AppDbContext _context;

        public MemberRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllMembersAsync()
        {
            return await _context.Users
                .Where(u => u.Role == UserRole.Member)
                .ToListAsync();
        }

        public async Task<User?> GetMemberByIdAsync(int id)
        {
            return await _context.Users
                .FirstOrDefaultAsync(u => u.Id == id && u.Role == UserRole.Member);
        }

        public async Task<IEnumerable<User>> GetMembersByChurchIdAsync(int churchId)
{
        return await _context.Users
            .Where(u => u.ChurchId == churchId && u.Role == UserRole.Member)
            .ToListAsync();
}

        public async Task AddMemberAsync(User member)
        {
            member.Role = UserRole.Member;
            await _context.Users.AddAsync(member);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateMemberAsync(User member)
        {
            _context.Users.Update(member);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMemberAsync(int id)
        {
            var member = await GetMemberByIdAsync(id);
            if (member != null)
            {
                _context.Users.Remove(member);
                await _context.SaveChangesAsync();
            }
        }
    }


}
