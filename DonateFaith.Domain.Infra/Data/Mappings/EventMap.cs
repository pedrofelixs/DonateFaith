using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DonateFaith.Domain.Infra.Data.Mappings
{
    public class EventMap : IEntityTypeConfiguration<Event>
    {
        public void Configure(EntityTypeBuilder<Event> builder)
        {
            builder.ToTable("Events");

            builder.HasKey(e => e.Id);

            // Nome do evento
            builder.Property(e => e.Name)
                   .IsRequired()
                   .HasMaxLength(100);

            // Data de início
            builder.Property(e => e.Date)
                   .IsRequired();

            // Data de término
            builder.Property(e => e.EndDate)
                   .IsRequired();

            // Local do evento
            builder.Property(e => e.Location)
                   .IsRequired()
                   .HasMaxLength(200);

            // Descrição do evento
            builder.Property(e => e.Description)
                   .HasMaxLength(500);

            // Número máximo de participantes
            builder.Property(e => e.MaxParticipants)
                   .IsRequired();

            // Flag de inscrição aberta
            builder.Property(e => e.IsRegistrationOpen)
                   .IsRequired();

            // Relacionamento com Church
            builder.HasOne(e => e.Church)
                   .WithMany(c => c.Events)
                   .HasForeignKey(e => e.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento com User (organizador)
            builder.HasOne(e => e.Organizer)
                   .WithMany()
                   .HasForeignKey(e => e.OrganizerId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
