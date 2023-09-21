import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const ProductosFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.GET,headers)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.GETBYID(id),headers)
        return res;  
    },

    getOneService: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.GETBYIDSERVICE(id),headers)
        return res;  
    },
    postStock: async(token,id,body)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.POSTSTOCK(id),body,headers)
        return res
    }, 
    getwithstock: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.GETWITHSTOCK,headers)
        return res
    }, 
    getPromoWebBySubcat: async(id)=> {
     //   let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GETWEBPROMO(id)/* ,headers */)
        return res
    }, 
    post: async(body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.POST,body,headers)
        return res
    }, 
    postService: async(body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.POSTSERVICE,body,headers)
        return res
    }, 
    put: async(id,body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.PUT(id),body,headers)
        return res
    },
    putService: async(id,body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.PUTSERVICE(id),body,headers)
        return res
    }, 
   /*  getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.CATEGORIA.GETID(id),headers)
        return res
    },
*/
    deleteOneImg: async(body,token)=> { //IDENTIFICAR EL ERROR
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}

        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.DELETEONEIMG,body,headers)

        return res
    },   

} 