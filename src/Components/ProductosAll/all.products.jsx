import { useParams } from "react-router-dom";

import Loader from "../public/Loader";
import { UseProPromo } from "./Hooks/all.products.hook";
import { useContext } from "react";
import CarritoContext from "../../context/carrito";
import ProductContext from "../../context/products";
import CardProducts from "../productos/CardProducts";
const AllPro = () => {
    const {id}=useParams()
    const { viewpro}=useContext( ProductContext )
    const { addcarr,stateDolar,loader}=useContext(CarritoContext)
    
    const {stateProductsPromo}=  UseProPromo(id,addcarr,stateDolar,viewpro)
    
    
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
                         
                          /*  <div className="boxProAll">
                           <div className="contentimg">
           
                               <img src={el?.imagenes[0]?.URL||el?.imagenes[0][0]?.URL||'https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg'} className="imgProAll" alt="" />
           
                                   <div onClick={(e)=>viewpro(el.idcomp)} className="btncomprar" style={{cursor:"pointer"}}>
                                       <button onClick={(e)=>(e.stopPropagation(),addcarr(el.idcomp,1))} className="addCarr btn btn-danger p-2">Comprar</button>
                                   </div>
           
                           </div>
                           <div className="contentBoxProAll">
                               <a href={"#/description/" +el.idcomp} className="AnombrePro">
                                   {el.nomcomp}
                               </a>
           
                               <div className="row">
                                   <p className="PrecioDolar"><strike>${Number(el.precio_venta)} </strike> - <span className="preciosol">S/{ el?.precio_promoventa|| el.precio_venta}</span></p>
                               </div>
                               <p className="stock pb-3">Stock:{el.stock}</p>
                               <p className="Oferta d-none"> $20</p>
                           </div>
                       </div> */
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
 
export default AllPro;