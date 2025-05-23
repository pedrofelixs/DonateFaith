using DonateFaith.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IEventService
    {
        Task<IEnumerable<EventDTO>> GetEventsAsync(int page, int pageSize);
        Task<EventDTO> GetByIdAsync(int id);
        Task AddAsync(EventDTO eventDto);
        Task UpdateAsync(EventDTO eventDto);
        Task DeleteAsync(int id);
        Task<IEnumerable<EventDTO>> GetEventsByChurchCodeAsync(string churchCode);
    }
}
