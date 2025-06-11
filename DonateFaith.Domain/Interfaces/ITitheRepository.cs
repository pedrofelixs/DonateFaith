using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Interfaces
{
    public interface ITitheRepository
    {
        Task<IEnumerable<Tithe>> GetAllAsync(int page, int pageSize);
        Task<Tithe> GetByIdAsync(int id);
        Task AddAsync(Tithe tithe);
        Task UpdateAsync(Tithe tithe);
        Task DeleteAsync(int id);
        Task<IEnumerable<Tithe>> GetByCampaignIdAsync(int campaignId);
        Task<IEnumerable<Tithe>> GetCampaignsByChurchIdAsync(int churchId);

        Task<IEnumerable<Tithe>> GetByUserIdAsync(int userId);
    }
}
