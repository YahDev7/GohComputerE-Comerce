import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const UserFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.USER.GET,headers)
        return res
    }, 
     getOne: async(id)=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.CATEGORIAS.GET_ONE(id))
        return res
    } 
} 