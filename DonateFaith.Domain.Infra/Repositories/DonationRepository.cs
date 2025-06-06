using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;

public class DonationRepository : IDonationRepository
{
    private readonly AppDbContext _context;

    public DonationRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Donation>> GetDonationsAsync(int page, int pageSize)
    {
        return await _context.Donations
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<Donation> GetByIdAsync(int id)
    {
        return await _context.Donations.FindAsync(id);
    }

    public async Task<IEnumerable<Donation>> GetByChurchCodeAsync(string churchCode)
    {
        return await _context.Donations
        .Join(
            _context.Churches,
            d => d.ChurchId,
            c => c.Id,
            (d, c) => new { Donation = d, Church = c }
        )
        .Where(dc => dc.Church.Code == churchCode)
        .Select(dc => dc.Donation)
        .ToListAsync();

    }

    public async Task<Donation> GetOnlyDonationAsync()
    {
        return await _context.Donations.FirstOrDefaultAsync();
    }

    public async Task AddAsync(Donation donation)
    {
        _context.Donations.Add(donation);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Donation donation)
    {
        _context.Donations.Update(donation);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var donation = await _context.Donations.FindAsync(id);
        if (donation != null)
        {
            _context.Donations.Remove(donation);
            await _context.SaveChangesAsync();
        }
    }
}
