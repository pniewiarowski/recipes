namespace API.DTOs;

public class Authorization
{
    public string JWTToken { get; set; }
    public User User { get; set; }

    public static Authorization Build(Models.User from, string token) => new()
    {
        JWTToken = token,
        User = new User
        {
            EntityID = from.EntityID,
            Name = from.Name,
            Email = from.Email
        }
    };
}