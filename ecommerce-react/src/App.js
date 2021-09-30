import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Cuerpo from "./components/Proposito";
import SubTitulos from "./components/SubTitulos";

import ListadoProductos from "./components/products/ListadoProductos";

import productos from "./data/productos";
import titulos from "./data/titulos";


function App() {
  return (
    <div>
      <NavBar />
		<Cuerpo/>
		<SubTitulos texto={titulos.subtituloPlantas}/>
			<ListadoProductos productos={productos.Plantas} />
		<SubTitulos texto={titulos.subtitulosHerramientas}/>
			<ListadoProductos productos={productos.Herramientas} />
		<SubTitulos texto={titulos.subtitulosInvernaderos}/>
			<ListadoProductos productos={productos.Invernaderos} />
      	<Footer />
    </div>
  );
}

export default App;
