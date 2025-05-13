using DonateFaith.Domain.DTOs;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IPaymentService
    {
        Task<string> CreateCheckoutSessionAsync(StripeDonDTO stripeDon);
    }
}
