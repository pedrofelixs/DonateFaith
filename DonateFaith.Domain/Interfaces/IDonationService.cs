using DonateFaith.Domain.DTOs;

namespace DonateFaith.Domain.Interfaces
{
    public interface IDonationService
    {
        Task<IEnumerable<DonationDTO>> GetDonationsAsync(int page, int pageSize);
        Task AddDonationAsync(DonationDTO dto);
        Task UpdateDonationAsync(DonationDTO dto);
        Task DeleteDonationAsync(int id);
    }
}
