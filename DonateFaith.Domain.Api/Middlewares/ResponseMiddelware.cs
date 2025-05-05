using System.Text.Json;

namespace DonateFaith.Domain.Api.Middlewares
{
    public class ResponseMiddelware
    {
        private readonly RequestDelegate _next;

        public ResponseMiddelware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var originalBodyStream = context.Response.Body;
            using (var responseBody = new MemoryStream())
            {
                context.Response.Body = responseBody;

                await _next(context);

                context.Response.Body.Seek(0, SeekOrigin.Begin);
                var body = await new StreamReader(context.Response.Body).ReadToEndAsync();
                context.Response.Body.Seek(0, SeekOrigin.Begin);

                var response = new
                {
                    Data = context.Response.StatusCode >= 200 && context.Response.StatusCode < 300 ? JsonSerializer.Deserialize<object>(body) : null,
                    Error = context.Response.StatusCode >= 400 ? new { Message = body, Code = context.Response.StatusCode } : null
                };

                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(JsonSerializer.Serialize(response));
            }
        }
    }
}
