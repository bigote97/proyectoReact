import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductButton = ({producto}) => {
	const carro = '/carrito/' + producto.id
	const [cantidad, setCantidad] = useState (0); 
	const mas = () => {
		if (cantidad < producto.stock) {
			setCantidad (cantidad + 1);
		}
	}

	const menos = () => {
		if (cantidad > 0) {
		setCantidad (cantidad - 1);
		}
	}

  const AddToCart = () => {
    if (cantidad > 0) {
		let total = cantidad * producto.precio
			alert("Se agregaron: " + cantidad + " unidad de: " + producto.titulo + " al carrito. A un total de: $" + total)
		} else {
			alert("No se puede agregar " + cantidad + " productos al carrito, modeifique la cantidad e intente nuevamente")
		}
  };
	return(
		<div>
			<div className="flex justify-center flex-row">
				<button className="font-semibold" onClick={menos}>-</button>
				<input className="mx-2 border rounded text-center w-8" type="text" value={cantidad}/>
				<button className="font-semibold" onClick={mas}>+</button>
			</div>
			<Link to={carro}>
				<button className="mt-2 py-1 px-3 border rounded"  onClick={AddToCart}>agregar al carrito</button>
			</Link>
		</div>
	);
}
export default ProductButton