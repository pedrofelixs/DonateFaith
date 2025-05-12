using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe.Checkout;
using Stripe;

namespace DonateFaith.Infrastructure.Services
{
    public class StripePaymentService : IPaymentService
    {
        private readonly IConfiguration _configuration;

        public StripePaymentService(IConfiguration configuration)
        {
            _configuration = configuration;
            StripeConfiguration.ApiKey = _configuration["Stripe:SecretKey"];
        }

        public async Task<string> CreateCheckoutSessionAsync(StripeDonDTO stripeDon)
        {
            var options = new SessionCreateOptions
            {
                PaymentMethodTypes = new List<string> { "card" },
                LineItems = new List<SessionLineItemOptions>
                {
                    new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            Currency = stripeDon.Currency,
                            UnitAmount = (long)(stripeDon.Amount * 100),
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = stripeDon.Description
                            }
                        },
                        Quantity = 1
                    }
                },
                Mode = "payment",
                SuccessUrl = stripeDon.SuccessUrl,
                CancelUrl = stripeDon.CancelUrl,
                CustomerEmail = stripeDon.CustomerEmail
            };

            var service = new SessionService();
            var session = await service.CreateAsync(options);
            return session.Url;
        }
    }
}
