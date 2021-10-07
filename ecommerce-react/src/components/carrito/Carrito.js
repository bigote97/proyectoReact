// react
import {useParams} from "react-router-dom";
//data
import productos from "../../data/listado";

const Carrito = () => {
	let encontrado 
	const {ID} = useParams();
	const texto = {titulo: 'Carrtio', text:"En breves se solucionara este bug"};
	encontrado = productos.Listado.find(x => x.id === ID)   
	console.log(encontrado)
	return(
		<div>
			{
				encontrado === undefined ? <>
					<div  className="bg-verde-darseafoamk text-center font-semibold">
						<h3>{texto.titulo}</h3>
						<p>{texto.text}</p>
					</div>
				</>
				:<>
					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						<div className="group text-center">
							<a href={encontrado.url}>
								<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
									<img src={encontrado.imagen} alt={encontrado.alt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{encontrado.titulo}</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">${encontrado.precio}</p>
							</a>
						</div>
					</div>
				</>				
			}
		</div>

	)
}

export default Carrito