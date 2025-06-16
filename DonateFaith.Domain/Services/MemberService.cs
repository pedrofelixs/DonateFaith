using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.Services
{
    public class MemberService : IMemberService
    {
        private readonly IMemberRepository _memberRepository;
        private readonly IUserRepository _userRepository;
        public MemberService(IMemberRepository memberRepository, IUserRepository userRepository)
        {
            _memberRepository = memberRepository;
            _userRepository = userRepository;
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

        public async Task<IEnumerable<UserDTO>> GetMembersByChurchIdAsync(int churchId)
{
        var members = await _memberRepository.GetMembersByChurchIdAsync(churchId);
        return members.Select(member => new UserDTO
        {
            Id = member.Id,
            FullName = member.FullName,
            Email = member.Email,
            CPF = member.CPF
            // Adapte os campos conforme seu DTO
        });
}

        public async Task AddMemberAsync(CreateMemberDTO dto, int pastorId)
        {
            var pastor = await _userRepository.GetByIdAsync(pastorId);

            if (pastor == null)
                throw new Exception($"Pastor com ID {pastorId} não foi encontrado.");

            if (pastor.Role != UserRole.Pastor)
                throw new Exception("Usuário não é um pastor.");

            if (pastor.ChurchId == null)
                throw new Exception("Pastor não está vinculado a nenhuma igreja.");

            var existingUser = await _userRepository.GetByCPFAsync(dto.CPF);

            if (existingUser != null)
            {
                existingUser.Role = UserRole.Member;
                existingUser.ChurchId = pastor.ChurchId;
                existingUser.FullName = dto.FullName;
                existingUser.Name = dto.FullName.Split(' ')[0];
                existingUser.Email = dto.Email;

                await _userRepository.UpdateAsync(existingUser);
            }
            else
            {
                var member = new User
                {
                    FullName = dto.FullName,
                    Name = dto.FullName.Split(' ')[0],
                    CPF = dto.CPF,
                    Email = dto.Email,
                    Role = UserRole.Member,
                    ChurchId = pastor.ChurchId
                };

                await _userRepository.AddAsync(member);
            }
        }


        public async Task UpdateMemberAsync(UserDTO dto)
        {
            if (dto.Id == null) throw new Exception("ID do membro não informado.");

            var member = await _memberRepository.GetMemberByIdAsync(dto.Id.Value);
            if (member != null)
            {
                member.FullName = dto.FullName;
                member.Name = dto.FullName.Split(' ')[0];
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
