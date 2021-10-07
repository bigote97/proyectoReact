import {useParams} from "react-router-dom";
import productos from "../../data/listado";
import AddButton from "./AddButton";

const ProductDetail = ()=> {
    let encontrado 
    const {ID} = useParams();
    encontrado = productos.Listado.find(x => x.id === ID)   
    document.title = `Producto: ${encontrado.titulo}`
    return(
        <div className=" max-w-2xl mx-auto mt-5 lg:max-w-7xl">
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
        </div>
    );
}

export default ProductDetail;