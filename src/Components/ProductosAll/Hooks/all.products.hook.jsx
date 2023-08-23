
import { useEffect, useState } from "react";
import { Fetchs } from "../../../api/fetchs"
import CardProducts from "../../productos/CardProducts";
import { PromocionesFetch } from "../../../api/Promociones";

export const UseProPromo=(id,addcarr,stateDolar,viewpro)=>{
    
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