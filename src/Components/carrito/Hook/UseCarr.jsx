import { useEffect, useState } from "react";
import { FetchsPedidos } from "../../../api/pedidos";
import ItemsCarr from "../itemsCarr";

export const UseCarr=(itemsCarr, pluscarr,minuscarr,btnremovepro,tokensession)=>{
   
    const [idsprod, setidsprod] = useState(null);

    const confirmPedido=async(tokcarr,subtotal)=>{
        if(!tokensession) return location.href="#/login"
        if(!tokcarr) return location.href="#/login"
        
        const residpedido=await FetchsPedidos.save(tokcarr,tokensession,subtotal);
        console.log(residpedido)
        if(!residpedido.err){
            localStorage.removeItem("tokencarr")
            return location.href="#/confirmado/"+residpedido.data;    
        } 
        //
    }

    const getidsprod=()=>{
      let res=itemsCarr.map((el)=> {
        return JSON.stringify({
            "id":el.id,
            "cantidad":el.unidad
        })
      });
      setidsprod(res)
    }

    const productCarr = () => {
        let box = [];
        if(itemsCarr.length){
            for (let i = 0; i < itemsCarr.length; i++) {
                box.push(<ItemsCarr btnremovepro={btnremovepro} pluscarr={ pluscarr} minuscarr={ minuscarr} itemsCarr={itemsCarr[i]} key={itemsCarr[i].id}></ItemsCarr>)
            }  
           
            return box
        }
        return {err:true,Text:"Carrito vacio"}
        
    }
    
    useEffect(() => {
        getidsprod()
       
    }, [itemsCarr]);
 
    return {productCarr,confirmPedido,idsprod}
}