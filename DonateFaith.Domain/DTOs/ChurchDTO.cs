using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class ChurchDTO
    {
        public int Id { get; set; }
        public int PastorId { get; set; }
        public string Name { get; set; }
        public string CNPJ { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public DateTime FoundedDate { get; set; }
    
    }
}
