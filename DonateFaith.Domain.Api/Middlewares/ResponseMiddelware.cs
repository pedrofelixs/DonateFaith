using System.Text.Json;

namespace DonateFaith.Domain.Api.Middlewares
{
    public class ResponseMiddleware
    {
        private readonly RequestDelegate _next;

        public ResponseMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var originalBodyStream = context.Response.Body;

            using var responseBody = new MemoryStream();
            context.Response.Body = responseBody;

            await _next(context); // processa pipeline

            context.Response.Body.Seek(0, SeekOrigin.Begin);
            var text = await new StreamReader(context.Response.Body).ReadToEndAsync();
            context.Response.Body.Seek(0, SeekOrigin.Begin);

            // você pode fazer logs aqui com `text`, se quiser

            await responseBody.CopyToAsync(originalBodyStream); // 👈 Copia de volta para o response final
            context.Response.Body = originalBodyStream;
        }
    }

}
