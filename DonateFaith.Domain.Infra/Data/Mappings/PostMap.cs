using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using DonateFaith.Domain.Models;

namespace DonateFaith.Api.Data.Mappings
{
    public class PostMap : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.ToTable("Posts");

            builder.HasKey(p => p.Id);

            // Título obrigatório e com tamanho máximo
            builder.Property(p => p.Title)
                   .IsRequired()
                   .HasMaxLength(200);

            // Conteúdo obrigatório
            builder.Property(p => p.Content)
                   .IsRequired();

            // Data de publicação
            builder.Property(p => p.PublishedDate)
                   .IsRequired();

            // URL da imagem
            builder.Property(p => p.ImageUrl)
                   .HasMaxLength(300)
                   .IsRequired(false);

            // Relacionamento com Church
            builder.HasOne(p => p.Church)
                   .WithMany(c => c.Posts)
                   .HasForeignKey(p => p.ChurchId)
                   .OnDelete(DeleteBehavior.Cascade);

            // Relacionamento com o autor (User)
            builder.HasOne(p => p.Author)
                   .WithMany()
                   .HasForeignKey(p => p.AuthorId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
