import { useEffect, useState } from "react";
import { Fetchs } from "../../../api/fetchs";
import CardProducts from "../../productos/CardProducts";

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
    const [stateProductsNews, setstateProductsNews] = useState([]);

    const loadProducts=async()=>{
        let res=await Fetchs.getdestacados();

        let resnuevos=await Fetchs.getNuevos();
        setstateProductsDest(res);
        setstateProductsNews(resnuevos);
    }

    useEffect(() => {
        loadProducts();
    }, []);


    const prodestacados = () => {
        let box=[];
        for (let i = 0; i < stateProductsDest.length; i++) {
           
           box.push( 
               <CardProducts key={stateProductsDest[i].idcomp}  dolar={stateDolar} viewpro={viewpro} addcarr={addcarr} laptops={stateProductsDest[i]} ></CardProducts>
               )
       }

       if(box.length===0) return <h2>No hay productos que mostrar</h2>
       return box
   }
   const prodNuevos = () => {
    let box=[];
    for (let i = 0; i < stateProductsNews.length; i++) {
       
       box.push( 
           <CardProducts key={stateProductsNews[i].idcomp} dolar={stateDolar} viewpro={viewpro} addcarr={addcarr} laptops={stateProductsNews[i]}  ></CardProducts>
           )
   }

   if(box.length===0) return <h2>No hay productos que mostrar</h2>
   return box
}

   return {settings,prodestacados,prodNuevos}

}