using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DonateFaith.Domain.Models;

namespace DonateFaith.Api.Data.Mappings
{
    public class DonationMap : IEntityTypeConfiguration<Donation>
    {
        public void Configure(EntityTypeBuilder<Donation> builder)
        {
            builder.ToTable("Donations");

            builder.HasKey(d => d.Id);

            // Nome da doação
            builder.Property(d => d.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            // Descrição opcional
            builder.Property(d => d.Description)
                   .HasMaxLength(500);

            // Nome do doador
            builder.Property(d => d.DonorName)
                   .IsRequired()
                   .HasMaxLength(100);

            // E-mail do doador
            builder.Property(d => d.DonorEmail)
                   .IsRequired()
                   .HasMaxLength(100);

            // Meta da doação
            builder.Property(d => d.GoalsAmount)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Valor doado
            builder.Property(d => d.Amount)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Método de pagamento
            builder.Property(d => d.PaymentMethod)
                   .IsRequired();

            // Data da doação
            builder.Property(d => d.DonationDate)
                   .IsRequired();

            // Data de criação
            builder.Property(d => d.CreatedAt)
                   .HasDefaultValueSql("GETUTCDATE()");

            // Relacionamento com Church
            builder.HasOne(d => d.Church)
                   .WithMany(c => c.Donations)
                   .HasForeignKey(d => d.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento com Transaction (opcional)
            builder.HasOne(d => d.Transaction)
                   .WithMany()
                   .HasForeignKey(d => d.TransactionId)
                   .OnDelete(DeleteBehavior.SetNull);

            // Relacionamento com User (assumindo que será via e-mail logado)
            builder.HasOne(d => d.User)
                   .WithMany()
                   .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
