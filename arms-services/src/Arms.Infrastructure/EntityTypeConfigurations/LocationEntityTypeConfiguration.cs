using Arms.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Arms.Infrastructure.EntityTypeConfigurations
{
    internal class LocationEntityTypeConfiguration : IEntityTypeConfiguration<Location>
    {
        public void Configure(EntityTypeBuilder<Location> builder)
        {
<<<<<<< HEAD
            builder.ToTable("ARMSLocation", "ARMS");
            builder.Property(e => e.LocationId).HasColumnName("LocationId");
=======

            builder.ToTable("Location", "ARMS");
            builder.Property(e => e.id).HasColumnName("id");
>>>>>>> bc70fe955573f2fce2dc1999db33a75cb2af30e3

            //builder.Property(e => e.id).ValueGeneratedOnAdd();
            builder.Property(e => e.LocationName)
                .IsRequired()
                .HasColumnName("LocationName");

           
        }
    }
}

