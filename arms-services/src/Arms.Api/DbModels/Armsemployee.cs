using System;
using System.Collections.Generic;

namespace Arms.Api.DbModels
{
    public partial class Armsemployee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Designation { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }
    }
}
