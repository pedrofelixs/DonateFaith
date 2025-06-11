using DonateFaith.Domain.DTOs;

namespace DonateFaith.Domain.Interfaces
{
    public interface IDonationService
    {
        Task<IEnumerable<DonationDTO>> GetDonationsAsync(int page, int pageSize);
        Task<DonationDTO> GetDonationByIdAsync(int id); // <-- NOVO
        Task<IEnumerable<DonationDTO>> GetDonationsByChurchCodeAsync(string churchCode); // <-- NOVO
        Task<DonationDTO> GetOnlyDonationAsync(); // <-- NOVO
        Task<IEnumerable<DonationDTO>> GetDonationsByCampaignIdAsync(int campaignId);

        Task AddDonationAsync(DonationDTO dto);
        Task CreateDonationAsync(DonationDTO dto); // <-- NOVO
        Task UpdateDonationAsync(DonationDTO dto);
        Task DeleteDonationAsync(int id);
    }

}
