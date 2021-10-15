// React
import { useContext } from "react";
import {Store} from '../../store';

const CartRow = ({producto}) =>{

    const [data, setData] = useContext(Store);

    const removeProduct = () => {
        let obj = data
        
        let encontrado = data.items.filter(x => x.id !== producto.id)
        obj.items = encontrado
        obj.cantidadTotal = obj.cantidadTotal - producto.cantidad
        obj.precioTotal = obj.precioTotal - totalProducto
        setData(obj)
    }

    const totalProducto = producto.cantidad * producto.precio

    

    return(
        <div className="p-6">
            <div className=" w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("${producto.imagen}")`}} title="Mountain">
            </div>
            <div className="border-r border-b border-1 border-gray-400 lg:border-1-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="text-gray-900 font-bold text-xl mb-2">{producto.titulo}</div>
                    <p className="text-gray-700 text-base">{producto.descripcionProducto}</p>
                
                    <div className="text-sm mt-4 flex justify-between">
                        <div>
                            <p className="text-gray-900 leading-none">Precio unitario: ${producto.precio}</p>
                            <p className="text-gray-600">Categoria: {producto.categoria}</p>
                        </div>
                        <div>
                            <p className="text-gray-900 leading-none">cantidad: {producto.cantidad}</p>
                            <p className="text-gray-600">precio: ${totalProducto}</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-2">
                        <span className="text-gray-700 text-base cursor-pointer">Eliminar producto </span>
                        <img className="cursor-pointer" onClick={removeProduct} src="/iconsTrash.svg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartRow