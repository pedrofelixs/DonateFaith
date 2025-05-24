using DonateFaith.Domain.DTOs;
using DonateFaith.Domain.Infra.Services;
using Microsoft.AspNetCore.Mvc;

namespace DonateFaith.Domain.Api.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO loginDto)
        {
            try
            {
                var result = await _authService.AuthenticateAsync(loginDto);
                var response = ApiResponse<AuthResponseDTO>.SuccessResponse(result, "Login realizado com sucesso.");
                return Ok(response);
            }
            catch (UnauthorizedAccessException)
            {
                var response = ApiResponse<AuthResponseDTO>.ErrorResponse("Credenciais inválidas.", new List<string> { "Email ou senha incorretos." });
                return Unauthorized(response);
            }
            catch (Exception ex)
            {
                var response = ApiResponse<AuthResponseDTO>.ErrorResponse("Erro interno ao tentar realizar o login.", new List<string> { ex.Message });
                return StatusCode(500, response);
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDTO registerDto)
        {
            try
            {
                await _authService.RegisterAsync(registerDto);
                var response = ApiResponse<string>.SuccessResponse(null, "Registro realizado com sucesso.");
                return Ok(response);
            }
            catch (Exception ex)
            {
                var response = ApiResponse<string>.ErrorResponse("Erro ao registrar usuário.", new List<string> { ex.Message });
                return StatusCode(500, response);
            }
        }
    }
}
