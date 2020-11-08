using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Value> Values { get;set; }

        protected override void OnModelCreating (ModelBuilder builder){
            
            builder.Entity<Value>().HasData(
                new Value{Id =101, Name ="Laxmi"},
                new Value{Id =102, Name ="Kaali"},
                new Value{Id =103, Name ="Saraswati"}
            );
        }
    }
}
