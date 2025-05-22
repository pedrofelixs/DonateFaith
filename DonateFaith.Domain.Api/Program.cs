using DonateFaith.Domain.Api;
using DonateFaith.Domain.Api.Middlewares;
using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Infra.Repositories;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Database
builder.Services.AddDbContext<AppDbContext>();

// Repositories
builder.Services.AddScoped<IDonationRepository, DonationRepository>();
builder.Services.AddScoped<IEventRepository, EventRepository>();
builder.Services.AddScoped<IUserRepository, UserRepository>();

builder.Services.AddScoped<DonationService>();

// Controllers
builder.Services.AddControllers();


// Swagger (documentação)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "DonateFaith API", Version = "v1" });
});

var app = builder.Build();

// Pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "DonateFaith API v1");
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers(); // Necessário para que os controllers sejam mapeados
app.UseMiddleware<ResponseMiddelware>();
app.Run();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();
app.UseAuthorization();
app.UseCors();
