
import Slider from "react-slick";
import { UseCats } from "./Hooks/UseIndex";
import { useContext } from "react";
import CarrContext from "../../Context/carr";
import Loader from "../Loader";

const ProIndex = () => {
    const {addcarr,stateDolar,stateProducts,viewpro,stateCategorias,loader} =useContext(CarrContext)
    const {handleCatActive,idsubcat, btnactive,settings,listcategorias,listarProd}= UseCats(addcarr,stateDolar,viewpro,stateProducts,stateCategorias)
    

    return (  
        <section className="sectionProductosAll container">
            <h2 className="titleProAll"> Promociones</h2>

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