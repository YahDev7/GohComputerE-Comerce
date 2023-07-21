import { useContext} from "react";
import { useParams } from "react-router-dom";

import { UseSearch } from "./Hook/UseSeach";
import CarritoContext from "../../context/carrito";
import ProductContext from "../../context/products";

const CompSearch = () => {
    //pasarloa  un hook
    const { search } = useParams()
    const {addcarr} =useContext(CarritoContext)
    const{viewpro} =useContext(ProductContext)
    const {results} =UseSearch(addcarr,viewpro,search)

    return ( 
        <div id="ResultsSearch" className="container mb-5 pt-5" >
        <div id="titleResultSearch" className=" ms-4 mb-5">
            <h2 >Su búsqueda de: {search}  </h2>
        </div>

        <div id="MainResultSearch">

            <section className="prodAll" id="ProAll">
                {results()}

            </section>


        </div>
    </div>
     );
}
 
export default CompSearch;