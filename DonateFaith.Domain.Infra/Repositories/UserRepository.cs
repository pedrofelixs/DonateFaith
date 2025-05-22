﻿using DonateFaith.Domain.Infra.Data;
using DonateFaith.Domain.Interfaces;
using DonateFaith.Domain.Models;
using DonateFaith.Domain.Models.Enums;
using Microsoft.EntityFrameworkCore;

public class UserRepository : IUserRepository
{
    private readonly AppDbContext _context;
    public UserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<User?> GetByEmailAsync(string email) =>
        await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

    public async Task<User?> GetByCPFAsync(string cpf) =>
        await _context.Users.FirstOrDefaultAsync(u => u.CPF == cpf);

    public async Task<User> GetByIdAsync(int id) =>
        await _context.Users.FindAsync(id);

    public async Task<IEnumerable<User>> GetMembersAsync() =>
        await _context.Users.Where(u => u.Role == UserRole.Member).ToListAsync();

    public async Task AddAsync(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateAsync(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var user = await GetByIdAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}
