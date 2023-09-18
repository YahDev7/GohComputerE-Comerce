
import { useEffect, useState } from "react";
import { PromocionesFetch } from "../../../api/Promociones";

export const UsePromo=(id)=>{
    
    const [stateProductsPromo, setStateProductsPromo] = useState([]); 

    const loadProdAll= async()=>{
        const respromo =await PromocionesFetch.getWeb()
        return setStateProductsPromo(respromo)
    }

    useEffect(() => {
            loadProdAll();
    }, [id]);



    return {stateProductsPromo,}

}