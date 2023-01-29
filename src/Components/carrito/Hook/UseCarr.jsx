import { FetchsPedidos } from "../../../Fetchs/pedidos";
import ItemsCarr from "../itemsCarr";

export const UseCarr=(itemsCarr, pluscarr,minuscarr,btnremovepro)=>{
   
    const confirmPedido=async(tokcarr,subtotal)=>{
            const residpedido=await FetchsPedidos.save(tokcarr,subtotal);
            localStorage.removeItem("tokencarr")
            location.href="#/confirmado/"+residpedido.id_pedido;    
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
 
    return {productCarr,confirmPedido}
}