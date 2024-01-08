using API.Database;
using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class Authorization(Context context) : Controller
{
    [HttpPost]
    [Route("/rest/v1/authorization")]
    public JsonResult Register([FromBody] Models.User user)
    {
        user.Password = Hasher.hash(user.Password);
        context.Users.Add(user);
        context.SaveChanges();

        var response = DTOs.Authorization.Build(user, "");

        return Json(response);
    }

    [HttpPost]
    [Route("/rest/v1/authorization/jwt")]
    public JsonResult JWT([FromBody] Models.User login)
    {
        var users = (from u in context.Users where u.Email == login.Email select u).ToArray();
        if (users.Length == 0)
        {
            return Json(new DTOs.Error("invalid user email or password"));
        }

        var response = DTOs.Authorization.Build(users[0], "test123");

        return Json(response);
    }
}
