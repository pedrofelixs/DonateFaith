using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Infra.Repositories
{
    public class EventRepository : IEventRepository
    {
        private readonly AppDbContext _context;

        public EventRepository(AppDbContext context)
        {
            _context = context;
        }

        // 🔹 Retorna todos os eventos (sem paginação)
        public async Task<IEnumerable<Event>> GetAllAsync()
        {
            return await _context.Events
                .Include(e => e.Church)
                .ToListAsync();
        }

        // 🔹 Retorna eventos paginados
        public async Task<IEnumerable<Event>> GetEventsAsync(int page, int pageSize)
        {
            return await _context.Events
                .Include(e => e.Church)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        // 🔹 Retorna eventos por código da igreja
        public async Task<List<Event>> GetEventsByChurchCodeAsync(string churchCode)
        {
            return await _context.Events
                .Include(e => e.Church)
                .Where(e => e.Church.Code == churchCode)
                .ToListAsync();
        }

        // 🔹 Buscar evento por ID
        public async Task<Event> GetByIdAsync(int id)
        {
            return await _context.Events
                .Include(e => e.Church)
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        // 🔹 Adicionar novo evento
        public async Task AddAsync(Event eventEntity)
        {
            _context.Events.Add(eventEntity);
            await _context.SaveChangesAsync();
        }

        // 🔹 Atualizar evento
        public async Task UpdateAsync(Event eventEntity)
        {
            _context.Events.Update(eventEntity);
            await _context.SaveChangesAsync();
        }

        // 🔹 Deletar evento por ID
        public async Task DeleteAsync(int id)
        {
            var eventEntity = await _context.Events.FindAsync(id);
            if (eventEntity != null)
            {
                _context.Events.Remove(eventEntity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
