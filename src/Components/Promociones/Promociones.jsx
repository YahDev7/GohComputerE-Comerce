import { useParams } from "react-router-dom";
import { useContext } from "react";

import Loader from "../public/Loader";
import CardProducts from "../Card/CardProducts";
import { UsePromo } from "./hooks/use.promociones";
import CarritoContext from "../../context/carrito";
import ProductContext from "../../context/products";

const Promociones = () => {
    const {id}=useParams()
    const { viewpro}=useContext( ProductContext )
    const { addcarr,stateDolar,loader}=useContext(CarritoContext)
    const {stateProductsPromo}=  UsePromo(id,addcarr,stateDolar,viewpro)
    
    
    return ( 
        <div className="pt-0 pt-sm-4">
        <div id="mainComponentes" className=" ">

        
            <div className="produts pb-5 container">
                <h2 className="text-center pb-3 text-4x1 !font-bold" >Promociones</h2>
                <div className="mt-3  d-lg-none filter-btn">
                    <button className="btn btn-warning navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarNavBarCali" aria-controls="offcanvasNavbar">
                        <span className="">Filtrar</span>
                    </button>
                </div>

               
                <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>} 
                <section className="sectionProductosAll ">

                    <div className="grid grid-cols-5 max-xl:grid-cols-4  max-sm:grid-cols-1 max-md:grid-cols-3">

                       {stateProductsPromo.length>=0? stateProductsPromo.map(el=>
                          <CardProducts laptops={el} addcarr={addcarr} viewpro={viewpro}></CardProducts>
                        )
                        : <p>{stateProductsPromo.response}</p> } 

                    </div>



                </section>

                </div>

       
            </div>


        </div>        

    </div>
     );
}
 
export default Promociones;