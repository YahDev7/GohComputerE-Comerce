import { useEffect, useState } from "react";
import {  FetchCat, FetchSubCat } from "../../../Fetchs/fetchs";
import SubCardCategorias from "../../CardSubCategorias";

export const UseSubCats =(id)=>{

    const [stateSubCategorias, setStateSubCategorias] = useState([]);
    const [onesubcat, setOnesubcat] = useState([]);
    const loadsubCats= async(id)=>{
        const res = await FetchSubCat.getOne(id);//obtenemos todas las subcategorias por una categoria
        setStateSubCategorias(res)

        const rescat = await FetchCat.getOne(id);//obtenemos todas las subcategorias por una categoria
        setOnesubcat(rescat)
    }

    useEffect(() => {
        loadsubCats(id);
    }, [id]);
    const boxsubcatsBycat = () => {
        let box = [];
        if(stateSubCategorias.err) return <h2>{stateSubCategorias.statusText}</h2>
        
        if(stateSubCategorias.length){
            for (let i = 0; i < stateSubCategorias.length; i++) {
                box.push(
                    <SubCardCategorias subcat={stateSubCategorias[i]} key={stateSubCategorias[i].id} ></SubCardCategorias>
                )
            }    
            return box
        }
        
    }
    return {boxsubcatsBycat,onesubcat}
}
