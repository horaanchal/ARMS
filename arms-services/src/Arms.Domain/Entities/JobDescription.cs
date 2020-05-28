using System;
using Hrms.Core.Domains.Entities;
using Microsoft.AspNetCore.Http;

namespace Arms.Domain.Entities
{
    public class JobDescription: Entity
    {
        public string LocationId { get; set; }
        public DateTime OpeningDate { get; set; }
        public DateTime ClosingDate { get; set; }
        public string Description { get; set; }
        public int Salary { get; set; }
        public string JobTitle { get; set; }
        public int Vacancies { get; set; }
        public IFormFile JdPdf { get; set; }
    }
}