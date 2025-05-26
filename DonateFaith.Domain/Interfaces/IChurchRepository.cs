using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Interfaces
{
    public interface IChurchRepository
    {
        Task<Church?> GetByPastorIdAsync(int pastorId);
        Task<Church?> GetByIdAsync(int id);
        Task AddAsync(Church church);
        Task UpdateAsync(Church church);
        Task DeleteAsync(int id);
    }
}
