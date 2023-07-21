import { ROUTES_BACK } from "../Routes/index.js";
import { BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const FetchsPedidos={
    getallpedidosByEnterprise: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.DOCUMENTO.GET,headers)
       // const res = await fetch(`${BaseURLAPI2}/documento/gohcomputer/getall`,headers)
        return res;

    },
    getDetallepedido: async(pedido_id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.DOCUMENTO.GETID(pedido_id),headers)
        return res;

    },
    save: async(tokcarr,tokensession,subtotal)=> {
     
        const options={
            method:"POST",
            body:JSON.stringify({tokcarr,tokensession,subtotal}),
            headers:{"Content-Type":"application/json"}
        };
        const res = await fetch(`${BaseURLAPI2}/documento`,options)
        const res2 =await res.json();
        return res2;

    },
    depositopedido: async(form)=> {
     
        const options={
            method:"POST",
            body:JSON.stringify(form),
            headers:{"Content-Type":"application/json"}
        };
        const res = await fetch(`${BaseURLAPI2}/movimiento-m/gohcomputer/deposito`,options)
        const res2 =await res.json();
        return res2;

    },
    verifydeposito: async(pedido_id)=> {       
        const res = await fetch(`${BaseURLAPI2}/gohcomputer/pedido/verifydeposito/${pedido_id}`)
        const res2 =await res.json();
        return res2;

    }
}