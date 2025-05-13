using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models;
using Microsoft.EntityFrameworkCore;
using DonateFaith.Domain.Infra.Data;
using DonateFaith.Api.Data.Mappings;


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
            // Aplica todos os mapeamentos
            modelBuilder.ApplyConfiguration(new AdminChurchMap());
            modelBuilder.ApplyConfiguration(new ChurchMap());
            modelBuilder.ApplyConfiguration(new DonationMap());
            modelBuilder.ApplyConfiguration(new EventMap());
            modelBuilder.ApplyConfiguration(new FinancialReportMap());
            modelBuilder.ApplyConfiguration(new PostMap());
            modelBuilder.ApplyConfiguration(new UserMap());
            modelBuilder.ApplyConfiguration(new TitheMap());
            modelBuilder.ApplyConfiguration(new TransactionMap());
        }

    }

}
