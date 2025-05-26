using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Infra.Repositories
{
    public class ChurchRepository
    {
        private readonly AppDbContext _context;

        public ChurchRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Church?> GetByPastorIdAsync(int pastorId)
        {
            return await _context.Churches
                .Include(c => c.Users)
                .FirstOrDefaultAsync(c => c.Users.Any(u => u.Id == pastorId && u.Role == UserRole.Pastor));
        }

        public async Task<Church?> GetByIdAsync(int id)
            => await _context.Churches.FindAsync(id);

        public async Task AddAsync(Church church)
        {
            await _context.Churches.AddAsync(church);
        }

        public async Task UpdateAsync(Church church)
        {
            _context.Churches.Update(church);
        }

        public async Task DeleteAsync(int id)
        {
            var church = await GetByIdAsync(id);
            if (church != null)
                _context.Churches.Remove(church);
        }
    }
}
