﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DonateFaith.Domain.Models.Enums;

namespace DonateFaith.Domain.DTOs
{
    public class UserDTO
    {
        public int? Id { get; set; }
        public string FullName { get; set; }
        public string CPF { get; set; }
        public string? Email { get; set; }
        public UserRole Role { get; set; }
    }

}
