using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class FinancialReportMap : IEntityTypeConfiguration<FinancialReport>
    {
        public void Configure(EntityTypeBuilder<FinancialReport> builder)
        {
            builder.ToTable("FinancialReports");

            builder.HasKey(r => r.Id);

            // Período do relatório
            builder.Property(r => r.Period)
                   .IsRequired();

            // Saldo inicial
            builder.Property(r => r.InitialBalance)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Total de receitas
            builder.Property(r => r.TotalIncome)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Total de despesas
            builder.Property(r => r.TotalExpenses)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // Saldo final
            builder.Property(r => r.FinalBalance)
                   .IsRequired()
                   .HasColumnType("decimal(18,2)");

            // URL do arquivo do relatório
            builder.Property(r => r.ReportFileUrl)
                   .IsRequired()
                   .HasMaxLength(300);

            // Relacionamento com Church
            builder.HasOne(r => r.Church)
                   .WithMany(c => c.FinancialReports)
                   .HasForeignKey(r => r.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento com User (tesoureiro)
            builder.HasOne(r => r.Treasurer)
                   .WithMany()
                   .HasForeignKey(r => r.TreasurerId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
