using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Services;
using DonateFaith.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("pastor/{pastorId}")]
        public async Task<IActionResult> GetByPastorId(int pastorId)
        {
            var church = await _churchService.GetChurchByPastorIdAsync(pastorId);
            if (church == null) return NotFound("Igreja não encontrada.");
            return Ok(church);
        }

        [HttpGet("code/{code}")]
        public async Task<IActionResult> GetChurchByCode(string code)
        {
            var church = await _churchService.GetChurchByCodeAsync(code);
            if (church == null)
                return NotFound(new { message = "Igreja não encontrada com esse código." });

            return Ok(church);
        }

        [HttpPost("{pastorId}")]
        public async Task<IActionResult> Create([FromRoute] int pastorId, [FromBody] ChurchDTO dto)
        {
            var code = await _churchService.AddChurchAsync(dto, pastorId);
            return Ok(new { message = "Igreja criada com sucesso.", code });
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] ChurchDTO dto)
        {
            await _churchService.UpdateChurchAsync(dto);
            return Ok(new { message = "Igreja atualizada com sucesso." });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _churchService.DeleteChurchAsync(id);
            return Ok(new { message = "Igreja excluída com sucesso." });
        }
    }


}
