using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models;
using System.Transactions;

namespace DonateFaith.Domain.Models
{
    public class Church
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code  { get; set; }
        public string CNPJ { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime FoundedDate { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<Donation> Donations { get; set; }
        public ICollection<Tithe> Tithes { get; set; }
        public ICollection<Transaction> Transactions { get; set; } 
        public ICollection<FinancialReport> FinancialReports { get; set; }
        public ICollection<Event> Events { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}
