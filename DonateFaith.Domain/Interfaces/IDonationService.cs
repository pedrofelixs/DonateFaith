using DonateFaith.Domain.DTOs;

namespace DonateFaith.Domain.Interfaces
{
    public interface IDonationService
    {
        Task<IEnumerable<DonationDTO>> GetDonationsAsync(int page, int pageSize);
        Task<DonationDTO> GetDonationByIdAsync(int id); 
        Task<IEnumerable<DonationDTO>> GetDonationsByChurchCodeAsync(string churchCode); 
        Task<DonationDTO> GetOnlyDonationAsync(); 
        Task<IEnumerable<DonationDTO>> GetDonationsByCampaignIdAsync(int campaignId);

        Task AddDonationAsync(DonationDTO dto);
        Task CreateDonationAsync(DonationDTO dto); 
        Task UpdateDonationAsync(DonationDTO dto);
        Task DeleteDonationAsync(int id);
    }

}
