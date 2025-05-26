using DonateFaith.Domain.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IChurchService
    {
        Task<string> AddChurchAsync(ChurchDTO dto, int pastorId); // <-- aqui!

        Task<ChurchDTO?> GetChurchByPastorIdAsync(int pastorId);
        Task UpdateChurchAsync(ChurchDTO dto);
        Task DeleteChurchAsync(int pastorId);
        Task<ChurchDTO?> GetChurchByCodeAsync(string code);
    }
}
