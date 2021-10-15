// Components
import CartRow from "./CartRow";

// react
import {  Link, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import {Store} from '../../store';


const Carrito = () => {
	let history = useHistory();
	const [data, setData] = useContext(Store);
	const texto = {titulo: 'Carrtio vacio', text:"Navega el sitio para agregar artculos al carrito"};
	const limpiar = () => {
        let obj = data
        obj.items = []
        obj.cantidadTotal = 0
        obj.precioTotal = 0
        setData(obj)
		history.push("/");
    }
	useEffect(()=>{
		console.log('cambio')
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
				<div className="px-6 py-2 flex justify-between">
					<div>
						<p>Cantidad: {data.cantidadTotal}</p>
						<p>Total: ${data.precioTotal}</p>
					</div>
					<div className="flex justify-end mt-2">
                        <p className="text-gray-700 text-base mr-0 cursor-pointer">Vaciar Carrito</p>
                        <img className="ml-0 cursor-pointer" onClick={limpiar} src="/iconsTrash.svg"/>
                    </div>
				</div>
					{data.items.map(items => <CartRow producto={items} />)}
				</>				
			}
		</div>
	)
}

export default Carrito