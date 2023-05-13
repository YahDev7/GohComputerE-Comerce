import { useEffect, useState } from "react";
import { Fetchs } from "../../../Fetchs/fetchs";
import CardProducts from "../../CardProducts";

export const UseProDest=(stateDolar,viewpro,addcarr)=>{

    var settings = {
        dots: false,
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
/*         beforeChange:(curret,next)=> setSlideIndex(next),
 */        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [stateProductsDest, setstateProductsDest] = useState([]);

    const loadProdest=async()=>{
        let res=await Fetchs.getdestacados();
       
        setstateProductsDest(res)
    }

    useEffect(() => {
        loadProdest();
    }, []);


    const prodestacados = () => {
        let box=[];
        for (let i = 0; i < stateProductsDest.length; i++) {
           
           box.push( 
               <CardProducts dolar={stateDolar} viewpro={viewpro} addcarr={addcarr} laptops={stateProductsDest[i]} key={stateProductsDest[i].idcomp} ></CardProducts>
               )
       }

       if(box.length===0) return <h2>No hay productos que mostrar</h2>
       return box
   }

   return {settings,prodestacados}

}