using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.DTOs;

namespace DonateFaith.Domain.Interfaces
{
    public interface IDonationRepository
    {
        Task<(List<DonationDto> Donations, int TotalItems)> GetDonationsAsync(int page, int pageSize);
    }
}
