import { createContext, useEffect, useState } from "react";
import { FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";

 
    const CategoriaContext= createContext()
    let initalcarr=[]
    
    const CategoriaProvider=({children})=>{
      

        const [stateCategorias, setStateCategorias] = useState([]);
    const [loadercat, setloadercat] = useState(false);
      
        const loadCategorias= async()=>{
          setloadercat(true)
          const res =await FetchCat.get()
          setStateCategorias(res)
          setloadercat(false)
        }

       useEffect(() => {
         loadCategorias();
       }, []);
       

          const data={
            stateCategorias,
            loadercat
          }

        return(
            <CategoriaContext.Provider value={data}>{children}</CategoriaContext.Provider>
        )
    }


    export {CategoriaProvider};
    export default CategoriaContext;