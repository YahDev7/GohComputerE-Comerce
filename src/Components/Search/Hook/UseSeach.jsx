import { useEffect, useState } from "react";
import { Fetchs } from "../../../api/fetchs";
import CardProducts from "../../productos/CardProducts";

export const UseSearch=(addcarr,stateDolar,viewpro,search)=>{
    
    const [searchPro, setSearchPro] = useState([]);

    const ressearch=async(search)=>{
         let res = await Fetchs.search(search)
         if(res.err) return setSearchPro([])
         return setSearchPro(res);
         
    }
    useEffect(() => {
        ressearch(search);
    }, [search]);

    const results=()=>{
        let box=[];
        for (let i = 0; i < searchPro.length; i++) {
          box.push( 
            <CardProducts dolar={stateDolar} viewpro={viewpro} addcarr={addcarr} laptops={searchPro[i]} key={searchPro[i].idcomp} ></CardProducts>
          )
        }
        
       if(box.length===0) return <h2>No hay productos que mostrar</h2>
       return box 
    }

    return {results}
}