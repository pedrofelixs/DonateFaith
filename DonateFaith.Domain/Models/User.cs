using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FullName { get; set; }
        public string CPF {  get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public UserRole Role { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public string? ChurchCode { get; set; }
        public ICollection<AdminChurch> AdminChurches { get; set; }
        public ICollection<Tithe> Tithes { get; set; }
    }
}
