import CarrItemsSide from "../carrito/ItemsCarrSid";
import { useState } from "react";
import { FetchSubCat } from "../../api/fetchs";

export const useHeader=(navigate, itemsCarr, stateCategorias, pluscarr,minuscarr,btnremovepro,subtotal)=>{
    const [StatesubCats, setStatesubCats] = useState([]);

    const subCatsbyCat=async(id)=>{
        let res = await FetchSubCat.getByCat(id)
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
                    <div className="ps-5" key={StatesubCats[i]._id} >     
                    <a href={"#/productos/"+StatesubCats[i]._id}>
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
             {/*    <div className="p-4 w-100" >
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    Comprar
                    </button>
                </div> */}
            </>)
            return box
        }
        return <h2>carrito vacio</h2>
       
    }
    
    

    const boxsCat = () => {
        let box = [];
        for (let i = 0; i < stateCategorias.length; i++) {
            box.push(
                <li className="accordion-item " key={stateCategorias[i]._id}>

                <a href={"#/subcategorias/"+stateCategorias[i]._id} className="nav-link menuLateralCateAcordeon" id="flush-acordionOne" > {stateCategorias[i].nombre}</a>
                <i className="fas fa-plus fs-4 collapsed subCatBtn" onClick={()=>subCatsbyCat(stateCategorias[i]._id)}  data-categoria_id="laptops" data-bs-toggle="collapse" data-bs-target={"#flush-"+(stateCategorias[i].nombre).replace(" ","")} aria-controls="flush-laptops"></i>
                
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