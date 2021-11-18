import React, { useContext } from "react";
import { Store } from "../../store";
import { useHistory } from "react-router-dom";
const PopUpCart = () => { 
	let history = useHistory();
    const [data, setData] = useContext(Store);
    const toCarrito = () => {
        // let obj = data
        // obj.items = data.items
        // obj.cantidadTotal = data.cantidadTotal
        // obj.precioTotal = data.precioTotal
        // obj.showPopUp = false
        
        setData({...data, showPopUp : false })
        history.push("/carrito");
    };
	return (
        <div className="absolute right-0 w-auto mr-2 p-4 border-t shadow-2xl bg-verde-kelly">
            { data.items.length === 0 ? <>
                <p>Carrito vacío</p>
            </>:<>
                {data.items.map(items => 
                    <div key={items.id} className="" >
                        <div className=" flex flex-row items-center justify-start">
                            <img src={items.imagen} alt={items.alt} className="max-h-16 w-auto" />
                            <div className="ml-2 pb-3">
                                <p>
                                    {items.titulo}
                                </p>
                                    
                                <p>
                                    Cantidad: {items.cantidad}
                                </p>
                                <p>
                                    Precio: ${items.cantidad * items.precio}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="w-full text-center mt-2">
                    <button className="py-1 px-3 border rounded" onClick={toCarrito}>
                        Ir al carrito
                    </button>
                </div>
            </>
            }
        </div>
    );
}

export default PopUpCart;