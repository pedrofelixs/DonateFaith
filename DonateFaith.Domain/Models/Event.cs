using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models;

namespace DonateFaith.Domain.Models
{
    public class Event
    {
        public int Id { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public DateTime EndDate { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public int OrganizerId { get; set; }
        public User Organizer { get; set; }
        public int MaxParticipants { get; set; }
        public bool IsRegistrationOpen { get; set; }
    }
}
