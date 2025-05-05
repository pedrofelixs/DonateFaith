using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DonateFaith.Domain.Infra.Repositories
{
    public class DonationRepository : IDonationRepository
    {
        private readonly AppDbContext _context;

        public DonationRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<(List<DonationDto> Donations, int TotalItems)> GetDonationsAsync(int page, int pageSize)
        {
            var query = _context.Donations.AsQueryable();

            var totalItems = await query.CountAsync();

            var donations = await query
                .OrderByDescending(d => d.CreatedAt)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(d => new DonationDto
                {
                    Id = d.Id,
                    Name = d.Name,
                    Description = d.Description,
                    Amount = d.Amount,
                    GoalsAmount = d.GoalsAmount,
                    CreatedAt = d.CreatedAt
                })
                .ToListAsync();

            return (donations, totalItems);
        }
    }
}
