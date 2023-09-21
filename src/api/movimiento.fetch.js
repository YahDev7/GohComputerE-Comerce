import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const MovimientoFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GET,headers)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETID(id),headers)
        return res
    },
    post: async(token,body)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.POST,body,headers)
        return res
    },
    getTotalServicios :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETSERVICIOS,headers)
    return res
    }, 
    getTotalServiciosDia :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETSERVICIOSDIA,headers)
    return res
    }, 
    getTotalServiciosMes :async(token,mes)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETSERVICIOSMES(mes),headers)
    return res
    }, 
} 