import { createContext, useEffect, useState } from "react";
import { FetchCat, Fetchs } from "../Fetchs/fetchs";
import { BaseURLAPI2 } from "../Fetchs/Base_URL";

 
    const CarrContext= createContext()
    let initalcarr=[]
    
    //let carrinital=JSON.parse(localStorage.getItem("carrito"));
    const CarrProvider=({children})=>{
      
      let tokencarr=localStorage.getItem("tokencarr")
        const [itemsCarr, setItemsCarr] = useState(initalcarr);
        const [subtotal, setsubtotal] = useState(0);
        const [statesidebarCarr, statesetSidebarCarr] = useState(false);
        const [stateDolar, setStateDolar] = useState(0); 
        const [stateProducts, setStateProducts] = useState([]); 
     /*    const [stateProductsPromo, setStateProductsPromo] = useState([]);  */

        const [stateCategorias, setStateCategorias] = useState([]);
        const [loader, setloader] = useState(false);
        const [login, setlogin] = useState(false);
        const [tokcarr, setTokcarr] = useState(tokencarr===null?[]:tokencarr);

        const loadProducts= async()=>{
          setloader(true)
          const res =await Fetchs.getpromo()
        /*   const respromo =await Fetchs.getpromo() */
          
          setStateProducts(res)
          /* setStateProductsPromo(respromo) */
          setloader(false)



        }
        const loadCategorias= async()=>{
          setloader(true)
          const res =await FetchCat.get()
          setStateCategorias(res)
          setloader(false)

         
        }

        const btnremovepro=async(id)=>{
          let carrremoveitem =itemsCarr.filter(pro=>pro.id!==id);
          jwtcarr(carrremoveitem)
          
        }
        //meternlo en un context
        const viewpro=(id)=>{
          location.href="#/description/"+id;
        }

        const valdolar= async()=>{
          const res =await Fetchs.get("dolar")
          setStateDolar(res)
        }

         const Scroll=()=>{
          const d=document;
           let positionY =window.scrollY;
           
           addEventListener('scroll',()=>{
               let despazamiento_actual=window.scrollY;
 
               if(positionY>=despazamiento_actual){
                  
                  if(despazamiento_actual<=100){ //o 80
                      d.getElementById('fi').classList.remove("fixed");
      
                   }else{
                      if(positionY>=175){
                      d.getElementById('fi').classList.add("fixed");
                      d.getElementById('fi').style.top="0px";
                      }
                     
                   }
                   
               }else{
                
                     d.getElementById('fi').style.top="-110px"  
                  
               }

               positionY=despazamiento_actual;
           })
       } 
       useEffect(() => {
         Scroll();
         valdolar();
         loadProducts();
         loadCategorias();
       }, []);

       useEffect(() => {
        itemscarrtoken(tokcarr)
       }, [tokcarr]);
      

      const jwtcarr=async(carr)=>{

        const options={
          method:"POST",
          body:JSON.stringify(carr),
          headers:{'Content-Type': 'application/json'} 
        };
        const res = await fetch(`${BaseURLAPI2}/carrito/gohcomputer`,options);
       
        const res2 =await res.json();
      
        localStorage.setItem("tokencarr",res2.tokencarr)
        setTokcarr(res2.tokencarr);
       // document.cookie="tokencarr="+res2.tokencarr;
      }
       const itemscarrtoken=async(tok)=>{
        const options={
          method:"POST",
          body:JSON.stringify({tok}),
          headers:{'Content-Type': 'application/json','Authorization':`Bearer ${tok}`} 
        };
        const res = await fetch(`${BaseURLAPI2}/carrito/gohcomputer/get`,options);
        const res2 =await res.json();
        if(res2.err){
          localStorage.removeItem("tokencarr")
          return [];
        } 
        //Object.values(el)[4]
       let prodarr= res2.map(el=>(el.precio*el.unidad));
       
       let totalpagar=0;
      if(prodarr.length>0)totalpagar= prodarr.reduce((a,b)=>a+b);
        setsubtotal(totalpagar)
        setItemsCarr(res2)
      // document.cookie="tokencarr="+res2.tokencarr; 
      }

      const addcarr=async(id,cantidad)=>{

        const res = await Fetchs.getOne(id);
        if(res.message) return alert(res.statusText)

        let verifypro=itemsCarr.find(pro=>pro.id===res.idcomp)
        if(verifypro){
          let newcarr= itemsCarr.map(pro=>pro.id===res.idcomp? {...pro,unidad:pro.unidad+cantidad}:pro);
           jwtcarr(newcarr)
          //setItemsCarr(newcarr);
        }
        else{
          let firstCarr=[ ...itemsCarr,
            {
            id: res.idcomp,
            img:res.imagenes[0].URL,
            nombre:res.nomcomp,
            unidad:cantidad,
            precio:res?.precio_promoventa||res.precio_venta  
          }];
          //setItemsCarr(firstCarr)
          jwtcarr(firstCarr)
         }
          statesetSidebarCarr(true)
      
      }

    
      const pluscarr=(id)=>{
          let newcarrplus= itemsCarr.map(pro=>pro.id===id? {...pro,unidad:pro.unidad+1}:pro);
         
          jwtcarr(newcarrplus)
      }
      const minuscarr=(id)=>{
         /*  let newcarrminus= itemsCarr.map(pro=>{
           
            if(pro.id===id){
              if(pro.unidad===1){ alert("no puede ser 0"); return false};
              return {...pro,unidad:pro.unidad-1}
            }

            }) */
            let newcarrminus= itemsCarr.map(pro=>pro.id===id? {...pro,unidad:pro.unidad-1}:pro);
            let sin0 =newcarrminus.filter(pro=>pro.unidad!==0);
          
            jwtcarr(sin0)

      }
       

          const data={
            login,
            setlogin,
            itemsCarr,
            setloader,
            loader,
            setItemsCarr,
            addcarr,
            statesidebarCarr,
            statesetSidebarCarr,
            stateDolar,
            stateProducts,
            viewpro,
            stateCategorias,
            pluscarr,
            minuscarr,
            subtotal,
            btnremovepro,
            tokcarr,
           /*  stateProductsPromo */
          }

        return(
            <CarrContext.Provider value={data}>{children}</CarrContext.Provider>
        )
    }


    export {CarrProvider};
    export default CarrContext;