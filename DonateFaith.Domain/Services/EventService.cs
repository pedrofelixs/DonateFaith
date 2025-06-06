using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Services
{
    public class EventService : IEventService
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
            });
        }

        public async Task<EventDTO> GetByIdAsync(int id)
        {
            var ev = await _eventRepository.GetByIdAsync(id);
            if (ev == null) return null;

            return new EventDTO
            {
                Id = ev.Id,
                Name = ev.Name,
                Description = ev.Description,
                StartDate = ev.Date,
                EndDate = ev.EndDate,
                Location = ev.Location,
                MaxNumber = ev.MaxParticipants
            };
        }

        public async Task AddAsync(EventDTO dto)
        {
            var ev = new Event
            {
                OrganizerId = dto.OrganizerId,
                ChurchId = dto.ChurchId, 
                Name = dto.Name,
                Description = dto.Description,
                Date = dto.StartDate,
                EndDate = dto.EndDate,
                Location = dto.Location,
                MaxParticipants = dto.MaxNumber
            };
            await _eventRepository.AddAsync(ev);
        }

        public async Task UpdateAsync(EventDTO dto)
        {
            var ev = await _eventRepository.GetByIdAsync(dto.Id);
            if (ev == null) return;

            ev.Name = dto.Name;
            ev.Description = dto.Description;
            ev.Date = dto.StartDate;
            ev.EndDate = dto.EndDate;
            ev.Location = dto.Location;
            ev.MaxParticipants = dto.MaxNumber;

            await _eventRepository.UpdateAsync(ev);
        }

        public async Task DeleteAsync(int id)
        {
            await _eventRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<EventDTO>> GetEventsByChurchCodeAsync(string churchCode)
        {
            var events = await _eventRepository.GetEventsByChurchCodeAsync(churchCode);
            return events.Select(e => new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                StartDate = e.Date,
                EndDate = e.EndDate,
                Location = e.Location,
                MaxNumber = e.MaxParticipants
            });
        }
    }

}
