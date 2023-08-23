import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const CustomerFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.CUSTOMER.GET,headers)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.CUSTOMER.GETID(id),headers)
        return res
    },
     post: async(token,body)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.CUSTOMER.REGISTER,body,headers)
        return res
    },  
    postByEnterprise: async(token,body)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.CUSTOMER.POST,body,headers)
        return res
    }, 
    put: async(id,body,token)=> {
        
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.CUSTOMER.PUT(id),body,headers)
        return res
    }, 
    delete: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.delete(BaseURLAPI2+ROUTES_BACK.ADMIN.CUSTOMER.DELETE(id),headers)
        return res
    }, 
} 