import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Cuerpo from "./components/Proposito";
import Category from "./components/Category";
import ProductDetail from "./components/products/ProductDetail";

import {BrowserRouter, Switch, Route} from "react-router-dom"


// https://my.api.mockaroo.com/plantas.json?key=2be18e60

function App() {
  return (
    <div>
	  <BrowserRouter>
        <NavBar />
        <Switch>
			<Route exact path="/">
				<Cuerpo/>
			</Route>
			<Route exact path="/:categoria">
				<Category />
			</Route>
			<Route exact path="/productDetail/:ID">
				<ProductDetail />
			</Route>
			<Route path="*">
				<Cuerpo/>
			</Route>
		</Switch>
      	<Footer />
	  </BrowserRouter>
    </div>
  );
}

export default App;
