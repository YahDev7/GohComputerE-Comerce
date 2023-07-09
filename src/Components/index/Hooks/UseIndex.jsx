import { useState } from "react";
import CardCategorias from "../../Categorias/CardCategorias";
import CardProducts from "../../productos/CardProducts";

export const UseCats=(addcarr,viewpro,stateProducts,stateCategorias)=>{
   /*  const [stateProducts, setStateProducts] = useState([]);  */
    const [btnactive, setBtnactive] = useState(0);
    const [idsubcat, setidsubcat] = useState(0);
    
    let settings = {
      dots: false,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          
      ]
    };

    const handleCatActive=(e)=>{
        setBtnactive(e.target.value)
        setidsubcat(e.target.value)
    }
    const listcategorias=()=>{
      let box=[];
      for (let i = 0; i < stateCategorias.length; i++) {
       
        box.push( 
          <CardCategorias key={stateCategorias[i]._id} handleCatActive={handleCatActive} btnactive={btnactive} cat={stateCategorias[i]}></CardCategorias>
        )
      }
      return box 
  }
  const listarProd = () => {
      let cat_id=btnactive;
      let box=[];
      for (let i = 0; i < stateProducts.length; i++) {
         //retorname todos los productos que sean solo de esta categoria 
          if(stateProducts[i].idcat===cat_id){
              box.push( 
                <CardProducts  key={stateProducts[i].idcomp} viewpro={viewpro} addcarr={addcarr} laptops={stateProducts[i]}  ></CardProducts>
              )
          }
          //retorname todos los productos 
          if(Number(cat_id)===0){
              box.push( 
                <CardProducts key={stateProducts[i].idcomp}  viewpro={viewpro} addcarr={addcarr} laptops={stateProducts[i]}  ></CardProducts>
              )
          }
          
         /*    box.push( 
              <CardProducts  key={Math.random()*100} dolar={dolar} viewpro={viewpro} addcarr={addcarr} laptops={stateProducts[i]}  ></CardProducts>
            ) */
        
      }

      if(box.length===0) return <h2>No hay productos que mostrar</h2>
      return box
  }
    return {idsubcat,handleCatActive,btnactive,stateProducts,viewpro,settings,listcategorias,listarProd}

}