using API.Database;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class Recipe(Context context) : Controller
{
    [HttpGet]
    [Route("/rest/v1/recipes")]
    public JsonResult Get()
    {
        if (HttpContext.Request.Query.ContainsKey("title"))
        {
            var requestedTitle = HttpContext.Request.Query["title"].ToString().ToLower();
            var filteredByTitle = from r in context.Recipes where r.Title.ToLower().Contains(requestedTitle) select r;

            return Json(DTOs.Recipe.BuildFromCollection(filteredByTitle.ToArray()));
        }

        return Json(DTOs.Recipe.BuildFromCollection(context.Recipes.ToArray()));
    }

    [HttpGet]
    [Route("/rest/v1/recipes/{id?}")]
    public JsonResult GetByID(int? id)
    {
        return Json(DTOs.Recipe.Build(context.Recipes.Find(id)));
    }

    [HttpPost]
    [Route("/rest/v1/recipes")]
    public JsonResult Post([FromBody] DTOs.Recipe recipe)
    {
        var newRecipe = API.Models.Recipe.Build(recipe);
        newRecipe.Owner = context.Users.Find(recipe.Owner);

        context.Recipes.Add(newRecipe);
        context.SaveChanges();

        var response = DTOs.Recipe.Build(newRecipe);
        response.Owner = context.Users.Find(recipe.Owner).EntityID;

        return Json(response);
    }

    [HttpPut]
    [Route("/rest/v1/recipes/")]
    public JsonResult Put()
    {
        return Json(new API.DTOs.Recipe());
    }

    [HttpPatch]
    [Route("/rest/v1/recipes/")]
    public JsonResult Patch()
    {
        return Json(new API.DTOs.Recipe());
    }

    [HttpDelete]
    [Route("/rest/v1/recipes/{id?}")]
    public JsonResult Delete(int id)
    {
        var toDelete = context.Recipes.SingleOrDefault(r => r.EntityID == id);
        context.Recipes.Attach(toDelete);
        context.Recipes.Remove(toDelete);
        context.SaveChanges();

        return Get();
    }
}
