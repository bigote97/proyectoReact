//Componentes
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Cuerpo from "./components/Proposito";
import ProductListContainer from "./components/ProductListContainer";
import ProductDetail from "./components/products/ProductDetail";
import Carrito from "./components/carrito/Carrito";
//React
import {BrowserRouter, Switch, Route} from "react-router-dom"


// https://my.api.mockaroo.com/plantas.json?key=2be18e60

function App() {
  return (
    <div>
	  <BrowserRouter>
	  {/* "NavBar" se renderiza siempre sin importar en que seccion del sitio este el usuario */}
        <NavBar />
		{/* Con "Switch" se renderiza unicamente el o los componenetes necesarios segun la opcion elegida por el usuario */}
        <Switch>
			<Route exact path="/">
				<Cuerpo/>
				<ProductListContainer filter="all"/>
			</Route>
			<Route exact path="/:categoria">
				<ProductListContainer filter="path"/>
			</Route>
			<Route exact path="/productDetail/:ID">
				<ProductDetail />
			</Route>
			<Route exact path="/carrito/:ID">
				<Carrito/>
			</Route>
			<Route path="*">
				<Cuerpo/>
			</Route>
		</Switch>
		{/* "Footer" se renderiza siempre sin importar en que seccion del sitio este el usuario */}
      	<Footer />
	  </BrowserRouter>
    </div>
  );
}

export default App;
