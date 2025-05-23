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
    public class TitheService : ITitheService
    {
        private readonly ITitheRepository _repository;

        public TitheService(ITitheRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<TitheDTO>> GetAllAsync(int page, int pageSize)
        {
            var tithes = await _repository.GetAllAsync(page, pageSize);
            return tithes.Select(t => new TitheDTO
            {
                Id = t.Id,
                Amount = t.Amount,
                Date = t.Date,
                UserId = t.UserId
            });
        }

        public async Task<TitheDTO> GetByIdAsync(int id)
        {
            var tithe = await _repository.GetByIdAsync(id);
            if (tithe == null) return null;

            return new TitheDTO
            {
                Id = tithe.Id,
                Amount = tithe.Amount,
                Date = tithe.Date,
                UserId = tithe.UserId
            };
        }

        public async Task AddAsync(TitheDTO dto)
        {
            var tithe = new Tithe
            {
                Amount = dto.Amount,
                Date = dto.Date,
                UserId = dto.UserId
            };
            await _repository.AddAsync(tithe);
        }

        public async Task UpdateAsync(TitheDTO dto)
        {
            var tithe = new Tithe
            {
                Id = dto.Id,
                Amount = dto.Amount,
                Date = dto.Date,
                UserId = dto.UserId
            };
            await _repository.UpdateAsync(tithe);
        }

        public async Task DeleteAsync(int id) =>
            await _repository.DeleteAsync(id);

        public async Task<IEnumerable<TitheDTO>> GetByUserIdAsync(int userId)
        {
            var tithes = await _repository.GetByUserIdAsync(userId);
            return tithes.Select(t => new TitheDTO
            {
                Id = t.Id,
                Amount = t.Amount,
                Date = t.Date,
                UserId = t.UserId
            });
        }
    }
}
