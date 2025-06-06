using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetEvents([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var events = await _eventService.GetEventsAsync(page, pageSize);
            return Ok(events);
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ev = await _eventService.GetByIdAsync(id);
            if (ev == null) return NotFound();
            return Ok(ev);
        }

        [Authorize(Roles = "Pastor")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] EventDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            dto.OrganizerId = userId;

            await _eventService.AddAsync(dto);
            return Ok(new { message = "Evento criado com sucesso!" });
        }


        [HttpPut]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Update([FromBody] EventDTO dto)
        {
            await _eventService.UpdateAsync(dto);
            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            await _eventService.DeleteAsync(id);
            return Ok();
        }

        [HttpGet("by-church-code/{churchCode}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByChurchCode(string churchCode)
        {
            var events = await _eventService.GetEventsByChurchCodeAsync(churchCode);
            return Ok(events);
        }
    }

}
