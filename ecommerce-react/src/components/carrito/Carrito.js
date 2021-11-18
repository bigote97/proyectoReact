// Components
import CartRow from "./CartRow";
import CheckOutButton from "./CheckOutButton";
// react
import {  Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {Store} from '../../store';


const Carrito = () => {
	let history = useHistory();
	const [cartContent, setCartContent] = useState([]);
	const [data, setData] = useContext(Store);
	const texto = {titulo: 'Carrtio vacio', text:"Navega el sitio para agregar artculos al carrito"};
	const limpiar = () => {
		// Manejo el context con un Spread Operator
		setData({...data,
			showPopUp: false,
			items : [],
			cantidadTotal : 0,
			precioTotal : 0
		})
		history.push("/");
    }
	useEffect(()=>{
		setCartContent(data.items)
    }, [data]);
	return(
		<div>
			
			{
				data.items.length === 0 ? <>
					<div  className="bg-verde-darseafoamk text-center font-semibold">
						<h3>{texto.titulo}</h3>
						<p>{texto.text}</p>
					</div>
					<div className="flex justify-center mt-6">
						<Link to="/">
							<button className="mt-2 py-1 px-3 border rounded">Volver a la home</button>
						</Link>
					</div>
				</>
				:<>
				<div className="px-6 py-2 flex justify-between ">
					<div>
						<p>Cantidad: {data.cantidadTotal}</p>
						<p>Total: ${data.precioTotal}</p>
					</div>
					<CheckOutButton />
					<div className="flex justify-end mt-2">
                        <p className="text-gray-700 text-base mr-0 cursor-pointer">Vaciar Carrito</p>
                        <img className="ml-0 cursor-pointer" onClick={limpiar} src="/iconsTrash.svg" alt="Vaciar carrito" />
                    </div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2">
					{cartContent.map(items => <CartRow key={items.id} producto={items} />)}
				</div>
				</>				
			}
		</div>
	)
}

export default Carrito