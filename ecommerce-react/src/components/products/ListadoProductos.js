import {useState, useEffect} from 'react';

import CardProducto from "./CardProducto";
import Skeleton from 'react-loading-skeleton';


const ListadoProductos = ({productos}) => {
	const [items, setItems] = useState([]);
	
	const getProductsFromDB = new Promise ((resolve, reject) => {
		setTimeout((
			 ) => {resolve(productos)}, 2000)
		})
	
	useEffect(() => {
		getProductsFromDB.then(rta => setItems(rta))
	}, [])

	return(		
		<div className=" max-w-2xl mx-auto py-2 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
			<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{
					items.length === 0 ? <>
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

export default ListadoProductos;