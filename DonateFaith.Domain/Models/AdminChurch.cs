using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.Models
{
    public class AdminChurch
    {
        public int AdminId { get; set; }
        public User Admin { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
    }

}
