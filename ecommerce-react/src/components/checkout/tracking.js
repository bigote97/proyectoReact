// react
import {useParams} from "react-router-dom";
import {  Link } from "react-router-dom";

const Tracking = () => {
	const {ID} = useParams();
    return(
        <div className="text-center">
            <div className="my-6">
                <span className="mr-2 p-3 border-2 w-80 h-80 rounded-full bg-verde-kelly" >1</span>
                <span className="mr-2 p-3 border-2 w-80 h-80 rounded-full bg-verde-spearmint" >2</span>
                <span className="mr-2 p-3 border-2 w-80 h-80 rounded-full bg-verde-kelly" >3</span>
                <span className="mr-2 p-3 border-2 w-80 h-80 rounded-full bg-verde-kelly" >4</span>
                <span className="mr-2 p-3 border-2 w-80 h-80 rounded-full bg-verde-kelly" >5</span>
            </div>
            <div className="my-4" >
                <p>El vendedor: <span className="font-bold" >Juan Carlos</span> esta preparando tu pedido, recibiras un mail con el detalle de tu orden de compra</p>
                <p>Recuerda que no debes contestar este mail, y que si el mismo debe poseer el <span className="font-bold" >ID</span> de seguimiento</p>
            </div>
            <div className="my-4" >
                <p className="mb-2" >
                    Podras seguir tu compra con el siguiente  <span className="font-bold" >ID</span>: 
                </p>
                <span className="font-bold bg-verde-kelly mt-2 p-1" >{ ID }</span>
            </div>
            <Link to="/">
                <button className="my-4 py-1 px-3 border rounded" >Volver al inicio</button>
            </Link>
        </div>
    );
}

export default Tracking;