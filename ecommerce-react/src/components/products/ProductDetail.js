// datos
import { getFirestore} from "../../data";
// Componentes
import AddButton from "./AddButton";
// React
import { useParams } from "react-router-dom";
import {  useEffect, useState  } from "react";
const ProductDetail = ()=> {
    
    // Desde los parametros de la URL agarro el ID del producto a buscar
    const {ID} = useParams();
    const [encontrado, setEncontrado] = useState([]);
    // Busco dicho ID entre los productos disponibles
	const db = getFirestore();
    // 
    const getProductsDB = () => {
        db.collection('productos').get()
        .then(docs =>{
            let auxiliar = [];
            docs.forEach(doc => {
                auxiliar.push(doc.data())
            })
            // setItems(auxiliar)
            setEncontrado(auxiliar.find(x => x.id === ID) )
        })
        .catch(e => console.error(e));
        }
    // Asigno el title correspondiente segun el producto
    useEffect(() => {
		getProductsDB()
	}, [encontrado])

    if (encontrado !== undefined) {
        document.title = `Producto: ${encontrado.titulo}`
    }  else {
        document.title = `Producto no encontrado`
    }
    return(
        <div className=" max-w-2xl mx-auto mt-5 lg:max-w-7xl">
            {/* Mensaje de error, por ID invalido */}
            {
            encontrado === undefined ?
            <>
                <h2>No se encontro el producto</h2>
            </>:
             <>
                <div className="flex flex-col justify-around">
                    <div className="flex justify-around lg:flex-row sm:flex-col md:flex-col">
                        <img src={encontrado.imagen} alt={encontrado.alt} className="sm:w-full md:w-full lg:w-1/2 h-auto object-center object-cover group-hover:opacity-75" />
                        <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-around text-center">
                            <p>{encontrado.alt}</p>
                        </div>
                    </div>
                    <h1>{encontrado.titulo}</h1>
                    <p className="mt-1 text-lg font-medium text-gray-900">${encontrado.precio}</p>
                    <div className="sm:w-full md:w-full lg:w-2/16 xl:w-2/16">
                        <AddButton producto={encontrado}/>
                    </div>
                </div>
            </>
            }
        </div>
    );
}

export default ProductDetail;