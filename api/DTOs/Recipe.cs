using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using API.Database;

namespace API.DTOs;

public class Recipe
{
    [Key] public int EntityID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Preparation { get; set; }
    [Range(0, 5)] public float Rating { get; set; }
    [Range(0, 5)] public float Difficulty { get; set; }
    public float Price { get; set; }
    public int Owner { get; set; }

    public static Recipe Build(Models.Recipe from) => new Recipe
    {
        EntityID = from.EntityID,
        Title = from.Title,
        Description = from.Description,
        Preparation = from.Preparation,
        Rating = from.Rating,
        Difficulty = from.Difficulty,
        Price = from.Price,
        Owner = 0,
    };

    public static List<Recipe> BuildFromCollection(Models.Recipe[] from)
    {
        return from.Select(recipe => Build(recipe)).ToList();
    }
}