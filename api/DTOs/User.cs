using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class User
{
    public int EntityID { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    public static User Build(Models.User from) => new User
    {
        EntityID = from.EntityID,
        Name = from.Name,
        Email = from.Email,
    };

    public static List<User> BuildFromCollection(Models.User[] from)
    {
        return from.Select(user => Build(user)).ToList();
    }
}