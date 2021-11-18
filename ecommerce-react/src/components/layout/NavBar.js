//Componentes
import IconoCarrito from "../icons/IconoCarrito";
import PopUpCart from "./PopUpCart";
// React
import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link} from "react-router-dom";
import { Store } from "../../store";

const NavBar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [badge, setBadge] = useState(0);
    const [data, setData] = useContext(Store);
	// "handleToggle" es la funcion encargada de ocultar o mostrar el menu, esta se ejecuta al clickear un elemento del menu o el mismo icono del menu
	const handleToggle = () => {
		setShowCart(false)
		setShowMenu(!showMenu);
	};
	const mostrarCarrito = () => {
		setShowMenu(false)
		setShowCart(!showCart);
		if (showCart) {
			// Cambio el estado del popUp de productos en el context
			setData({...data, showPopUp : false })
		} else {
			// Cambio el estado del popUp de productos en el context
			setData({...data, showPopUp : true })
		}
	};

	useEffect(() => {
        setBadge(data.cantidadTotal)
      }, [data.cantidadTotal]); 
	  useEffect(() => {
        if (data.showPopUp){
			setShowCart(true)
		} else {
			setShowCart(false)
		}
      }, [data.showPopUp]); 
	  
	return (
		<header className="sticky top-0 w-full my-0 z-2">
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
					<div onClick={mostrarCarrito}>
						<IconoCarrito/>
						<span className="absolute rounded-full bg-verde-oscuro w-4 h-4 top right p-0 m-0 text-verde-kelly font-mono text-sm  leading-tight text-center">
							{badge}
						</span>
					</div>
					</div>
				</div>
				{/* Con "showMenu" despliego o muestro el menu en mobile, dependiendo la accion del usuario, esto se hace via display:none */}
				<div className={showMenu ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto " : "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"}>
					<div className="text-sm lg:flex-grow">
						<NavLink exact to="/" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Home</span></NavLink>
						<NavLink to="/categoria/Plantas" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Plantas</span></NavLink>
						<NavLink to="/categoria/Herramientas" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Herramientas</span></NavLink>
						<NavLink to="/categoria/Invernaderos" activeStyle={{ fontWeight: "bold"}} ><span onClick={handleToggle} className="block mt-4 lg:inline-block lg:mt-0 text-verde-darseafoamk hover:text-verde-oscuro mr-4"> Invernaderos</span></NavLink>
					</div>
				</div>
				{/* En desktop muestro solamente el icono del carrito ubicado en el extremo derecho del "NavBar"  */}
				<div className="hidden lg:block">
					<div onClick={mostrarCarrito}>
						<IconoCarrito className="mr-3 px-3 py-2 border rounded"/>
						<span className="absolute rounded-full bg-verde-oscuro w-4 h-4 top right p-0 m-0 text-verde-kelly font-mono text-sm  leading-tight text-center">
							{badge}
						</span>
					</div>
				</div>
			</nav>
			<div className={ showCart ? "w-full block" : "hidden"}>
				<PopUpCart />
			</div>
		</header>
    );
  }
  
  export default NavBar;