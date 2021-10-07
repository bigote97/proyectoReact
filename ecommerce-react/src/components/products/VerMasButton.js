import React from "react";
import { Link } from "react-router-dom";

const ProductButton = ({id}) => {
	const ID = "/productDetail/" + id
	
	return(
        <Link to={ID}>
            <button className="mt-2 py-1 px-3 border rounded">Ver más</button>
        </Link>
	);
}
export default ProductButton