import { createContext, useEffect, useState } from "react";
import { FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";

 
    const LoaderContext= createContext()
    let initalcarr=[]
    
    //let carrinital=JSON.parse(localStorage.getItem("carrito"));
    const LoaderProvider=({children})=>{
      
    
        const [loader, setloader] = useState(false);
          const data={
            setloader,
            loader,
          }

        return(
            <LoaderContext.Provider value={data}>{children}</LoaderContext.Provider>
        )
    }


    export {LoaderProvider};
    export default LoaderContext;