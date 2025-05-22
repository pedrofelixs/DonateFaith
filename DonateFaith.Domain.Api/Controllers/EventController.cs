using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/events")]
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;

        public EventController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        // Somente pastores podem criar eventos
        [Authorize(Roles = "Pastor")]
        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] EventDTO dto)
        {
            var entity = new Event
            {
                Name = dto.Name,
                Description = dto.Description,
                Date = dto.StartDate,
                EndDate = dto.EndDate,
                Location = dto.Location,
                MaxParticipants = dto.MaxNumber
            };

            await _eventRepository.AddAsync(entity);
            return Ok(new ApiResponse<EventDTO>(dto));
        }

        // Todos podem ver os eventos
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventRepository.GetAllAsync();
            var result = events.Select(e => new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                StartDate = e.Date,
                EndDate = e.EndDate,
                Location = e.Location,
                MaxNumber = e.MaxParticipants
            }).ToList();

            return Ok(new ApiResponse<List<EventDTO>>(result));
        }

        // Pastor pode editar
        [Authorize(Roles = "Pastor")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(int id, [FromBody] EventDTO dto)
        {
            var eventEntity = await _eventRepository.GetByIdAsync(id);
            if (eventEntity == null)
                return NotFound(new ApiResponse<string>("Evento não encontrado", 404));

            eventEntity.Name = dto.Name;
            eventEntity.Description = dto.Description;
            eventEntity.Date = dto.StartDate;
            eventEntity.EndDate = dto.EndDate;
            eventEntity.Location = dto.Location;
            eventEntity.MaxParticipants = dto.MaxNumber;

            await _eventRepository.UpdateAsync(eventEntity);
            return Ok(new ApiResponse<EventDTO>(dto));
        }

        // Pastor pode deletar
        [Authorize(Roles = "Pastor")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var eventEntity = await _eventRepository.GetByIdAsync(id);
            if (eventEntity == null)
                return NotFound(new ApiResponse<string>("Evento não encontrado", 404));

            await _eventRepository.DeleteAsync(eventEntity.Id);
            return Ok(new ApiResponse<string>("Evento excluído com sucesso"));
        }

        [AllowAnonymous]
        [HttpGet("by-code/{churchCode}")]
        public async Task<IActionResult> GetEventsByChurchCode(string churchCode)
        {
            var events = await _eventRepository.GetEventsByChurchCodeAsync(churchCode);
            var result = events.Select(e => new EventDTO
            {
                Id = e.Id,
                Name = e.Name,
                Description = e.Description,
                StartDate = e.Date,
                EndDate = e.EndDate,
                Location = e.Location,
                MaxNumber = e.MaxParticipants,
            }).ToList();

            return Ok(new ApiResponse<List<EventDTO>>(result));
        }
    }
}
