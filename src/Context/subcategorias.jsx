import { createContext, useEffect, useState } from "react";
import { FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";

 
    const SubCategoriaContext= createContext()
    let initalcarr=[]
    
    const SubCategoriaProvider=({children})=>{
      

        const [stateSubCategorias, setStateSubCategorias] = useState([]);
    const [loadersubcat, setloadersubcat] = useState(false);
      
        const loadCategorias= async()=>{
          setloadersubcat(true)
          const res =await FetchCat.get()
          setStateSubCategorias(res)
          setloadersubcat(false)
        }

       useEffect(() => {
         loadCategorias();
       }, []);
       

          const data={
            stateSubCategorias,
            loadersubcat
          }

        return(
            <SubCategoriaContext.Provider value={data}>{children}</SubCategoriaContext.Provider>
        )
    }


    export {SubCategoriaProvider};
    export default SubCategoriaContext;