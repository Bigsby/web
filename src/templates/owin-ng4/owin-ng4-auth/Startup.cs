using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof($safeprojectname$.Startup))]

namespace $safeprojectname$
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
