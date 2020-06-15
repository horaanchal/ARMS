﻿using Arms.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Arms.Infrastructure.EntityTypeConfigurations
{
    internal class LocationEntityTypeConfiguration : IEntityTypeConfiguration<Location>
    {
        public void Configure(EntityTypeBuilder<Location> builder)
        {
            builder.ToTable("ARMSLocation", "ARMS");
            builder.Property(e => e.LocationId).HasColumnName("LocationId");

            //builder.Property(e => e.id).ValueGeneratedOnAdd();
            builder.Property(e => e.LocationName)
                .IsRequired()
                .HasColumnName("LocationName");

           
        }
    }
}
