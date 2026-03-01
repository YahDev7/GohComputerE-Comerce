import { ROUTES_BACK } from "../../Routes/index.js";
import { BaseURLAPI2 } from "../../config/Base_URL.js";
import { method } from "../methods.js";

export const GuiaFetch={    
   /*  get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.COMPRA.GET,headers)
        return res
    }, 
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.COMPRA.GETID(id),headers)
        return res
    }, */

   /*  post: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.COMPRA.GETID(id),headers)
        return res
    }, */
    put: async(token,body,id)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.GUIA.PUT(id),body,headers)
        return res
    },
    putDiagnostico: async(token,body,id)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.GUIA.PUTDIAGNOSTICO(id),body,headers)
        return res
    },
    putCotizacion: async(token,body,id)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.GUIA.PUTCOTIZACION(id),body,headers)
        return res
    },
    putPruebas_finales: async(token,body,id)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        let res= await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.GUIA.PUTPRUEBAS(id),body,headers)
        return res
    },
/*     postAnaular: async(token,id)=> {
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
     
        let res= await method.post(BaseURLAPI2+ROUTES_BACK.ADMIN.COMPRA.POSTANULAR(id),headers)
        return res
    } */

} 




/* put: async(token,body,id)=> {
    //  let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
      const {ImgInfo,...restoBody}=body 

          const formInfo = new FormData();
          formInfo.append('file', ImgInfo); // Suponiendo que `files` es el archivo o archivos que deseas cargar
          formInfo.append('info', JSON.stringify(restoBody)); 

          const options = {
              method: "PUT",
              body: formInfo,
              headers: {"Authorization": `Bearer ${token}`}
          };
          const res = await fetch(BaseURLAPI2+ROUTES_BACK.ADMIN.GUIA.PUT(id), options);
          const res2 = await res.json();
          return res2

  }, */