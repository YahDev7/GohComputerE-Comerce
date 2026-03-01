import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const ImageFetch={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.GET,headers)
        return res
    }, 
     getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.GETID(id),headers)
        return res
    }, 
    ByLabel: async(body,token)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.GETLABEL,body,headers)
        return res
    },
    post: async(token,file,body)=> {
         const formData = new FormData();
        formData.append('file', file); 
        formData.append('label', JSON.stringify(body)); 
        
        let headers= {"Authorization": `Bearer ${token}` }
        let res= await method.postImg(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.POST,formData,headers)
        return res
    /*     const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}` }
        }; */

      

       /*  const res = await fetch(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.POST, options);
        const res2 = await res.json();
        return res2 */

     
    }, 
    put: async(token,body,id)=> {
       let newbody={label:body}
       let headers= {"Authorization": `Bearer ${token}`,"Content-Type": "application/json" }
       let options = {
        method: "PUT",
        body:JSON.stringify(newbody),
        headers
      }
      console.log(options)
      const res = await fetch(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.PUT(id), options)
      const res2 = await res.json();
      return res2;
   }, 

    delete: async(id,token)=> { //IDENTIFICAR EL ERROR
        let headers={ Authorization: `Bearer ${token}`}
        let res= await method.delete(BaseURLAPI2+ROUTES_BACK.ADMIN.IMAGES.DELETE(id),headers)
        return res
    },  

} 
