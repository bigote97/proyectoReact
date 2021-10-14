// Components
import CartRow from "./CartRow";

// react
import {  Link } from "react-router-dom";
import { useContext } from "react";
import {Store} from '../../store';


const Carrito = () => {
	const [data, setData] = useContext(Store);
	console.log('data')
	console.log(data)   
	const texto = {titulo: 'Carrtio vacio', text:"Navega el sitio para agregar artculos al carrito"};
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
				{data.items.map(items => <CartRow producto={items} />)}
					{/* <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						<div className="group text-center">
							<a href={data.items[0].url}>
								<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
									<img src={data.items[0].imagen} alt={data.items[0].alt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{data.items[0].titulo}</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">${data.items[0].precio}</p>
							</a>
						</div>
					</div> */}
				</>				
			}
		</div>

	)
}

export default Carrito