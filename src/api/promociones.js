import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const PromocionesFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.GET,headers)
        return res
    }, 
    getWeb: async(token)=> {
      //  let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.GETWEB/* ,headers */)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.GETBYID(id),headers)
        return res
    },
    getOneWeb: async(id)=> {
        //let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.GETBYIDPROMO(id)/* ,headers */)
        return res
    },
    post: async(body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.POST,body,headers)
        return res
    }, 
    put: async(id,body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.PUT(id),body,headers)
        return res
    }, 
    delete: async(id,token)=> { //IDENTIFICAR EL ERROR
        let headers={ Authorization: `Bearer ${token}`}
        let res= await method.delete(BaseURLAPI2+ROUTES_BACK.ADMIN.PROMOCIONES.DELETE(id),headers)
        return res
    },  

} 