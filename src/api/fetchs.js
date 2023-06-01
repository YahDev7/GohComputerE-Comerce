import { ROUTES_BACK } from "../Routes/index.js";
import { BaseURLAPI, BaseURLAPI2 } from "../config/Base_URL.js";
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


