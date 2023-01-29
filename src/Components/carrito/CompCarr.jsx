import { useContext } from "react";
import CarrContext from "../../Context/carr";
import { UseCarr } from "./Hook/UseCarr";

const CompCarr = () => {

    const {itemsCarr, pluscarr,minuscarr,subtotal,btnremovepro,tokcarr}=useContext(CarrContext)
    const {productCarr,confirmPedido} =UseCarr(itemsCarr, pluscarr,minuscarr,btnremovepro)
    //console.log(itemsCarr);
    
    return ( 
        <div className="container pt-5">

            {productCarr().err?
            <>
                <h2>No tiene  porductos en el carrito</h2>
                <div className=" pb-2">
                    <a href="#/gohcomputer" className="btn btn-success">Continuar comprando</a>
                </div>
            </>
            : 
            <>
                <div className="carrContent row m-auto mb-4 " >
                    <div className="col-lg-12">
                        <h2 className="ps-4" >Carrito de compras</h2>
                        <button type="button" className="btn btn-danger limpiarCarr">Limpiar carrito</button>
                    </div>


                    <div className="carr m-auto mt-4 p-2 col-12 col-lg-8 mb-4 mb-lg-0" >
                        {
                        productCarr()
                        }
                    </div>

                <div className="TPagar  mt-4 col-12 col-lg-4 text-center" >
                        <div>
                            <div>Hay 0 articulos</div>
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
                            <button type="button" className="btn btn-danger" 
                                onClick={()=>confirmPedido(tokcarr,subtotal)}
                            >Comprar</button>
                        </div>
                    </div>

                </div>
                <div className=" pb-2">
                    <a href="#/gohcomputer" className="btn btn-success">Continuar comprando</a>
                </div>
            </>
            }
        </div>
     );
}
 
export default CompCarr;