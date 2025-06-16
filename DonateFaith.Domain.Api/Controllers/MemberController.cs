using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] 
    public class MemberController : ControllerBase
    {
        private readonly IMemberService _memberService;

        public MemberController(IMemberService memberService)
        {
            _memberService = memberService;
        }

        [HttpGet]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetAll()
        {
            var members = await _memberService.GetAllMembersAsync();
            return Ok(members);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> GetById(int id)
        {
            var member = await _memberService.GetMemberByIdAsync(id);
            if (member == null) return NotFound();
            return Ok(member);
        }

        [HttpGet("church/{ChurchId}")]
        [Authorize(Roles = "Pastor, Member")]
        public async Task<IActionResult> GetByChurchId(int ChurchId)
        {
            var members = await _memberService.GetMembersByChurchIdAsync(ChurchId);
            if (members == null || !members.Any()) return NotFound();
            return Ok(members);
        }

        [HttpPost]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Create([FromBody] CreateMemberDTO dto)
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (claim == null)
                return Unauthorized("Token sem claim de identificação.");

            var pastorId = int.Parse(claim.Value);
            await _memberService.AddMemberAsync(dto, pastorId);
            return Ok(new { message = "Membro registrado com sucesso!" });
        }

        [HttpPut]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Update(UserDTO dto)
        {
            await _memberService.UpdateMemberAsync(dto);
            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Pastor")]
        public async Task<IActionResult> Delete(int id)
        {
            await _memberService.DeleteMemberAsync(id);
            return Ok();
        }

        [HttpGet("is-member/{churchId}")]
        [Authorize(Roles = "Member, Pastor")]
        public async Task<IActionResult> IsUserMemberOfChurch(int churchId)
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (claim == null)
                return Unauthorized("Token sem claim de identificação.");

            int memberId = int.Parse(claim.Value); 

            var members = await _memberService.GetMembersByChurchIdAsync(churchId);

            bool isMember = members.Any(m => m.Id == memberId);

            return Ok(new { isMember });
        }
    }

    }


