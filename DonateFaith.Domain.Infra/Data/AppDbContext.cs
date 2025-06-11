using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;



namespace DonateFaith.Domain.Infra.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
            
        }

        public const string connString = "Server=localhost,1433;Database=DonateFaith;User ID=sa;Password=1q2w3e4r@#$;Trusted_Connection=False;TrustServerCertificate=True;";

        public DbSet<AdminChurch> AdminChurches { get; set; }
        public DbSet<Church> Churches { get; set; }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<FinancialReport> FinancialReports { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tithe> Tithes { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer(connString);
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<AdminChurch>()
            .HasKey(ac => new { ac.AdminId, ac.ChurchId });

            // Configurar relacionamentos (opcional, mas recomendado)
            modelBuilder.Entity<AdminChurch>()
                .HasOne(ac => ac.Admin)
                .WithMany() // Se quiser, pode configurar a navegação inversa no User
                .HasForeignKey(ac => ac.AdminId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<AdminChurch>()
                .HasOne(ac => ac.Church)
                .WithMany() // Se quiser, pode configurar a navegação inversa no Church
                .HasForeignKey(ac => ac.ChurchId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Church.Pastor (1:1)
            modelBuilder.Entity<Church>()
                .HasOne(c => c.Pastor)
                .WithOne() // sem navegação em User
                .HasForeignKey<Church>(c => c.PastorId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Church.Users (1:N - Membros)
            modelBuilder.Entity<User>()
                .HasOne(u => u.Church)
                .WithMany(c => c.Users)
                .HasForeignKey(u => u.ChurchId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Tithe.User (1:N)
            modelBuilder.Entity<Tithe>()
                .HasOne(t => t.User)
                .WithMany(u => u.Tithes)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Restrict);


            // 🔗 Tithe.Church
            modelBuilder.Entity<Tithe>()
                .HasOne(t => t.Church)
                .WithMany(c => c.Tithes)
                .HasForeignKey(t => t.ChurchId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Donation.User
            modelBuilder.Entity<Donation>()
                .HasOne(d => d.User)
                .WithMany()
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Donation.Church
            modelBuilder.Entity<Donation>()
                .HasOne(d => d.Church)
                .WithMany(c => c.Donations)
                .HasForeignKey(d => d.ChurchId)
                .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<Donation>()
                .HasOne(d => d.Transaction)
                .WithMany()
                .HasForeignKey(d => d.TransactionId);


            // 🔗 Event.Organizer
            modelBuilder.Entity<Event>()
                .HasOne(e => e.Organizer)
                .WithMany()
                .HasForeignKey(e => e.OrganizerId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Event.Church
            modelBuilder.Entity<Event>()
                .HasOne(e => e.Church)
                .WithMany(c => c.Events)
                .HasForeignKey(e => e.ChurchId)
                .OnDelete(DeleteBehavior.Restrict);

            // 🔗 Transaction (Donation / Tithe) — se necessário
            modelBuilder.Entity<Donation>()
                .HasOne(d => d.Transaction)
                .WithOne()
                .HasForeignKey<Donation>(d => d.TransactionId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Tithe>()
                .HasOne(t => t.Transaction)
                .WithOne()
                .HasForeignKey<Tithe>(t => t.TransactionId)
                .OnDelete(DeleteBehavior.Restrict);
        }

    }

}
