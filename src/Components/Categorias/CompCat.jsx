import { useContext } from "react";
import CarrContext from "../../context/carr";
import Loader from "../Loader";
import { Usecat } from "./Hook/UseCat";

const CompCat = () => {

    const {stateCategorias,loader} =useContext(CarrContext)
    const {allcat}= Usecat(stateCategorias)
   
    return ( 
        <div id="categorias" className="container mt-5 mb-5" >
        <div id="titlecategorias" className="  mb-5">
            <h2 className="text-center text-4x1 !font-bold">Todas las categorias</h2>
        </div>

        <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
            <div id="" className="grid grid-cols-6 max-xl:grid-cols-5  max-sm:grid-cols-2 max-md:grid-cols-4 ">
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