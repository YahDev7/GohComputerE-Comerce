import { ROUTES_BACK } from "../Routes/index.js";
import {  BaseURLAPI2 } from "../config/Base_URL.js";
import { method } from "./methods.js";

export const Fetchs={
     getpromo: async()=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_ALL_PROMO)
        return res
    }, 
    get: async()=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_MAIN)
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
    getOne: async(id)=> {

        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.GET_BY_ID_PROD(id))
        return res;  
    },
    search: async(prod)=> {

        let res= await method.get(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.SEARCH(prod))
        return res;  
    },
    save:async(body)=>{
        let newbody={...body,usuario_id:"6463b7c37d6e0298ee733e1e",enterprise_id:"6463b7176f62eabdc5d7329d"}
        let res = await method.post(BaseURLAPI2+ROUTES_BACK.PRODUCTOS.POSTS.BYENTERPRISE,newbody)
        return res
    }
}

 export const FetchCat={    
    get: async()=> {

        let res= await method.get(BaseURLAPI2+ROUTES_BACK.CATEGORIAS.GET_ALL)
        return res
    }, 
     getOne: async(id)=> {
        let res= await method.get(BaseURLAPI2+ROUTES_BACK.CATEGORIAS.GET_ONE(id))
        return res
    } 
} 

export const FetchSubCat={
  /*   get: async()=> {
        const res = await fetch("Utils/SubCategorias.json")
        const res2 =await res.json();
        return res2;
    }, */
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
    login:async (body)=>{

       let res= await method.post(BaseURLAPI2+ROUTES_BACK.USER.LOGIN,body)
       return res
    },
    register:async (body)=>{
console.log()
        return
        body={...body,"enterprise_id": "6463b7176f62eabdc5d7329d","estado": "A"}

        let res= await method.post(BaseURLAPI2+ROUTES_BACK.USER.REGISTER,body)
        return res
    }
}

export const FetchCarrito={
    save:async (carr,tokensession)=>{

        const options = {
            method: "POST",
            body: JSON.stringify(carr),
            headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${tokensession}`, }
        };
        const res = await fetch(BaseURLAPI2+ROUTES_BACK.CARRITO.SAVE, options);
        const res2 = await res.json();
        return res2
    },
    get:async (tok)=>{
        const options = {
            method: "POST",
            body: JSON.stringify({ tok }),
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tok}` }
        };
        const res = await fetch(BaseURLAPI2+ROUTES_BACK.CARRITO.GET_ITEMS, options);
        const res2 = await res.json();
    }
}

