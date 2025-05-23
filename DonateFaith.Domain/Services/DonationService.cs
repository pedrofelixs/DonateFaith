using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Services
{
    public class DonationService : IDonationService
    {
        private readonly IDonationRepository _donationRepository;

        public DonationService(IDonationRepository donationRepository)
        {
            _donationRepository = donationRepository;
        }

        public async Task<IEnumerable<DonationDTO>> GetDonationsAsync(int page, int pageSize)
        {
            var donations = await _donationRepository.GetDonationsAsync(page, pageSize);
            return donations.Select(d => new DonationDTO
            {
                Id = d.Id,
                Amount = d.Amount,
                Date = d.DonationDate,
                UserId = d.UserId,
                ChurchId = d.ChurchId
            });
        }

        public async Task AddDonationAsync(DonationDTO dto)
        {
            var donation = new Donation
            {
                Amount = dto.Amount,
                DonationDate = DateTime.UtcNow,
                UserId = dto.UserId,
                ChurchId = dto.ChurchId
            };
            await _donationRepository.AddAsync(donation);
        }

        public async Task UpdateDonationAsync(DonationDTO dto)
        {
            var donation = await _donationRepository.GetByIdAsync(dto.Id);
            if (donation != null)
            {
                donation.Amount = dto.Amount;
                donation.DonationDate = dto.Date;
                await _donationRepository.UpdateAsync(donation);
            }
        }

        public async Task DeleteDonationAsync(int id)
        {
            await _donationRepository.DeleteAsync(id);
        }
    }

}
