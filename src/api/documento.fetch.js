import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const DocumentoFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.DOCUMENTO.GET,headers)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.DOCUMENTO.GETID(id),headers)
        return res
    },
    post: async(token,body)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.DOCUMENTO.POST,body,headers)
        return res
    },
    postAnaular: async(token,body)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.DOCUMENTO.POSTANULAR,body,headers)
        return res
    }

} 