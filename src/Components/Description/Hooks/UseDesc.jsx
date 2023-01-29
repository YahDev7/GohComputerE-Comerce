import { Fetchs } from "../../../Fetchs/fetchs";
import { useEffect, useState } from "react";

export const UseDesc=(id,setloader)=>{
    
    let initalProd={
        id:"",
        nombre:"",
        preciodolares:null,
        preciosoles:null,
        link:"",
        categoria_id:null
    }


    const [stateonepro, setStateonepro] = useState(initalProd);
    const [porespec, setPorespec] = useState([]);
    const [cantProd, setcantProd] = useState(1);

    //cambiar por el context
    const product=async(id)=>{
        setloader(true)
        const res= await Fetchs.getOne(id)
        setStateonepro(res)
        const resespe= await Fetchs.getOne(id,true)
        setPorespec(resespe)

        setloader(false)
    }
    /* useEffect(() => {
        if(cantProd<=0) return setcantProd(1) ;
    }, [cantProd]); */
    useEffect(() => {
        product(id)
    }, [id]);

    

    return{stateonepro,porespec,cantProd,setcantProd}
} 