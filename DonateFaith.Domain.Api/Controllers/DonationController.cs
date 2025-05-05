using DonateFaith.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/donations")]
    public class DonationController : ControllerBase
    {
        private readonly DonationService _donationService;

        public DonationController(DonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetDonations([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var response = await _donationService.GetDonationsAsync(page, pageSize);
            return Ok(response);
        }
    }
}
