using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Services
{
    public class TitheService : ITitheService
    {
        private readonly ITitheRepository _repository;
        private readonly IUserRepository _userRepository;
        private readonly IChurchRepository _churchRepository;

        public TitheService(
            ITitheRepository repository,
            IUserRepository userRepository,
            IChurchRepository churchRepository)
        {
            _repository = repository;
            _userRepository = userRepository;
            _churchRepository = churchRepository;
        }

        public async Task<IEnumerable<TitheDTO>> GetAllAsync(int page, int pageSize)
        {
            var tithes = await _repository.GetAllAsync(page, pageSize);
            return tithes.Select(t => new TitheDTO
            {
                Id = t.Id,
                Amount = t.Amount,
                Date = t.Date,
                UserId = t.UserId,
                ChurchId = t.ChurchId
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
                UserId = tithe.UserId,
                ChurchId = tithe.ChurchId
            };
        }

        public async Task AddAsync(TitheDTO dto)
        {
            var user = await _userRepository.GetByIdAsync(dto.UserId);
            if (user == null)
                throw new Exception("Usuário não encontrado.");

            var church = await _churchRepository.GetByIdAsync(dto.ChurchId);
            if (church == null)
                throw new Exception("Igreja não encontrada.");

            var tithe = new Tithe
            {
                Amount = dto.Amount,
                Date = DateTime.UtcNow,
                TitheDate = dto.Date ?? DateTime.UtcNow,
                UserId = user.Id,
                ChurchId = church.Id,
                User = user,
                Church = church
            };

            await _repository.AddAsync(tithe);
        }

        public async Task UpdateAsync(TitheDTO dto)
        {
            var tithe = await _repository.GetByIdAsync(dto.Id);
            if (tithe == null)
                throw new Exception("Dízimo não encontrado.");

            tithe.Amount = dto.Amount;
            tithe.Date = dto.Date ?? tithe.Date;

            await _repository.UpdateAsync(tithe);
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        public async Task<IEnumerable<TitheDTO>> GetByUserIdAsync(int userId)
        {
            var tithes = await _repository.GetByUserIdAsync(userId);
            return tithes.Select(t => new TitheDTO
            {
                Id = t.Id,
                Amount = t.Amount,
                Date = t.Date,
                UserId = t.UserId,
                ChurchId = t.ChurchId
            });
        }
    }
}
