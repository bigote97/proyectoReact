// Componentes
import AddButton from './AddButton';
import VerMasButton from './VerMasButton';
// React
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
	const vermas = "/productDetail/" + producto.id
	return(
		<div className="group text-center">
			<Link to={vermas}>
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src={producto.imagen} alt={producto.alt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{producto.titulo}</h3>
				<p className="mt-1 text-lg font-medium text-gray-900">${producto.precio}</p>
			</Link>
			<AddButton producto={producto} />
			<VerMasButton id={producto.id} />
		</div>
	);
}
export default CardProducto;