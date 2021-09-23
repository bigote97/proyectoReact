import React, { useState } from "react";
import IconoCarrito from "../icons/IconoCarrito";
import Carrito from "../carrito/Carrito";

function NavBar() {
	const [isActive, setActive] = useState("false");
	const [showCart, setShowCart] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};

	const cartToggle = () => {
		setShowCart(!showCart);
	};

	const textoCarrtio = {titulo: 'Carrtio', text:"En breves se solucionara este bug"};

	return (
		<header className="fixed top-0 w-full my-0">
			<nav className="flex items-center justify-between flex-wrap bg-verde-kelly p-6">
				<div className="flex items-center flex-shrink-0 text-verde-darseafoamk mr-6">
					<span className="font-semibold text-xl tracking-tight">GrEEnCommerce</span>
				</div>
				<div className=" lg:hidden flex items-center justify-between flex-wrap">
					<button className=" flex items-center px-3 py-2 border rounded text-verde-darseafoamk border-teal-400 hover:text-verde-oscuro hover:border-verde-oscuro" onClick={handleToggle}>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
					<div onClick={cartToggle}  className="ml-3">
						<IconoCarrito/>
					</div>
				</div>
				<div className={isActive ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
					<div className="text-sm lg:flex-grow">
						<a href="#Proposito" onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4">Home</a>
						<a href="#ListadoPlantas" onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4">Plantas</a>
						<a href="#ListadoHerramientas" onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4">Herramientas</a>
						<a href="#ListadoInvernaderos" onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro">Invernaderos</a>
					</div>
				</div>
				<div className="hidden lg:block" onClick={cartToggle}>
					<IconoCarrito className="mr-3 px-3 py-2 border rounded"/>
				</div>
			</nav>
			<div className={showCart ? 'hidden' : 'block w-full'}>
				<Carrito texto={textoCarrtio}/>
			</div>
		</header>
    );
  }
  
  export default NavBar;