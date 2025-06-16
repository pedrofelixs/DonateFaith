using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Infra.Repositories
{
    public class TitheRepository : ITitheRepository
    {
        private readonly AppDbContext _context;

        public TitheRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tithe>> GetAllAsync(int page, int pageSize)
        {
            return await _context.Tithes
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<Tithe> GetByIdAsync(int id) =>
            await _context.Tithes.FindAsync(id);

        public async Task AddAsync(Tithe tithe)
        {
            _context.Tithes.Add(tithe);
            await _context.SaveChangesAsync();
        }
        public async Task<IEnumerable<Tithe>> GetByChurchIdAsync(int churchId)
        {
            return await _context.Tithes
                .Where(t => t.ChurchId == churchId)
                .ToListAsync();
        }

        public async Task UpdateAsync(Tithe tithe)
        {
            _context.Tithes.Update(tithe);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var tithe = await _context.Tithes.FindAsync(id);
            if (tithe != null)
            {
                _context.Tithes.Remove(tithe);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Tithe>> GetByUserIdAsync(int userId)
        {
            return await _context.Tithes
                .Where(t => t.UserId == userId)
                .ToListAsync();
        }

        // 🔄 NOVO: Buscar dízimos por campanha
        
    }
}
