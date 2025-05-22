using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DonateFaith.Domain.DTOs
{
    public class ApiResponse<T>
    {
        public T Data { get; set; }
        public object Error { get; set; }

        public ApiResponse(T data)
        {
            Data = data;
            Error = null;
        }

        public ApiResponse(string errorMessage, int code)
        {
            Data = default;
            Error = new { Message = errorMessage, Code = code };
        }
    }
}
