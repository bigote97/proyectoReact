//Componentes
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Cuerpo from "./components/Proposito";
import ProductListContainer from "./components/ProductListContainer";
import ProductDetail from "./components/products/ProductDetail";
import Carrito from "./components/carrito/Carrito";
import CheckOut from "./components/checkout";
import Tracking from "./components/checkout/tracking";
//React
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useState, } from "react";
import { Store } from './store';


// https://my.api.mockaroo.com/plantas.json?key=2be18e60

function App() {
	const [cartProducts, setCartProducts] = useState({ 
		items: [],
		cantidadTotal:0,
		precioTotal:0})
  return (
	  <>
		<Store.Provider value={[cartProducts, setCartProducts]}>
			<BrowserRouter>
			{/* "NavBar" se renderiza siempre sin importar en que seccion del sitio este el usuario */}
				<NavBar />
				{/* Con "Switch" se renderiza unicamente el o los componenetes necesarios segun la opcion elegida por el usuario */}
				<Switch>
					<Route exact path="/">
						<Cuerpo/>
						{/* En "filter" envio "all" para que el componente muestre el total de los productos */}
						<ProductListContainer filter="all"/>
					</Route>
					<Route exact path="/categoria/:categoria">
						{/* En "filter" envio "path" para que el compoenente sepa que debe filtrar segun el path de la URL */}
						<ProductListContainer filter="path"/>
					</Route>
					<Route exact path="/productDetail/:ID">
						<ProductDetail />
					</Route>
					<Route exact path="/carrito">
						<Carrito/>
					</Route>
					<Route exact path="/CheckOut">
						<CheckOut/>
					</Route>
					<Route exact path="/CheckOut/track/:ID">
						<Tracking/>
					</Route>
					<Route path="*">
						<Cuerpo/>
					</Route>
				</Switch>
				{/* "Footer" se renderiza siempre sin importar en que seccion del sitio este el usuario */}
				<Footer />
			</BrowserRouter>
		</Store.Provider>
	</>
  );
}

export default App;
