import { BaseURLAPI2 } from "../config/Base_URL.js";

export const FetchsPedidos={
    getallpedidos: async()=> {
    
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido/getall`)
        const res2 =await res.json();
        return res2;

    },
    getDetallepedido: async(pedido_id)=> {
    
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido/getone/${pedido_id}`)
        const res2 =await res.json();
        return res2;

    },
    save: async(tokcarr,subtotal)=> {
     
        const options={
            method:"POST",
            body:JSON.stringify({tokcarr,subtotal}),
            headers:{"Content-Type":"application/json"}
        };
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido`,options)
        const res2 =await res.json();
        return res2;

    },
    depositopedido: async(form)=> {
     
        const options={
            method:"POST",
            body:JSON.stringify(form),
            headers:{"Content-Type":"application/json"}
        };
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido/deposito`,options)
        const res2 =await res.json();
        return res2;

    },
    verifydeposito: async(pedido_id)=> {       
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido/verifydeposito/${pedido_id}`)
        const res2 =await res.json();
        return res2;

    }
}