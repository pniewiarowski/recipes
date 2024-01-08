using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Recipe
{
    [Key] public int EntityID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Preparation { get; set; }
    [Range(0, 5)] public float Rating { get; set; }
    [Range(0, 5)] public float Difficulty { get; set; }
    public float Price { get; set; }

    public User Owner { get; set; }

    public static Recipe Build(DTOs.Recipe from) => new Recipe
    {
        EntityID = from.EntityID,
        Title = from.Title,
        Description = from.Description,
        Preparation = from.Preparation,
        Rating = from.Rating,
        Difficulty = from.Difficulty,
        Price = from.Price,
    };
}
