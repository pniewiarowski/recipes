using API.Database;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class User(Context context) : Controller
{
    [HttpGet]
    [Route("/rest/v1/users")]
    public JsonResult Get()
    {
        return Json(DTOs.User.BuildFromCollection(context.Users.ToArray()));
    }

    [HttpGet]
    [Route("/rest/v1/users/{id?}")]
    public JsonResult GetByID(int id)
    {
        return Json(DTOs.User.Build(context.Users.Find(id)));
    }

    [HttpGet]
    [Route("/rest/v1/users/{id?}/recipes")]
    public JsonResult GetRecipes(int id)
    {
        return Json(DTOs.Recipe.BuildFromCollection(context.Recipes.ToArray()));
    }
}