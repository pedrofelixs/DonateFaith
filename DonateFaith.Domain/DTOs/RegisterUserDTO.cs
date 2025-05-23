using DonateFaith.Domain.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class RegisterUserDTO
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public UserRole Role { get; set; }
        public string CPF { get; set; }
        public string Password { get; set; }
    }
}
