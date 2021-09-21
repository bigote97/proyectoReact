import ProductButton from './ProductButton';

const CardProducto = ({producto}) => {
	return(
		<div className="group">
			<a href={producto.url}>
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src={producto.imagen} alt={producto.alt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{producto.titulo}</h3>
				<p className="mt-1 text-lg font-medium text-gray-900">{producto.precio}</p>
			</a>
			<ProductButton producto={producto} />
		</div>
	);
}
export default CardProducto;