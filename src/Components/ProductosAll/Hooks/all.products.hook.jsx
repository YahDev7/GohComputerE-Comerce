
import { useEffect, useState } from "react";
import { Fetchs } from "../../../api/fetchs"
import CardProducts from "../../CardProducts";

export const UseProPromo=(id,addcarr,stateDolar,viewpro)=>{
    
    const [stateProductsPromo, setStateProductsPromo] = useState([]); 

    const loadProdAll= async()=>{
        const respromo =await Fetchs.getpromo()
        return setStateProductsPromo(respromo)
    }
    useEffect(() => {
        
            loadProdAll();
    }, [id]);

    const ProdBysubcat = () => {
        console.log(stateProductsPromo)
        let box = [];

        if(stateProductsPromo.message) return <h2>{stateProductsPromo.message}</h2>
        for (let i = 0; i < stateProductsPromo.length; i++) {
            box.push(
                <CardProducts dolar={stateDolar} viewpro={viewpro} key={stateProductsPromo[i].idcomp} addcarr={addcarr} laptops={stateProductsPromo[i]}></CardProducts>
            )

        }
        return box
    }

    return {stateProductsPromo,ProdBysubcat}

}