using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DonateFaith.Domain.Models;

namespace DonateFaith.Api.Data.Mappings
{
    public class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(u => u.Id);

            // Nome
            builder.Property(u => u.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            // Nome completo
            builder.Property(u => u.FullName)
                   .IsRequired()
                   .HasMaxLength(150);

            // Email
            builder.Property(u => u.Email)
                   .IsRequired()
                   .HasMaxLength(100);

            // Senha
            builder.Property(u => u.PasswordHash)
                   .IsRequired();

            // Enum de função (UserRole)
            builder.Property(u => u.Role)
                   .IsRequired();

            // Relacionamento opcional com Igreja (ChurchId pode ser nulo)
            builder.HasOne(u => u.Church)
                   .WithMany(c => c.Users)
                   .HasForeignKey(u => u.ChurchId)
                   .OnDelete(DeleteBehavior.Restrict); // evita deleção em cascata

            // Relacionamento com AdminChurch (N:N)
            builder.HasMany(u => u.AdminChurches)
                   .WithOne(ac => ac.Admin)
                   .HasForeignKey(ac => ac.AdminId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento com dízimos
            builder.HasMany(u => u.Tithes)
                   .WithOne(t => t.Member)
                   .HasForeignKey(t => t.MemberId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
