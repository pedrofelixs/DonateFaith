using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

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
        [HttpGet("church/{churchId}")]
        public async Task<IActionResult> GetByChurchId(int churchId)
        {
            var tithes = await _service.GetByChurchIdAsync(churchId);
            if (tithes == null || !tithes.Any())
                return NotFound("Nenhum dízimo encontrado para esta igreja.");

            return Ok(tithes);
        }
        
        [HttpPost("give")]
        [Authorize(Roles = "Member, Pastor")]
        public async Task<IActionResult> GiveTithe([FromBody] TitheDTO dto)
        {
            await _service.AddAsync(dto);
            return Ok(new { message = "Dízimo registrado com sucesso." });
        }

        
        [HttpGet("all")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetAllTithes(int page = 1, int pageSize = 10)
        {
            var result = await _service.GetAllAsync(page, pageSize);
            return Ok(result);
        }

        
        [HttpGet("user/{userId}")]
        [Authorize(Roles = "Member, Pastor")]
        public async Task<IActionResult> GetUserTithes(int userId)
        {
            var result = await _service.GetByUserIdAsync(userId);
            return Ok(result);
        }


    }
}