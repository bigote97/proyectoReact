function CardProducto(props) {
	return(
			<a href={props.url} className="group">
				<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
					<img src={props.imagen} alt={props.alt} className="w-full h-full object-center object-cover group-hover:opacity-75" />
				</div>
				<h3 className="mt-4 text-sm text-gray-700">{props.titulo}</h3>
				<p className="mt-1 text-lg font-medium text-gray-900">{props.precio}</p>
			</a>
	);
}
export default CardProducto;