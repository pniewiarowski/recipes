using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class User
{
    [Key] public int EntityID { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}