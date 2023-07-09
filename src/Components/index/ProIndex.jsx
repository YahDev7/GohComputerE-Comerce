
import Slider from "react-slick";
import { UseCats } from "./Hooks/UseIndex";
import { useContext } from "react";
import Loader from "../public/Loader";
import CarritoContext from "../../context/carrito";
import ProductContext from "../../context/products";
import CategoriaContext from "../../context/categorias";
import LoaderContext from "../../context/loader";

const ProIndex = () => {
    const {addcarr} =useContext(CarritoContext)
    const {stateProducts,viewpro,loaderprod} =useContext(ProductContext)
    const {stateCategorias,loadercat} =useContext(CategoriaContext)
    const {loader} =useContext(LoaderContext)


    const {handleCatActive,idsubcat, btnactive,settings,listcategorias,listarProd}= UseCats(addcarr,viewpro,stateProducts,stateCategorias)
    

    return (  
        <section className="sectionProductosAll container">
            <h2 className="titleProAll font-bold"> Promociones</h2>

         {/*    <div style={{position:"relative"}}>
                {loader&&<Loader></Loader>}
                <section className="sliderCat">
                    <Slider key={Math.random()*100} {...settings}>
                            <button className={Number(btnactive)===0?"boxCat acti":"boxCat"}  onClick={handleCatActive} value={0}>Todos</button>
                        {listcategorias()}
                    </Slider>
                </section>
            </div> */}

            <div style={{position:"relative"}}>             
                {loader&&<Loader></Loader>}
               {/*  <a href={idsubcat===0?"#/categorias":`#/subcategorias/${idsubcat}`} className="vermas" >Ver más</a>   */}  
              <a href="#/Gohcomputer/productos/allPromo" className="vermas" >Ver más</a>     
                <section className="prodAll" id="ProAll">   
                {
                listarProd()
                    
                }
                </section>
            </div>

        </section>
    );
}
 
export default ProIndex;