using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class AdminChurchMap : IEntityTypeConfiguration<AdminChurch>
    {
        public void Configure(EntityTypeBuilder<AdminChurch> builder)
        {
            builder.ToTable("AdminChurches");

            // Chave primária composta
            builder.HasKey(ac => new { ac.AdminId, ac.ChurchId });

            // Relação com User (Admin)
            builder.HasOne(ac => ac.Admin)
                   .WithMany() // Se você tiver uma propriedade do tipo List<AdminChurch> no User, substitua por .WithMany(u => u.AdminChurches)
                   .HasForeignKey(ac => ac.AdminId)
                   .OnDelete(DeleteBehavior.Restrict);

            // Relação com Church
            builder.HasOne(ac => ac.Church)
                   .WithMany() // Se você tiver uma propriedade do tipo List<AdminChurch> em Church, substitua por .WithMany(c => c.AdminChurches)
                   .HasForeignKey(ac => ac.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
