using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public TransactionType Type { get; set; }
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public string Description { get; set; }
        public ICollection<Donation> Donations { get; set; }
        public ICollection<Tithe> Tithes { get; set; }
    }
}
