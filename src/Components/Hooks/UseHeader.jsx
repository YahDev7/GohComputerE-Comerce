import CarrItemsSide from "../carrito/ItemsCarrSid";
import { useState } from "react";
import { FetchSubCat } from "../../Fetchs/fetchs";

export const useHeader=(navigate, itemsCarr, stateCategorias, pluscarr,minuscarr,btnremovepro,subtotal)=>{
    const [StatesubCats, setStatesubCats] = useState([]);

    const subCatsbyCat=async(id)=>{
        let res = await FetchSubCat.getOne(id)
        setStatesubCats(res)

    }
    const searchnav=(e)=>{
        if(e.target.search.value){
           return navigate("/search/"+e.target.search.value)
        }
        alert("ingrese algo")
    }
    const subcatsBox=()=>{
        let box = [];
        if(StatesubCats.length){
            for (let i = 0; i < StatesubCats.length; i++) {
                box.push(
                    <div className="ps-5" key={StatesubCats[i].id} >     
                    <a href={"#/productos/"+StatesubCats[i].id}>
                    {StatesubCats[i].nombre}

                    </a>
                                         
                    </div>
                )
            }   
            return box
        }
        return <h2>carrito vacio</h2>
    }
    
    const procarr = () => {
        let box = [];
        if(itemsCarr.length){
            for (let i = 0; i < itemsCarr.length; i++) {
                box.push(<CarrItemsSide key={itemsCarr[i].id} btnremovepro={btnremovepro}  pluscarr={ pluscarr} minuscarr={ minuscarr} itemsCarr={itemsCarr[i]}></CarrItemsSide>)
            }   

            box.push(
            <>
                <div>
                    <div>Hayarticulos</div>
                </div>
                <div className="row">
                    <label className="col-6 text-start" >Sub total</label>
                    <span className="col-6 text-end" >S/{subtotal}</span>
                </div>
              
                <div className="row" id="idTotal">
                    <label className="col-6 text-start">Total</label>
                    <span className="col-6 text-end">S/{subtotal}</span>
                </div>
                <div className="p-4 w-100" >
                    <button type="button" className="btn btn-danger" >Comprar</button>
                </div>
            </>)
            return box
        }
        return <h2>carrito vacio</h2>
       
    }
    
    

    const boxsCat = () => {
        let box = [];
        for (let i = 0; i < stateCategorias.length; i++) {
            box.push(
                <li className="accordion-item " key={stateCategorias[i].id}>

                <a href={"#/subcategorias/"+stateCategorias[i].id} className="nav-link menuLateralCateAcordeon" id="flush-acordionOne" > {stateCategorias[i].nombre}</a>
                <i className="fas fa-plus fs-4 collapsed subCatBtn" onClick={()=>subCatsbyCat(stateCategorias[i].id)}  data-categoria_id="laptops" data-bs-toggle="collapse" data-bs-target={"#flush-"+(stateCategorias[i].nombre).replace(" ","")} aria-controls="flush-laptops"></i>
                
                <div id={"flush-"+(stateCategorias[i].nombre).replace(" ","")} className="accordion-collapse collapse" aria-labelledby="flush-laptops" data-bs-parent="#MenuLateralAccordionDnone">
                   {subcatsBox()}
                </div>

            </li>
            )

        }
        return box
    }
    return {searchnav,boxsCat,procarr}
}