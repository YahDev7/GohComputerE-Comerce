import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import CarritoContext from "../../context/carr";
import { UseProDest } from "./Hooks/UsePorDes";
import Loader from "../public/Loader";

const ProDes = ({nuevos}) => {

    const {addcarr,stateDolar,loader} =useContext(CarritoContext)
    //hacer independiente y en un contex los productos cat y subcats
    const {settings,prodestacados,prodNuevos} = UseProDest(stateDolar,viewpro,addcarr);  
    if(nuevos){
        return (
            <div>
    
                <section id="sectionProdDestacados" className="container">
                    
                    <h3 className="titleProDesta">Productos Nuevos</h3>
                    <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
                    <a href="#/categorias" className="vermas" >Ver más</a>    
                        <div className="sliderContainer">
        
                            <Slider {...settings}>
                                
                                {prodNuevos()}
        
        
                            </Slider>
        
        
                        </div>
                    </div>
    
    
                </section>
            </div>
        );
    }
    return (
        <div>

            <section id="sectionProdDestacados" className="container">
                <h3 className="titleProDesta">Productos destacados</h3>
                <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
                    <a href="#/categorias" className="vermas" >Ver más</a>    
                    <div className="sliderContainer">

                        <Slider {...settings}>
                            
                            {prodestacados()}


                        </Slider>


                    </div>
                </div>


            </section>
        </div>
    );
}

export default ProDes;