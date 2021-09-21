function changeMenu() {
	console.log("changestate")
}
function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-verde-kelly p-6">
            <div className="flex items-center flex-shrink-0 text-verde-darseafoamk mr-6">
                <span className="font-semibold text-xl tracking-tight">GrEEnCommerce</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-verde-darseafoamk border-teal-400 hover:text-verde-oscuro hover:border-verde-oscuro" onClick={changeMenu()}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4">
                    Plantas
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4">
                    Herramientas
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro">
                    Invernaderos
                </a>
                </div>
								<div>
									<a className="flex items-center px-3 py-2 border rounded text-verde-darseafoamk border-teal-400 hover:text-verde-oscuro hover:border-verde-oscuro">Cotizar servicio</a>
								</div>
            </div>
            </nav>
    );
  }
  
  export default NavBar;
  

