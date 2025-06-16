using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            var users = await _userService.GetUsersAsync(page, pageSize);
            return Ok(new
            {
                Data = new
                {
                    Items = users,
                    Pagination = new { CurrentPage = page, PageSize = pageSize }
                },
                Error = (string)null
            });
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            try
            {
                var userDto = await _userService.GetByIdAsync(id);
                if (userDto == null)
                    return NotFound(new { Message = "Usuário não encontrado." });

                return Ok(userDto);
            }
            catch (Exception ex)
            {
                // Pode logar o erro aqui se desejar
                return StatusCode(500, new { Message = "Erro interno do servidor.", Details = ex.Message });
            }
        }
    }
}
