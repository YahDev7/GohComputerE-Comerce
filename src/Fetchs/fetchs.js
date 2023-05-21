import { BaseURLAPI, BaseURLAPI2 } from "./Base_URL.js";

export const Fetchs={
     getpromo: async()=> {
        const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/allpromo`)
       
        const res2 =await res.json();
        if(res2.err) return res2;

       return res2
    }, 
    get: async()=> {
        const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/main`)
       
        const res2 =await res.json();
        if(res2.err) return res2;

       return res2
    },
    getdestacados: async()=> {
        const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/destacados`)
        const res2 =await res.json(); 
         return res2;
    },
    getNuevos: async()=> {
        const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/news`)
        const res2 =await res.json(); 
       return res2;       
    },

    getAllBysubcat: async(id)=> {
         const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/getBySubcat/${id}`)
        const res2 =await res.json();
        if(res2.err) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"} 

        return res2;
    },
    getOne: async(id)=> {
        const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/getByIdProd/${id}`)
        const res2 =await res.json();
        if(res2.err) return res2

        return res2
    },
    search: async(prod)=> {
        console.log(prod)
         const res = await fetch(`${BaseURLAPI2}/products/gohcomputer/search/${prod}`)
        const res2 =await res.json();
       
        if(res2.err) return {err:true,status:200,statusText:"No hay Productos"}
        return res2;
    }

}

 export const FetchCat={    
    get: async()=> {
        const res = await fetch(`${BaseURLAPI2}/categoria/gohcomputer/all`)
        const res2 =await res.json();
       /*  console.log(res2,'categoria') */
        return res2;
    }, 
     getOne: async(id)=> {
        const res = await fetch(`${BaseURLAPI2}/categoria/gohcomputer/onecat/${id}`)
        const res2 =await res.json();
        return res2;
        
        if(res2.err) return {err:true,status:200,statusText:"No hay la categoria"}

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
        const res = await fetch(`${BaseURLAPI2}/subcategoria/gohcomputer/bycategoria/${id}`)
        const res2 =await res.json();
        
        return res2;
        if(res2.err) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"} 

/*         let Subcat= res2.filter((Subcat)=>Subcat.categoria_id===Number(id)&&Subcat)
if(Subcat.length===0) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"}
*/      

    }
}

export const fetchLogin={
    login:async (body)=>{
        let options= {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            // otras opciones...
          }
        const res = await fetch(`${BaseURLAPI2}/customer/gohcomputer/login`,options)
        const res2 =await res.json();
        console.log(res2)
        return res2;
    },
    register:async (body)=>{
        body={...body,"enterprise_id": "6463b7176f62eabdc5d7329d","estado": "A"}
        console.log(body)
/* 
        const options={
            method:"POST",
            body:JSON.stringify({"user":frmLogin.user.value,"password":frmLogin.password.value}),
            headers:{"Content-Type":"application/json"}
        }; */
       let options= {
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
    
        return res2;
    }
}