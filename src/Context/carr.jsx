import { createContext, useEffect, useState } from "react";
import { FetchCat, Fetchs } from "../Fetchs/fetchs";

 
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
        const [stateCategorias, setStateCategorias] = useState([]);
        const [loader, setloader] = useState(false);
        const [login, setlogin] = useState(false);
        const [tokcarr, setTokcarr] = useState(tokencarr===null?[]:tokencarr);
        const itemscarrtoken=async(tok)=>{
            const options={
              method:"POST",
              body:JSON.stringify({tok}),
              headers:{'Content-Type': 'application/json',tok} 
            };
            const res = await fetch("http://localhost:4004/gohcomputer/getcarr",options);
            const res2 =await res.json();
            //console.log(res2);
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


        const loadProducts= async()=>{
          setloader(true)
          const res =await Fetchs.get()
          setStateProducts(res)
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
        const res = await fetch("http://localhost:4004/gohcomputer/jwtcarr",options);
       
        const res2 =await res.json();
      
        localStorage.setItem("tokencarr",res2.tokencarr)
        setTokcarr(res2.tokencarr);
       // document.cookie="tokencarr="+res2.tokencarr;
      }

        const pluscarr=(id)=>{
          let newcarrplus= itemsCarr.map(pro=>pro.id===id? {...pro,unidad:pro.unidad+1}:pro);
         
          jwtcarr(newcarrplus)
          console.log(itemsCarr);
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
        const addcarr=async(id,cantidad)=>{
          console.log(id)
          const res = await Fetchs.getOne(id);
          if(res.err) return alert(res.statusText)
         
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
              img:res.url_imagencom,
              nombre:res.nomcomp,
              unidad:cantidad,
              precio:res.precio_venta  
            }];
            //setItemsCarr(firstCarr)
            jwtcarr(firstCarr)
           }
            statesetSidebarCarr(true)
        
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
            tokcarr
          }

        return(
            <CarrContext.Provider value={data}>{children}</CarrContext.Provider>
        )
    }


    export {CarrProvider};
    export default CarrContext;