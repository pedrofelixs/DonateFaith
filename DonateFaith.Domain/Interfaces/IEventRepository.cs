using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Interfaces
{
    public interface IEventRepository
    {
        Task<IEnumerable<Event>> GetAllAsync();
        Task<IEnumerable<Event>> GetEventsAsync(int page, int pageSize);
        Task<List<Event>> GetEventsByChurchCodeAsync(string churchCode);
        Task<Event> GetByIdAsync(int id);
        Task AddAsync(Event eventEntity);
        Task UpdateAsync(Event eventEntity);
        Task DeleteAsync(int id);
    }
}
