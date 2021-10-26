// react
import {  Link } from "react-router-dom";

const CheckOutButton = () => {
    return(
        <Link to="/CheckOut">
            <button className="mt-2 py-1 px-3 border rounded" >Realizar compra</button>
        </Link>
    );
}

export default CheckOutButton