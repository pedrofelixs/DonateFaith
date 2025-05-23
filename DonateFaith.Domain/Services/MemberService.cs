using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.Services
{
    public class MemberService : IMemberService
    {
        private readonly IMemberRepository _memberRepository;

        public MemberService(IMemberRepository memberRepository)
        {
            _memberRepository = memberRepository;
        }

        public async Task<IEnumerable<UserDTO>> GetAllMembersAsync()
        {
            var members = await _memberRepository.GetAllMembersAsync();
            return members.Select(u => new UserDTO
            {
                Id = u.Id,
                FullName = u.Name,
                Email = u.Email,
                Role = u.Role
            });
        }

        public async Task<UserDTO?> GetMemberByIdAsync(int id)
        {
            var user = await _memberRepository.GetMemberByIdAsync(id);
            if (user == null) return null;

            return new UserDTO
            {
                Id = user.Id,
                FullName = user.Name,
                Email = user.Email,
                Role = user.Role
            };
        }

        public async Task AddMemberAsync(UserDTO dto)
        {
            var member = new User
            {
                Name = dto.FullName,
                Email = dto.Email,
                Role = UserRole.Member,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            await _memberRepository.AddMemberAsync(member);
        }

        public async Task UpdateMemberAsync(UserDTO dto)
        {
            var member = await _memberRepository.GetMemberByIdAsync(dto.Id);
            if (member != null)
            {
                member.Name = dto.FullName;
                member.Email = dto.Email;
                await _memberRepository.UpdateMemberAsync(member);
            }
        }

        public async Task DeleteMemberAsync(int id)
        {
            await _memberRepository.DeleteMemberAsync(id);
        }
    }

}
