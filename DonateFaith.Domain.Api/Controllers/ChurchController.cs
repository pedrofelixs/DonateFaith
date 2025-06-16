using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Services;
using DonateFaith.Domain.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/church")]
    public class ChurchController : ControllerBase
    {
        private readonly IChurchService _churchService;

        public ChurchController(IChurchService churchService)
        {
            _churchService = churchService;
        }
        protected int GetUserIdFromToken()
        {
            var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == "id" || c.Type == ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("Token inválido ou usuário não autenticado.");

            return int.Parse(userIdClaim.Value);
        }

        
        [HttpGet("pastor/{pastorId}")]
        [Authorize(Roles = "Admin,Pastor")]
        public async Task<IActionResult> GetByPastorId(int pastorId)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var userRole = User.FindFirst(ClaimTypes.Role)?.Value;

            
            if (userRole != "Admin" && userId != pastorId)
                return Forbid();

            var church = await _churchService.GetChurchByPastorIdAsync(pastorId);
            if (church == null) return NotFound("Igreja não encontrada.");
            return Ok(church);
        }

        
        [HttpGet("code/{code}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetChurchByCode(string code)
        {
            var church = await _churchService.GetChurchByCodeAsync(code);
            if (church == null)
                return NotFound(new { message = "Igreja não encontrada com esse código." });

            return Ok(church);
        }

        
        [HttpPost]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Create([FromBody] ChurchDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var code = await _churchService.AddChurchAsync(dto, userId);
            return Ok(new { message = "Igreja criada com sucesso.", code });
        }

        
        [Authorize(Roles = "Pastor")]
        [HttpPut]
        public async Task<IActionResult> UpdateChurch(ChurchDTO dto)
        {
            var userId = GetUserIdFromToken(); 

            var church = await _churchService.GetChurchByPastorIdAsync(userId);
            if (church == null || church.Id != dto.Id)
                return Forbid(); 

            await _churchService.UpdateChurchAsync(dto);
            return Ok();
        }


        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var church = await _churchService.GetChurchByPastorIdAsync(id);
            if (church == null || church.PastorId != userId)
                return Forbid();

            await _churchService.DeleteChurchAsync(id);
            return Ok(new { message = "Igreja excluída com sucesso." });
        }
    }
}
