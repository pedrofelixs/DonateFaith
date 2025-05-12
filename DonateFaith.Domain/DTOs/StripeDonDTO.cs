namespace DonateFaith.Domain.DTOs
{
    public class StripeDonDTO
    {
        public decimal Amount { get; set; }
        public string Currency { get; set; } = "brl";
        public string Description { get; set; }
        public string CustomerEmail { get; set; }
        public string SuccessUrl { get; set; }
        public string CancelUrl { get; set; }
    }
}
