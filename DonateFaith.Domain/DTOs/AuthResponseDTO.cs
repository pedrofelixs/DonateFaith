    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class AuthResponseDTO
    {
        public string Token { get; set; }
        public string Role { get; set; }
        public string UserName { get; set; }
    }
}
