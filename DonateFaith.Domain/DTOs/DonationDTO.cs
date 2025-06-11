using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class DonationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? GoalsAmount { get; set; }
        public decimal? Amount { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public int UserId { get; set; }
        public int ChurchId { get; set; }
        public int? ParentDonationId { get; set; } // 👈 Adicionado
    }

}
