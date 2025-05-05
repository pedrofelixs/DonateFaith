using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Models
{
    public class FinancialReport
    {
        public int Id { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public int TreasurerId { get; set; }
        public User Treasurer { get; set; }
        public DateTime Period { get; set; }
        public decimal InitialBalance { get; set; }
        public decimal TotalIncome { get; set; }
        public decimal TotalExpenses { get; set; }
        public decimal FinalBalance { get; set; }
        public string ReportFileUrl { get; set; }
    }
}
