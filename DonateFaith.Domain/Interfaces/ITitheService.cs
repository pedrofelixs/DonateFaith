using DonateFaith.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface ITitheService
    {
        Task<IEnumerable<TitheDTO>> GetAllAsync(int page, int pageSize);
        Task<TitheDTO> GetByIdAsync(int id);
        Task AddAsync(TitheDTO titheDto);
        Task UpdateAsync(TitheDTO titheDto);
        Task DeleteAsync(int id);

        Task<IEnumerable<TitheDTO>> GetByUserIdAsync(int userId);

    }
}
