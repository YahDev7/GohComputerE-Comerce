import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const Fetchs={
    
  
    getpromo: async()=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_ALL_PROMO)
        return res
    }, 
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_MAIN,headers)
        return res
       
    },
    getdestacados: async()=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_DESTACADOS)
        return res
    },
    getNuevos: async()=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_NEWS)
       return res;       
    },

    getAllBysubcat: async(id)=> {

        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_BY_SUBCAT(id))
        return res;   
    },
    getOne: async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.GETBYID(id),headers)
        return res;  
    },
    getOneGoh: async(id)=> {
       // let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_BY_ID_PROD(id))
        return res;  
    },
    search: async(prod)=> {

        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.SEARCH(prod))
        return res;  
    },
    save:async(body,token)=>{
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
      //  let newbody={...body,usuario_id:"6463b7c37d6e0298ee733e1e",enterprise_id:"6463b7176f62eabdc5d7329d"}
        let res = await method.post(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.POSTS.BYENTERPRISE,body,headers)
        return res
    },
    update:async(id,body,token)=>{
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res = await method.put(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.UPDATE(id),body,headers)
        return res
    },
    delete:async(id,token)=>{
        let headers={ Authorization: `Bearer ${token}`, "Content-Type": "application/json"}
        let res = await method.delete(BaseURLAPI2+ROUTES_BACK.ADMIN.PRODUCTOS.DELETE(id),headers)
        return res
    }
}

 export const FetchCat={    
    get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.CATEGORIAS.GET_ALL,headers)
        return res
    }, 
     getOne: async(id)=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.CATEGORIAS.GET_ONE(id))
        return res
    } 
} 

export const FetchSubCat={
   get: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.SUBCATEGORIAS.GET_All_BY_ENTERPRISE,headers)
    return res
    }, 
    //subcategorias por categoria
    getByCat: async(id)=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.SUBCATEGORIAS.GET_BY_CATEGORIA(id))
        return res
            /*         let Subcat= res2.filter((Subcat)=>Subcat.categoria_id===Number(id)&&Subcat)
            if(Subcat.length===0) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"}
            */      

    }
}

export const fetchLogin={
    login:async (body)=>{
        
       let res= await method.post(BaseURLAPI2+ROUTES_BACK.CUSTOMER.LOGIN,body)
       return res
    },
    register:async (body)=>{
        body={...body,"enterprise_id": "6463b7176f62eabdc5d7329d","estado": "A"}

        let res= await method.post(BaseURLAPI2+ROUTES_BACK.CUSTOMER.REGISTER,body)
        return res

        /* 
        const options={
            method:"POST",
            body:JSON.stringify({"user":frmLogin.user.value,"password":frmLogin.password.value}),
            headers:{"Content-Type":"application/json"}
        }; */
  /*      let options= {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            // otras opciones...
          }
          


        const res = await fetch(`${BaseURLAPI2}/customer/gohcomputer/register`,options)
        const res2 =await res.json();
        console.log(res2)
    
        return res2; */
    }
}

export const fetchLoginAdmin={
    login:async (body,token)=>{
        let headers={ "Content-Type": "application/json", Authorization: `Bearer ${token}`}
       let res= await method.post(BaseURLAPI2+ROUTES_BACK.USER.LOGIN,body,headers)
       return res
    },
    register:async (body)=>{
        return
        body={...body,"enterprise_id": "6463b7176f62eabdc5d7329d","estado": "A"}

        let res= await method.post(BaseURLAPI2+ROUTES_BACK.USER.REGISTER,body)
        return res
    }
}

export const FetchCarrito={
    save:async (carr)=>{
        const options = {
            method: "POST",
            body: JSON.stringify(carr),
            headers: { 'Content-Type': 'application/json'}
        };
        const res = await fetch(BaseURLAPI2+ROUTES_BACK.CARRITO.SAVE, options);
        const res2 = await res.json();
        return res2
    },
    get:async (tok)=>{
        const options = {
            method: "POST",
            body: JSON.stringify({ tok}),
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tok}` }
        };
        const res = await fetch(BaseURLAPI2+ROUTES_BACK.CARRITO.GET_ITEMS, options);
        const res2 = await res.json();
        return res2
    }
}
export const uploadFilesFetch={
    save:async (files,token,id)=>{
        const formData = new FormData();
        formData.append('files', files); // Suponiendo que `files` es el archivo o archivos que deseas cargar

        const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}`}
        };
        const res = await fetch(BaseURLAPI2+ROUTES_BACK.IMG.SAVE(id), options);
        const res2 = await res.json();
        return res2
    },
    saveProducto:async (file,token,id)=>{
        const formData = new FormData();
        formData.append('file', file); // Suponiendo que `files` es el archivo o archivos que deseas cargar

        const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}` }
        };


        const res = await fetch(BaseURLAPI2+ROUTES_BACK.IMG.SAVE(id), options);
        const res2 = await res.json();
        return res2
    },
    saveCategoria:async (file,token,id)=>{
        const formData = new FormData();
        formData.append('file', file); // Suponiendo que `files` es el archivo o archivos que deseas cargar

        const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}` }
        };


        const res = await fetch(BaseURLAPI2+ROUTES_BACK.IMG.SAVECATEGORIA(id), options);
        const res2 = await res.json();
        return res2
    },

    saveSubCategoria:async (file,token,id)=>{
        const formData = new FormData();
        formData.append('file', file); // Suponiendo que `files` es el archivo o archivos que deseas cargar

        const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}` }
        };


        const res = await fetch(BaseURLAPI2+ROUTES_BACK.IMG.SAVESUBCATEGORIA(id), options);
        const res2 = await res.json();
        return res2
    },
    saveBilleteraVirtual:async (file,token,idMovi)=>{
        const formData = new FormData();
        formData.append('file', file); // Suponiendo que `files` es el archivo o archivos que deseas cargar

        const options = {
            method: "POST",
            body: formData,
            headers: {"Authorization": `Bearer ${token}` }
        };


        const res = await fetch(BaseURLAPI2+ROUTES_BACK.IMG.SAVEBILLETERAVIRTUAL(idMovi), options);
        const res2 = await res.json();
        return res2
    },
}




export const FetchMov={
    getSumaVenta: async(token)=> {
         let headers={ Authorization: `Bearer ${token}`,}
         let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.UNIDAD.SUMAVENTAS,headers)
     return res
     }, 
     //subcategorias por categoria
     getSumaCompras: async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.UNIDAD.SUMACOMPRAS,headers)
    return res
    },
  
    getTotalDia :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETVENTASDIA,headers)
    return res
    }, 
    getTotalMes :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETVENTASMES ,headers)
    return res
    }, 

    getTotalDiaCompra :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETCOMPRADIA,headers)
    return res
    }, 
    getTotalMesCompra :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETCOMPRAMES ,headers)
    return res
    },
    getIngresosMensuales :async(token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.ADMIN.MOVIMIENTO.GETINGRESOSMENSUALES ,headers)
    return res
    }, 
    getById :async(id,token)=> {
        let headers={ Authorization: `Bearer ${token}`,}
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.MOVIMIENTO.GETID(id),headers)
    return res
    }, 
 }

 
export const FetchCompra={
    sendCorreo: async(body,token)=> {
        // let headers={ Authorization: `Bearer ${token}`,}
         let res= await method.post(BaseURLAPI2+ROUTES_BACK.CARRITO.SENDCORREO,body/* ,headers */)
         
        return res
     }
    
 }