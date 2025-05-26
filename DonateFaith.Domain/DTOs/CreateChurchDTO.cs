namespace DonateFaith.Domain.DTOs
{
    public class CreateChurchDTO
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string CNPJ { get; set; }
        public string Phone { get; set; }
        public DateTime FoundedDate { get; set; }
    }
}
