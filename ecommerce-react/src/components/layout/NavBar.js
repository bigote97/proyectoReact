//Componentes
import IconoCarrito from "../icons/IconoCarrito";
// React
import React, { useState } from "react";
import { NavLink, Link} from "react-router-dom";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState("false");
	// "handleToggle" es la funcion encargada de ocultar o mostrar el menu, esta se ejecuta al clickear un elemento del menu o el mismo icono del menu
	const handleToggle = () => {
		setShowMenu(!showMenu);
	};


	return (
		<header className="sticky top-0 w-full my-0">
			<nav className="flex items-center justify-between flex-wrap bg-verde-kelly p-6">
				<div className="flex items-center flex-shrink-0 text-verde-darseafoamk mr-6">
					<Link to="/"><span className="font-semibold text-xl tracking-tight">GrEEnCommerce</span></Link>
				</div>
				{/* En mobile se mostraran tanel icono del carrito como el hamb que ejecuta el toggle del menu, en desktop se les aplica display:none para sacarlos del flujo */}
				<div className=" lg:hidden flex items-center justify-between flex-wrap">
					<button className=" flex items-center px-3 py-2 border rounded text-verde-darseafoamk border-teal-400 hover:text-verde-oscuro hover:border-verde-oscuro" onClick={handleToggle} >
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
					<div className="ml-3">
					<Link to="/carrito">
						<IconoCarrito/>
					</Link>
					</div>
				</div>
				{/* Con "showMenu" despliego o muestro el menu en mobile, dependiendo la accion del usuario, esto se hace via display:none */}
				<div className={showMenu ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
					<div className="text-sm lg:flex-grow">
						<NavLink exact to="/" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Home</span></NavLink>
						<NavLink to="/categoria/Plantas" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Plantas</span></NavLink>
						<NavLink to="/categoria/Herramientas" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Herramientas</span></NavLink>
						<NavLink to="/categoria/Invernaderos" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Invernaderos</span></NavLink>
					</div>
				</div>
				{/* En desktop muestro solamente el icono del carrito ubicado en el extremo derecho del "NavBar"  */}
				<div className="hidden lg:block">
					<Link to="/carrito">
						<IconoCarrito className="mr-3 px-3 py-2 border rounded"/>
					</Link>
				</div>
			</nav>
		</header>
    );
  }
  
  export default NavBar;