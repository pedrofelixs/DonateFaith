using DonateFaith.Domain.Infra.Data;
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

    public async Task<IEnumerable<User>> GetUsersAsync(int page, int pageSize)
    {
        return await _context.Users
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        if (user == null)
        {
            // Retorno seguro para evitar erros
            return null;
        }
        return user;
    }

    // outras implementações como:
    //public async Task<User> GetByEmailAsync(string email)
        //=> await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

    public async Task<User> GetByCPFAsync(string cpf)
        => await _context.Users.FirstOrDefaultAsync(u => u.CPF == cpf);

    public async Task AddAsync(User user)
    {
        user.Name = user.FullName.Split(' ')[0];
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
    }

    public async Task<User?> GetByIdAsync(int id)
    {
        return await _context.Users
            .Include(u => u.Church) // opcional, se for usar .Church depois
            .FirstOrDefaultAsync(u => u.Id == id);
    }
    public async Task UpdateAsync(User user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<User>> GetMembersAsync()
    {
        return await _context.Users
            .Where(u => u.Role == UserRole.Member)
            .ToListAsync();
    }
    public async Task DeleteAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}
