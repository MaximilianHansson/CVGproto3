﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CVGPrototype.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home hej
        public ActionResult Index()
        {
            return View("Home");
        }
    }
}