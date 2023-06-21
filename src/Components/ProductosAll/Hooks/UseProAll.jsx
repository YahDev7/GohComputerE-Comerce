
import { useEffect, useState } from "react";
import { Fetchs } from "../../../api/fetchs"
import CardProducts from "../../productos/CardProducts";

export const UseProAll=(id,addcarr,stateDolar,viewpro)=>{
    
    const [proAll, setProAll] = useState([]);

    const loadProdAll= async(id)=>{
        const res = await Fetchs.getAllBysubcat(id)
        if(res.err) return setProAll([])
        return setProAll(res)
    }
    useEffect(() => {
            loadProdAll(id);
    }, [id]);

    const ProdBysubcat = () => {
        let box = [];

        if(proAll.message) return <h2>{proAll.message}</h2>
        for (let i = 0; i < proAll.length; i++) {
            box.push(
                <CardProducts dolar={stateDolar} viewpro={viewpro} key={proAll[i].idcomp} addcarr={addcarr} laptops={proAll[i]}></CardProducts>
            )

        }
        return box
    }

    return {proAll,ProdBysubcat}

}



