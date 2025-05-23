using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet]
        public async Task<IActionResult> GetEvents([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var events = await _eventService.GetEventsAsync(page, pageSize);
            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var ev = await _eventService.GetByIdAsync(id);
            if (ev == null) return NotFound();
            return Ok(ev);
        }

        [HttpPost]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Add([FromBody] EventDTO dto)
        {
            await _eventService.AddAsync(dto);
            return Ok();
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
        [Authorize]
        public async Task<IActionResult> GetByChurchCode(string churchCode)
        {
            var events = await _eventService.GetEventsByChurchCodeAsync(churchCode);
            return Ok(events);
        }
    }

}
