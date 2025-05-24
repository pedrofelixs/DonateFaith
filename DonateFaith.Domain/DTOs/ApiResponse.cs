﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class ApiResponse<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T? Data { get; set; }
        public List<string>? Errors { get; set; }

        public static ApiResponse<T> SuccessResponse(T data, string message = "")
            => new() { Success = true, Message = message, Data = data };

        public static ApiResponse<T> ErrorResponse(string message, List<string>? errors = null)
            => new() { Success = false, Message = message, Errors = errors };
    }

}
