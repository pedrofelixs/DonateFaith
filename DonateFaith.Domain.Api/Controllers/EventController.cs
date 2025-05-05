using DonateFaith.Domain.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [Route("api/events")]
    [ApiController]
    public class EventController
    {

        private readonly EventService _eventService;

        public EventController(EventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> GetEvents([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var events = await _eventService.GetEventsAsync(page, pageSize);
            return Ok(new
            {
                Data = new
                {
                    Items = events,
                    Pagination = new { CurrentPage = page, PageSize = pageSize }
                },
                Error = (string)null
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEventById(int id)
        {
            var eventDto = await _eventService.GetByIdAsync(id);
            if (eventDto == null)
            {
                return NotFound(new { Data = (object)null, Error = "Event not found" });
            }

            return Ok(new { Data = eventDto, Error = (string)null });
        }

    }
}
