using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class TransactionMap : IEntityTypeConfiguration<Transaction>
    {
        public void Configure(EntityTypeBuilder<Transaction> builder)
        {
            builder.ToTable("Transactions");

            builder.HasKey(t => t.Id);

            // Valor da transação
            builder.Property(t => t.Amount)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Data da transação
            builder.Property(t => t.TransactionDate)
                   .IsRequired();

            builder
                    .HasMany(t => t.Donations)
                    .WithOne(d => d.Transaction)
                    .HasForeignKey(d => d.TransactionId);

            builder
                    .HasMany(t => t.Tithes)
                    .WithOne(ti => ti.Transaction)
                    .HasForeignKey(ti => ti.TransactionId);

            // Descrição da transação
            builder.Property(t => t.Description)
                   .IsRequired()
                   .HasMaxLength(255);

            // Tipo da transação (enum)
            builder.Property(t => t.Type)
                   .IsRequired();

            // Relacionamento com a igreja
            builder.HasOne(t => t.Church)
                   .WithMany(c => c.Transactions)
                   .HasForeignKey(t => t.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
