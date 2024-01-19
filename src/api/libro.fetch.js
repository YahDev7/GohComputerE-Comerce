import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const LibroFetch={    
    get: async(/* token */)=> {
        let headers={ /* Authorization: `Bearer ${token}`, */}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.LIBRO.GET,headers)
        return res
    }, 
    getOne: async(id,/* token */)=> {
        let headers={ /* Authorization: `Bearer ${token}` */}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.LIBRO.GETID(id),headers)
        return res
    },
    post: async(/* token, */body)=> {
        let headers={  /* Authorization: `Bearer ${token}`,*/ "Content-Type": "application/json" }
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.LIBRO.POST,body,headers)
        return res
    }, 
   

} 