using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Database;

public class Context(DbContextOptions<Context> options) : DbContext(options)
{
    public DbSet<User> Users { get; init; }
    public DbSet<Recipe> Recipes { get; init; }
}