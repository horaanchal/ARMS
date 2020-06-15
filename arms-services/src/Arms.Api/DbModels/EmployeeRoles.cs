using System;
using System.Collections.Generic;

namespace Arms.Api.DbModels
{
    public partial class EmployeeRoles
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public bool IsSystemRole { get; set; }
        public string SystemName { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public int? RoleOrder { get; set; }
    }
}
