using System.ComponentModel.DataAnnotations.Schema;


namespace DonateFaith.Domain.Models
{
    public class Tithe
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ChurchId { get; set; }
        public Church Church { get; set; }
        public decimal? Amount { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        public DateTime? Date { get; set; }
        public int? TransactionId { get; set; }
        public int? CampaignId { get; set; }
        public ICollection<Tithe>? Tithes { get; set; }

        [ForeignKey(nameof(TransactionId))]
        public Transaction? Transaction { get; set; }
        public DateTime? TitheDate { get; set; }
    }
}
