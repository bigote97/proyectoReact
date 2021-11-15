// datos
import { getFirestore} from "../../data";
// Componentes
import AddButton from "./AddButton";
// React
import { useParams } from "react-router-dom";
import {  useState  } from "react";
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
    getProductsDB()
    // Asigno el title correspondiente segun el producto
    if (encontrado !== undefined) {
        document.title = `Producto: ${encontrado.titulo}`
    }  else {
        document.title = `Producto no encontrado`
    }
    return(
        <div className="m-4">            
            {
            encontrado === undefined ?
            <>
                <h2>No se encontro el producto</h2>
            </>:
             <>
                 {/* <div className="flex flex-col justify-around z-0">
                    <div className="flex justify-around lg:flex-row sm:flex-col md:flex-col">
                        <div className="w-full">
                            <img src={encontrado.imagen} alt={encontrado.alt} className="sm:w- md:w-full lg:w-1/2 h-auto object-center object-cover group-hover:opacity-75" />
                            <h1>{encontrado.titulo}</h1>
                        </div>
                        <div className="sm:w-full md:w-full lg:w-1/2 flex flex-col justify-around text-center">
                            <p>{encontrado.descripcionProducto}</p>
                        </div>
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">${encontrado.precio}</p>
                    <div className="sm:w-full md:w-full lg:w-2/16 xl:w-2/16">
                        <AddButton producto={encontrado}/>
                    </div>
                </div> */}
                <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-px md:-mx-px lg:-mx-1 xl:-mx-px text-center">
                    <div className="my-1 px-1 w-full overflow-hidden sm:my-px sm:px-px md:my-px md:px-px lg:my-1 lg:px-1 lg:w-1/3 xl:my-px xl:px-px xl:w-1/2 flex flex-col justify-center">
                        <img src={encontrado.imagen} alt={encontrado.alt} className="object-center" />
                        <h1>{encontrado.titulo}</h1>
                    </div>

                    <div className="my-1 px-1 w-full overflow-hidden sm:my-px sm:px-px md:my-px md:px-px lg:my-1 lg:px-1 lg:w-1/3 xl:my-px xl:px-px xl:w-1/2">
                        <p>{encontrado.descripcionProducto}</p>
                    </div>
                </div>
                <div className="w-full mb-8">
                    <AddButton producto={encontrado} />
                </div>
            </>
            }
        </div>
    );
}

export default ProductDetail;