using DonateFaith.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
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
    }
}
