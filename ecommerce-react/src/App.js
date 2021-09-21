import NavBar from "./components/layout/NavBar";
import Cuerpo from "./components/Proposito";
import ListadoPlantas from "./components/products/ListadoPlantas";
import ListadoHerramientas from "./components/products/ListadoHerramientas";
import ListadoInvernaderos from "./components/products/ListadoInvernaderos";


function App() {
  return (
    <div>
      <NavBar />
      <Cuerpo />
      <ListadoPlantas />
      <ListadoHerramientas />
      <ListadoInvernaderos />
    </div>
  );
}

export default App;
