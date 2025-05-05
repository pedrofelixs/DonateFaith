using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace DonateFaith.Domain.Models
{
    public class Tithe
    {
        public int Id { get; set; }
        public int MemberId { get; set; }
        public User Member { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public decimal Amount { get; set; }
        public DateTime TitheDate { get; set; }
        public int? TransactionId { get; set; }
        public Transaction Transaction { get; set; }
    }
}
