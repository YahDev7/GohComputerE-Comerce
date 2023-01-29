import { BaseURLAPI } from "./Base_URL.js";

export const Fetchs={
    get: async(tabla)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer`)
        const res2 =await res.json();
        if(res2.err) return res2;

        if(tabla==="pro") return res2.allPro;
        if(tabla==="dolar") return res2.dolar;
        if(tabla==="cat") return res2.allcat;
    },
    getdestacados: async()=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/proddestacados`)
        const res2 =await res.json();
         return res2;
    },
    getNuevos: async()=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/prodnuevos`)
        const res2 =await res.json();
       return res2;       
    },

    getAllBysubcat: async(id)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/componentes/?id=${id}`)
        const res2 =await res.json();
        if(res2.err) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"}

        return res2.getProBySubCat;
    },
    getOne: async(id,esp=false)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/prodOne/?id=${id}`)
        const res2 =await res.json();
        if(res2.err) return res2
        if(esp) return res2.proesp;

        return res2.onePro[0]
    },
    search: async(prod)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/search/?search=${prod}`)
        const res2 =await res.json();
       
        if(res2.err) return {err:true,status:200,statusText:"No hay Productos"}

        return res2;
    }

}

 export const FetchCat={
   /*  get: async()=> {
        const res = await fetch("Utils/Categorias.json")
        const res2 =await res.json();
        return res2;
    }, */
     getOne: async(id)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/onecat/?id=${id}`)
        const res2 =await res.json();
        
        if(res2.err) return {err:true,status:200,statusText:"No hay la categoria"}

        return res2[0];
    } 
} 

export const FetchSubCat={
  /*   get: async()=> {
        const res = await fetch("Utils/SubCategorias.json")
        const res2 =await res.json();
        return res2;
    }, */
    //subcategorias por categoria
    getOne: async(id)=> {
        const res = await fetch(`${BaseURLAPI}/gohcomputer/getallSubCategorias/?categoria_id=${id}`)
        const res2 =await res.json();
        
        if(res2.err) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"}
        return res2;

/*         let Subcat= res2.filter((Subcat)=>Subcat.categoria_id===Number(id)&&Subcat)
if(Subcat.length===0) return {err:true,status:200,statusText:"No hay subcategorias que mostrar"}
*/      

    }
}