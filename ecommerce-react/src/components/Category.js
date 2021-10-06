// datos
import productos from "../data/productos";
import titulos from "../data/titulos";
// componentes
import SubTitulos from "./SubTitulos";
import ListadoProductos from "./products/ListadoProductos";
// react
import {useParams} from "react-router-dom";
// logica
const Category = () =>{
const {categoria} = useParams()
console.log(categoria)
    if (categoria === 'plantas'){
        return(
            <div>
                <SubTitulos texto={titulos.subtituloPlantas}/>
                <ListadoProductos productos={productos.Plantas} />
            </div>
        );
    } else if (categoria === 'herramientas'){
        return(
            <div>
                <SubTitulos texto={titulos.subtitulosHerramientas}/>
                <ListadoProductos productos={productos.Herramientas} />
            </div>
        );
    } else if (categoria === 'invernaderos'){
        return(
            <div>
                <SubTitulos texto={titulos.subtitulosInvernaderos}/>
                <ListadoProductos productos={productos.Invernaderos} />
            </div>
        );
    }
}

export default Category;