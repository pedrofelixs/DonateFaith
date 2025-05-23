using DonateFaith.Domain.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using DonateFaith.Domain.Interfaces;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TitheController : ControllerBase
    {
        private readonly ITitheService _service;

        public TitheController(ITitheService service)
        {
            _service = service;
        }

        [HttpPost("give")]
        [Authorize(Roles = "Member")]
        public async Task<IActionResult> GiveTithe([FromBody] TitheDTO dto)
        {
            await _service.AddAsync(dto);
            return Ok(new { message = "Dízimo registrado com sucesso." });
        }

        [HttpGet("user/{userId}")]
        [Authorize(Roles = "Member,Pastor")]
        public async Task<IActionResult> GetUserTithes(int userId)
        {
            var tithes = await _service.GetByUserIdAsync(userId);
            return Ok(tithes);
        }

        [HttpGet]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var result = await _service.GetAllAsync(page, pageSize);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return Ok();
        }
    }

}
