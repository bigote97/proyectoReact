const Carrito = ({texto}) => {
	return(
		<div className="bg-verde-darseafoamk text-center font-semibold">
			<h3>{texto.titulo}</h3>
			<p>{texto.text}</p>
		</div>
	)
}

export default Carrito