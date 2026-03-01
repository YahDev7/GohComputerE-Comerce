/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import CarritoContext from "../../../Context/carr";
import { UseProDest } from "./Hooks/UsePorDes";

const ProDes = () => {

    const {addcarr,stateDolar,viewpro} =useContext(CarritoContext)
    //hacer independiente y en un contex los productos cat y subcats
    const {settings,prodestacados} = UseProDest(stateDolar,viewpro,addcarr);  
    return (
        <div>

            <section id="sectionProdDestacados" className="container">
                <h3 className="titleProDesta">Productos destacados</h3>

                <div className="sliderContainer">

                    <Slider {...settings}>
                        
                        {prodestacados()}


                    </Slider>


                </div>



            </section>
        </div>
    );
}

export default ProDes; */