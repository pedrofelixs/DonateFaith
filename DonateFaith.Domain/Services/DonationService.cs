using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;

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
        return donations.Select(ToDto);
    }

    public async Task<DonationDTO> GetDonationByIdAsync(int id)
    {
        var donation = await _donationRepository.GetByIdAsync(id);
        return donation == null ? null : ToDto(donation);
    }

    public async Task<IEnumerable<DonationDTO>> GetDonationsByChurchCodeAsync(string churchCode)
    {
        var donations = await _donationRepository.GetByChurchCodeAsync(churchCode);
        return donations.Select(ToDto);
    }

    public async Task<DonationDTO> GetOnlyDonationAsync()
    {
        var donation = await _donationRepository.GetOnlyDonationAsync();
        return donation == null ? null : ToDto(donation);
    }

    public async Task AddDonationAsync(DonationDTO dto)
    {
        var donation = new Donation
        {
            Name = dto.Name,
            GoalsAmount = dto.GoalsAmount,
            CreatedAt = dto.Date,
            Description = dto.Description,
            Amount = dto.Amount,
            DonationDate = DateTime.UtcNow,
            UserId = dto.UserId,
            ChurchId = dto.ChurchId,
            ParentDonationId = dto.ParentDonationId,
            
        };

        await _donationRepository.AddDonationWithParentUpdateAsync(donation);
    }
    public async Task<IEnumerable<DonationDTO>> GetDonationsByCampaignIdAsync(int campaignId)
    {
        var donations = await _donationRepository.GetDonationsByParentIdAsync(campaignId);
        return donations.Select(ToDto);
    }



    public async Task CreateDonationAsync(DonationDTO dto)
    {
        var donation = new Donation
        {
            Name = dto.Name,
            GoalsAmount = dto.GoalsAmount,
            CreatedAt = dto.Date,
            Description = dto.Description,
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
	    donation.Name = dto.Name;
            donation.CreatedAt = dto.Date;
            donation.GoalsAmount = dto.GoalsAmount;
            donation.Description = dto.Description;
            donation.Amount = dto.Amount;
            donation.DonationDate = dto.Date;
            await _donationRepository.UpdateAsync(donation);
        }
    }

    public async Task DeleteDonationAsync(int id)
    {
        await _donationRepository.DeleteAsync(id);
    }

    private static DonationDTO ToDto(Donation d) => new DonationDTO
    {
        Id = d.Id,
        Name = d.Name,
        Description = d.Description,
        GoalsAmount = d.GoalsAmount,
        Amount = d.Amount,
        Date = d.DonationDate,
        UserId = d.UserId,
        ChurchId = d.ChurchId,
        ParentDonationId = d.ParentDonationId 
    };
}

