const SubTitulos = ({texto}) =>{
	return(
		<div className=" max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
			<h2 id={texto.id} className="text-lg font-semibold text-verde-darseafoamk">{texto.subtitulo}</h2>
			<p>{texto.adicional}</p>
		</div>
	);
}

export default SubTitulos