using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;
namespace DonateFaith.Domain.Infra.Services
{
    public class ChurchService : IChurchService
    {
        private readonly AppDbContext _context;

        public ChurchService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<ChurchDTO?> GetChurchByPastorIdAsync(int pastorId)
        {
            var church = await _context.Churches
                                       .FirstOrDefaultAsync(c => c.PastorId == pastorId);

            if (church == null) return null;

            return new ChurchDTO
            {
                PastorId = church.PastorId,
                Id = church.Id,
                Name = church.Name,
                CNPJ = church.CNPJ,
                Address = church.Address,
                Phone = church.Phone,
                FoundedDate = church.FoundedDate,
                Code = church.Code
            };
        }

        public async Task<string> AddChurchAsync(ChurchDTO dto, int pastorId)
        {
            var pastor = await _context.Users.Include(u => u.Church)
                                             .FirstOrDefaultAsync(u => u.Id == pastorId && u.Role == UserRole.Pastor);

            if (pastor == null)
                throw new Exception("Pastor não encontrado.");

            if (pastor.Church != null)
                throw new Exception("Este pastor já possui uma igreja.");

            var church = new Church
            {
                PastorId = dto.PastorId,
                Name = dto.Name,
                CNPJ = dto.CNPJ,
                Address = dto.Address,
                Phone = dto.Phone,
                FoundedDate = dto.FoundedDate,
                Code = GenerateRandomCode(6) // gere ao criar
            };

            _context.Churches.Add(church);
            await _context.SaveChangesAsync();

            pastor.ChurchId = church.Id; // ✅ correto
            await _context.SaveChangesAsync();

            return church.Code; // retorno do código
        }
        public async Task<ChurchDTO?> GetChurchByCodeAsync(string code)
        {
            var church = await _context.Churches
                .FirstOrDefaultAsync(c => c.Code == code);

            if (church == null) return null;

            return new ChurchDTO
            {
                Id = church.Id,
                PastorId = church.PastorId,
                Name = church.Name,
                Address = church.Address,
                CNPJ = church.CNPJ,
                Phone = church.Phone,
                FoundedDate = church.FoundedDate
            };
        }

        public async Task UpdateChurchAsync(ChurchDTO dto)
        {
            var church = await _context.Churches.FindAsync(dto.Id);
            if (church == null)
                throw new Exception("Igreja não encontrada.");

            church.Name = dto.Name;
            church.CNPJ = dto.CNPJ;
            church.Address = dto.Address;
            church.Phone = dto.Phone;
            church.FoundedDate = dto.FoundedDate;

            // Gerar código caso não tenha
            if (string.IsNullOrEmpty(church.Code))
                church.Code = GenerateRandomCode(6);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteChurchAsync(int id)
        {
            var church = await _context.Churches.FindAsync(id);
            if (church == null)
                throw new Exception("Igreja não encontrada.");

            _context.Churches.Remove(church);
            await _context.SaveChangesAsync();
        }
        public async Task<ChurchDTO?> GetChurchByIdAsync(int id)
        {
            var church = await _context.Churches.FindAsync(id);
            if (church == null) return null;

            return new ChurchDTO
            {
                Id = church.Id,
                PastorId = church.PastorId,
                Name = church.Name,
                CNPJ = church.CNPJ,
                Address = church.Address,
                Phone = church.Phone,
                FoundedDate = church.FoundedDate
            };
        }

        private string GenerateRandomCode(int length)
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }

}

