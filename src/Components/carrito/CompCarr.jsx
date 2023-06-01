import { useContext } from "react";
import CarrContext from "../../context/carr";
import { UseCarr } from "./Hook/UseCarr";

const CompCarr = () => {

    const {itemsCarr, pluscarr,minuscarr,subtotal,btnremovepro,tokcarr,tokensession}=useContext(CarrContext)
    const {productCarr,confirmPedido} =UseCarr(itemsCarr, pluscarr,minuscarr,btnremovepro,tokensession)
    //console.log(itemsCarr);
    
    return ( 
        <div className="container pt-5">

            {productCarr().err?
            <>
                <h2 className="mb-5 text-3xl font-bold">No tiene  porductos en el carrito</h2>
                <div className=" pb-2">
                    <a href="#/gohcomputer" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continuar comprando</a>
                </div>
            </>
            : 
            <>
                <div className="carrContent row m-auto mb-4 " >
                    <div className="col-lg-12">
                        <h2 className=" !text-4xl font-extrabold text-[#2F466E]" >Carrito de compras</h2>
                        <button type="button" className="mt-4 limpiarCarr focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Limpiar carrito</button>
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
                            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" 
                                onClick={()=>confirmPedido(tokcarr,subtotal)}
                            >Comprar</button>
                        </div>
                    </div>

                </div>
                <div className=" mb-7">
                    <a href="#/gohcomputer" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continuar comprando</a>
                </div>
            </>
            }
        </div>
     );
}
 
export default CompCarr;