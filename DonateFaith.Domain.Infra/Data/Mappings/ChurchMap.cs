using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class ChurchMap : IEntityTypeConfiguration<Church>
    {
        public void Configure(EntityTypeBuilder<Church> builder)
        {
            builder.ToTable("Churches");

            builder.HasKey(c => c.Id);

            // Nome obrigatório e limitado
            builder.Property(c => c.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            // CNPJ obrigatório e limitado (considerando 18 caracteres com pontuação)
            builder.Property(c => c.CNPJ)
                   .IsRequired()
                   .HasMaxLength(18);

            // Endereço obrigatório
            builder.Property(c => c.Address)
                   .IsRequired()
                   .HasMaxLength(200);

            // Telefone obrigatório
            builder.Property(c => c.Phone)
                   .IsRequired()
                   .HasMaxLength(20);

            // Data de fundação obrigatória
            builder.Property(c => c.FoundedDate)
                   .IsRequired();

            // Relacionamentos (configurados em entidades relacionadas via HasOne / HasMany)
        }
    }
}
