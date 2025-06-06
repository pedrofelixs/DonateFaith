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

        // ADMIN e PASTOR
        [HttpGet("pastor/{pastorId}")]
        [Authorize(Roles = "Admin,Pastor")]
        public async Task<IActionResult> GetByPastorId(int pastorId)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var userRole = User.FindFirst(ClaimTypes.Role)?.Value;

            // Se não for Admin, só pode consultar se for o próprio pastor
            if (userRole != "Admin" && userId != pastorId)
                return Forbid();

            var church = await _churchService.GetChurchByPastorIdAsync(pastorId);
            if (church == null) return NotFound("Igreja não encontrada.");
            return Ok(church);
        }

        // TODOS PODEM CONSULTAR POR CÓDIGO
        [HttpGet("code/{code}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetChurchByCode(string code)
        {
            var church = await _churchService.GetChurchByCodeAsync(code);
            if (church == null)
                return NotFound(new { message = "Igreja não encontrada com esse código." });

            return Ok(church);
        }

        // SOMENTE PASTOR pode criar igreja
        [HttpPost]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Create([FromBody] ChurchDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            var code = await _churchService.AddChurchAsync(dto, userId);
            return Ok(new { message = "Igreja criada com sucesso.", code });
        }

        // SOMENTE PASTOR pode editar sua própria igreja
        [HttpPut]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Update([FromBody] ChurchDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);

            // Valide se a igreja pertence ao pastor
            var church = await _churchService.GetChurchByPastorIdAsync(dto.Id);
            if (church == null || church.PastorId != userId)
                return Forbid();

            await _churchService.UpdateChurchAsync(dto);
            return Ok(new { message = "Igreja atualizada com sucesso." });
        }

        // SOMENTE PASTOR pode deletar sua igreja
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
