using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Interfaces
{
    public interface IDonationRepository
    {
        Task<IEnumerable<Donation>> GetDonationsAsync(int page, int pageSize);
        Task<Donation> GetByIdAsync(int id);
        Task<IEnumerable<Donation>> GetByChurchCodeAsync(string churchCode); // <-- NOVO
        Task<Donation> GetOnlyDonationAsync(); // <-- NOVO

        Task AddAsync(Donation donation);
        Task UpdateAsync(Donation donation);
        Task DeleteAsync(int id);
    }

}
