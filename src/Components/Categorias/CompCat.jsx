import { useContext } from "react";
import CarrContext from "../../Context/carr";
import Loader from "../Loader";
import { Usecat } from "./Hook/UseCat";

const CompCat = () => {

    const {stateCategorias,loader} =useContext(CarrContext)
    const {allcat}= Usecat(stateCategorias)
   
    return ( 
        <div id="categorias" className="container mt-5 mb-5" >
        <div id="titlecategorias" className="  mb-5">
            <h2 className="text-center">Todas las categorias</h2>
        </div>

        <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
            <div id="MainCategorias">
                {allcat()}
                
            </div>
           {/*  <div className="pb-5 ">
                <h2 className="text-center pb-3">No Categorias que mostrar</h2>

            </div> */}

        </div>
    </div>
     );
}
 
export default CompCat;