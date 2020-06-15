using System;
using System.Collections.Generic;

namespace Arms.Api.DbModels
{
    public partial class Location
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string LocationName { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }
    }
}
