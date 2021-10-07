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
const Category = () =>{
    const {categoria} = useParams()
    const [items, setItems] = useState([]);
	const getProductsFromDB = new Promise ((resolve, reject) => {
    setTimeout(() => {resolve(productos.Listado.filter(x => x.categoria === categoria))}, 2000)
    })
	
	useEffect(() => {
        document.title = `Categoría: ${categoria}`
		getProductsFromDB.then(rta => setItems(rta))
	}, [categoria])


    return(
        <div className=" max-w-2xl mx-auto py-2 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mb-4">
							{
								items.length === 0 ? <>
									<Skeleton count={2} />
								</>
								:<>
									<SubTitulos titulo={items[0].categoria} descripcion={items[0].descripcionCategoria} />
								</>
							}
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
					items.length === 0 ? <>
						<Skeleton count={5} />
						<Skeleton count={5} />
						<Skeleton count={5} />
						<Skeleton count={5} />
					</>
					:<>
           				{items.map(items => <CardProducto producto={items} />)}
					</>
				}
            </div>
        </div>
    );
}

export default Category;