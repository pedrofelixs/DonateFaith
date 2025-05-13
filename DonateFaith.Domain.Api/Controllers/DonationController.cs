using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Services;
using DonateFaith.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/donations")]
    public class DonationController : ControllerBase
    {
        private readonly DonationService _donationService;
        private readonly IPaymentService _paymentService;

        public DonationController(DonationService donationService, IPaymentService paymentService)
        {
            _donationService = donationService;
            _paymentService = paymentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetDonations([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var response = await _donationService.GetDonationsAsync(page, pageSize);
            return Ok(response);
        }

        [HttpPost("checkout")]
        public async Task<IActionResult> CreateStripeCheckout([FromBody] StripeDonDTO stripeDon)
        {
            var checkoutUrl = await _paymentService.CreateCheckoutSessionAsync(stripeDon);
            return Ok(new { checkoutUrl });
        }
    }
}
