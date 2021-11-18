// React
import { useContext } from "react";
import {Store} from '../../store';
import { useHistory } from "react-router-dom";

const CartRow = ({producto}) =>{
	let history = useHistory();
    const [data, setData] = useContext(Store);
    const removeProduct = () => {
        // let obj = data   
        // let encontrado = data.items.filter(x => x.id !== producto.id)
        // obj.items = encontrado
        // obj.cantidadTotal = obj.cantidadTotal - producto.cantidad
        // obj.precioTotal = obj.precioTotal - totalProducto
        // setData(obj)
        let encontrado = data.items.filter(x => x.id !== producto.id)
        console.log(encontrado)
        setData({...data,
			showPopUp: false,
			items : encontrado,
			cantidadTotal : data.cantidadTotal - producto.cantidad,
			precioTotal : data.precioTotal - totalProducto
		})
        // Uso SPREAD operator para abrir el pop up del carrito
        setData({...data, showPopUp: false })
        if (data.items.length === 0){
            history.push("/")
        }
    }
    const totalProducto = producto.cantidad * producto.precio
    return(
        <div className="p-6">
            <div className=" w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("${producto.imagen}")`}} title="Mountain">
                </div>
                <div className="border-r border-b border-1 border-gray-400 lg:border-1-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="text-gray-900 font-bold text-xl mb-2">{producto.titulo}
                    </div>
                
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
                    <div className="flex justify-end mt-2" onClick={removeProduct} >
                        <span className="text-gray-700 text-base cursor-pointer">Eliminar producto </span>
                        <img className="cursor-pointer" src="/iconsTrash.svg" alt="Eliminar producto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartRow