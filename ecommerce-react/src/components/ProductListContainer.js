// datos
import productos from "../data/listado";
// componentes
import SubTitulos from "./SubTitulos";
import CardProducto from "./products/CardProducto";
import Skeleton from 'react-loading-skeleton';
// react
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
// logica
const ProductListContainer = ({filter}) =>{
    const {categoria} = useParams();
    const [items, setItems] = useState([]);
    const [verifica, setVerifica] = useState(true);
	// Inicializo el titulo de 
	const tituloCategoria = 'Listado de productos';
	const descripcionCategoria = 'Aquí encontraros todos los productos disponibles de GreenCommerce. Selecciona ver "agregar al carrito" para comprar o "ver más" para conocer el producto';
	//Simulo delay de respuesta de la base de datos
	const getProductsFromDB = new Promise ((resolve, reject) => {
    	setTimeout(() => {resolve(productos.Listado.filter(x => x.categoria === categoria))}, 1000)
    })
	
	useEffect(() => {
		setItems([])
		//Si filter es igual a "path" significa que el usuario llego via NavBar y cargo los productos indicados
		if (filter === 'path') {
			getProductsFromDB.then(rta => {
				setItems(rta)
				document.title = `Categoría: ${categoria}`
			})
			setVerifica(true)
		/*Si filter es igual a "all" significa que el usuario llego via home y cargo todos los productos
			disponibles*/
		} else if (filter === 'all'){
			setItems(productos.Listado)
			setVerifica(false)
		}
		// Verifico con useEffect si "categoria" es modificada
	}, [categoria])
	
    return(
		/* En caso de que "items" este vacio aparecera un efecto de carga, de caso contrario se muestra 
		el listasdo de productos*/
        <div className=" max-w-2xl mx-auto py-2 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mb-4">
				{
					items.length === 0 ? <>
					<div className="flex flex-col">
						<Skeleton variant="text" width={280}/>
						<Skeleton variant="text" width={250}/>
					</div>
					</>
					:<>
						<SubTitulos titulo={verifica === true ? items[0].categoria : tituloCategoria} descripcion={verifica === true ? items[0].descripcionCategoria : descripcionCategoria} />
					</>
				}
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
					items.length === 0 ? <>
						<div className="flex flex-col">
							<Skeleton variant="text" width={180}/>
							<Skeleton variant="rectangular" width={260}	height={118} />
						</div>
						<div className="flex flex-col">
							<Skeleton variant="text" width={180}/>
							<Skeleton variant="rectangular" width={260}	height={118} />
						</div>
						<div className="flex flex-col">
							<Skeleton variant="text" width={180}/>
							<Skeleton variant="rectangular" width={260}	height={118} />
						</div>
						<div className="flex flex-col">
							<Skeleton variant="text" width={180}/>
							<Skeleton variant="rectangular" width={260}	height={118} />
						</div>
					</>
					:<>
           				{items.map(items => <CardProducto producto={items} />)}
					</>
				}
            </div>
        </div>
    );
}

export default ProductListContainer;