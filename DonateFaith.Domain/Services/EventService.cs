using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;

namespace DonateFaith.Domain.Services
{
    public class EventService
    {
        private readonly IEventRepository _eventRepository;

        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<IEnumerable<EventDTO>> GetEventsAsync(int page, int pageSize)
        {
            var events = await _eventRepository.GetEventsAsync(page, pageSize);
            return events.Select(e => new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                StartDate = e.Date,
                EndDate = e.EndDate,
                Location = e.Location,
                MaxNumber = e.MaxParticipants
            }).ToList();
        }

        public async Task<EventDTO> GetByIdAsync(int id)
        {
            var e = await _eventRepository.GetByIdAsync(id);
            if (e == null) return null;

            return new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                EndDate = e.EndDate,
                Location = e.Location,
                MaxNumber = e.MaxParticipants
            };
        }

    }
}
