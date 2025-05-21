using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.Models
{
    public class Donation
    {
        public int Id { get; set; }
        public int ChurchId { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public Church Church { get; set; }
        public string DonorName { get; set; }
        public string DonorEmail { get; set; }
        public decimal GoalsAmount { get; set; }
        public decimal Amount { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public DateTime DonationDate { get; set; }
        public int? TransactionId { get; set; }
        public Transaction? Transaction { get; set; }
        public User User { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
