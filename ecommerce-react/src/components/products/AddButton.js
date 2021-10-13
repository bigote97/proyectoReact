//React
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ProductButton = ({producto}) => {
	/*Concateno el ID de producto al path del carrito para luego
	 hacer la redireccion a la pantalla del carrito con el nuevo producto agregado*/
	const carro = '/carrito/' + producto.id
	const [cantidad, setCantidad] = useState (0);
	let history = useHistory();

	/* Cuando el usuario Hace click sobre "+" se verifica que la cantidad elegida este por debajo del total que hay en stock*/
	const mas = () => {
		if (cantidad < producto.stock) {
			setCantidad (cantidad + 1);
		}
	}
	/* Cuando el usuario Hace click sobre "-" se verifica que la cantidad elegida sea superior a 0*/
	const menos = () => {
		if (cantidad > 0) {
			setCantidad (cantidad - 1);
		}
	}
	/* Cuando el usuario Hace click sobre "agregar al carrito" se verifica que este seleccionando
	 una cantidad mayor que 0 y menor que el total en stock, de ser asi se lo redirige al carrito,
	 en caso contrario se muestra un mensaje de error */
	const AddToCart = () => {
		if (cantidad > 0 && cantidad < producto.stock) {
			let total = cantidad * producto.precio
			alert("Se agregaron: " + cantidad + " unidad de: " + producto.titulo + " al carrito. A un total de: $" + total)
			history.push(carro);
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
			<button className="mt-2 py-1 px-3 border rounded"  onClick={AddToCart}>agregar al carrito</button>
		</div>
	);
}
export default ProductButton