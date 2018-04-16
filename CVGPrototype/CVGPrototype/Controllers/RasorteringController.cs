using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CVGPrototype.Controllers
{
    public class RasorteringController : Controller
    {
        // GET: Rasortering
        public ActionResult Index()
        {
            return View("rasortering");
        }
    }
}