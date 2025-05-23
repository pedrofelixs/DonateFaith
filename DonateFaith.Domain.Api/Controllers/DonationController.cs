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
    public class DonationController : ControllerBase
    {
        private readonly IDonationService _donationService;

        public DonationController(IDonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpGet]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetDonations(int page = 1, int pageSize = 10)
        {
            var donations = await _donationService.GetDonationsAsync(page, pageSize);
            return Ok(donations);
        }

        [HttpPost("checkout")]
        [Authorize] // Qualquer usuário logado pode doar
        public async Task<IActionResult> Checkout([FromBody] DonationDTO dto)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            dto.UserId = userId;

            await _donationService.AddDonationAsync(dto);
            return Ok(new { message = "Doação realizada com sucesso!" });
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            await _donationService.DeleteDonationAsync(id);
            return NoContent();
        }
    }

}
