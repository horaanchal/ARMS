﻿using Hrms.Core.Domains.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Arms.Domain.CustomEntities
{
   public  class CustomJob:Entity

    {

       
        public string code { get; set; }
        public int eligibilityCriteriaId { get; set; }
     
        public int locationId { get; set; }
       
        public int employmentTypeId { get; set; }
      
        public DateTime openingDate { get; set; }
        public DateTime closingDate { get; set; }
        public string description { get; set; }
        public string salary { get; set; }
        public string jobTitle { get; set; }
        public string skills { get; set; }
        public int? vacancies { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        public string pdfString { get; set; }
        public Byte[] pdfBlobData { get; set; }

        public string createdBy { get; set; }
        public string modifiedBy { get; set; }

    }
}
