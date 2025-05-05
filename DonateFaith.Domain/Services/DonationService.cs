using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Interfaces;

namespace DonateFaith.Domain.Services
{
    public class DonationService
    {
        private readonly IDonationRepository _donationRepository;

        public DonationService(IDonationRepository donationRepository)
        {
            _donationRepository = donationRepository;
        }

        public async Task<object> GetDonationsAsync(int page, int pageSize)
        {
            var (donations, totalItems) = await _donationRepository.GetDonationsAsync(page, pageSize);

            return new
            {
                Data = new
                {
                    Items = donations,
                    Pagination = new
                    {
                        CurrentPage = page,
                        TotalPages = (int)Math.Ceiling((double)totalItems / pageSize),
                        TotalItems = totalItems
                    }
                },
                Error = (object?)null
            };
        }
    }
}
