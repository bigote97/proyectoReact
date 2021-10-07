// Subtitulos como lo dice su nombre son los ttulos de cada una de las secciones
const SubTitulos = ({titulo, descripcion}) =>{
	return(
		<div className=" max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
			<h2 className="text-lg font-semibold text-verde-darseafoamk">{titulo}</h2>
			<p>{descripcion}</p>
		</div>
	);
}

export default SubTitulos