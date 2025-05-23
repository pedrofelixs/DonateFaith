using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class TitheMap : IEntityTypeConfiguration<Tithe>
    {
        public void Configure(EntityTypeBuilder<Tithe> builder)
        {
            builder.ToTable("Tithes");

            builder.HasKey(t => t.Id);

            // Valor do dízimo
            builder.Property(t => t.Amount)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Data do dízimo
            builder.Property(t => t.TitheDate)
                   .IsRequired();

            // Relacionamento com o membro (User)
            builder.HasOne(t => t.Member)
                   .WithMany()
                   .HasForeignKey(t => t.MemberId)
                   .OnDelete(DeleteBehavior.Restrict);

            // Relacionamento com a Igreja
            builder.HasOne(t => t.Church)
                   .WithMany(c => c.Tithes)
                   .HasForeignKey(t => t.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento opcional com Transação
            builder.HasOne(t => t.Transaction)
                   .WithMany(tr => tr.Tithes)
                   .HasForeignKey(t => t.TransactionId)
                   .OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(t => t.User)
                   .WithMany(u => u.Tithes)
                   .HasForeignKey(t => t.UserId);

            builder.HasOne(t => t.User)
                   .WithMany(u => u.Tithes)
                   .HasForeignKey(t => t.UserId)
                   .OnDelete(DeleteBehavior.Cascade);


        }
    }
}
