using DonateFaith.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface ITitheRepository
    {
        Task<IEnumerable<Tithe>> GetAllAsync(int page, int pageSize);
        Task<Tithe> GetByIdAsync(int id);
        Task AddAsync(Tithe tithe);
        Task UpdateAsync(Tithe tithe);
        Task DeleteAsync(int id);
        Task<IEnumerable<Tithe>> GetByUserIdAsync(int userId);
    }
}
