using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Filters;
using System.Security.Claims;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DonationController : ControllerBase
    {
        private readonly IDonationService _donationService;

        public DonationController(IDonationService donationService)
        {
            _donationService = donationService;
        }

        // 🔓 GET público por código da igreja
        [HttpGet("code/{churchCode}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByChurchCode(string churchCode)
        {
            var donations = await _donationService.GetDonationsByChurchCodeAsync(churchCode);
            return Ok(donations);
        }

        // 🔓 GET público da única doação do sistema
        [HttpGet("only-one")]
        [AllowAnonymous]
        public async Task<IActionResult> GetSingleDonation()
        {
            var donation = await _donationService.GetOnlyDonationAsync();
            if (donation == null) return NotFound();
            return Ok(donation);
        }

        // 🔐 POST para checkout — qualquer usuário autenticado pode doar
        [HttpPost("checkout")]
        [Authorize]
        public async Task<IActionResult> Checkout([FromBody] DonationDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            dto.UserId = userId;

            // Garantir que ParentDonationId está presente para associar à campanha
            if (dto.ParentDonationId == null)
                return BadRequest("A doação deve estar associada a uma campanha.");

            await _donationService.AddDonationAsync(dto);
            return Ok(new { message = "Doação realizada com sucesso!" });
        }

        // 🔐 POST para criar uma nova campanha de doação — apenas Pastores
        [HttpPost]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Create([FromBody] DonationDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            dto.UserId = userId;

            // Campanha não deve ter ParentDonationId
            dto.ParentDonationId = null;

            await _donationService.CreateDonationAsync(dto);
            return Ok(new { message = "Campanha de doação criada com sucesso!" });
        }

        [HttpGet("by-church-code/{churchCode}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetDonationsByChurchCode(string churchCode)
        {
            var donations = await _donationService.GetDonationsByChurchCodeAsync(churchCode);
            return Ok(donations);
        }

        [HttpGet("campaign/{campaignId}/donations")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetDonationsOfCampaign(int campaignId)
        {
            var donations = await _donationService.GetDonationsByCampaignIdAsync(campaignId);
            return Ok(donations);
        }

        [HttpPut]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Update([FromBody] DonationDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            var existing = await _donationService.GetDonationByIdAsync(dto.Id);
            if (existing == null || existing.UserId != userId)
                return Forbid();

            await _donationService.UpdateDonationAsync(dto);
            return Ok(new { message = "Doação atualizada com sucesso!" });
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

            var donation = await _donationService.GetDonationByIdAsync(id);
            if (donation == null || donation.UserId != userId)
                return Forbid();

            await _donationService.DeleteDonationAsync(id);
            return NoContent();
        }
    }
}
