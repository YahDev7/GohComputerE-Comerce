import { useContext } from "react";
import { UseCarr } from "./Hook/UseCarr";
import CarritoContext from "../../context/carrito";
import TokenContext from "../../context/token";
import Loader from "../public/Loader";

const CompCarr = () => {

    const { itemsCarr, pluscarr, minuscarr, subtotal, btnremovepro, CantidadTotal, CatitadTo, loaderCarrito } = useContext(CarritoContext)
    const { stateToken } = useContext(TokenContext)


    const { productCarr, confirmPedido, idsprod } = UseCarr(itemsCarr, pluscarr, minuscarr, btnremovepro, stateToken, CantidadTotal)
    return (


        <div className="container pt-5">

            {loaderCarrito && <Loader></Loader>}

            {productCarr().err ?
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
            
{/*                             <button type="button"className="mt-4 limpiarCarr focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Limpiar carrito</button>
 */}                        </div>


                        <div className="carr m-auto mt-4 p-2 col-12 col-lg-8 mb-4 mb-lg-0" >
                            {
                                productCarr()
                            }
                        </div>

                        <div className="TPagar  mt-4 col-12 col-lg-4 text-center" >
                            <div>
                                <div className="font-semibold !text-[18px]">Hay {CatitadTo} articulos</div>
                            </div>
                            <div className="row">
                                <label className="col-6 text-start font-semibold" >Sub total</label>
                                <span className="col-6 text-end font-semibold" >S/{subtotal}</span>
                            </div>

                            <div className="row" id="idTotal">
                                <label className="col-6 text-start font-semibold">Total</label>
                                <span className="col-6 text-end font-semibold text-blue-800 !text-[18px] ">S/{subtotal}</span>
                            </div>
                            <div className="p-4 w-100" >
                                <a href={`https://wa.me/932069271?text=¡Hola! Estoy interesado en estos produtos "${idsprod}". Por favor, envíame más información`} target="_blank" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Comprar por Whatsapp</a>

                                <a href="/#/compraWeb/datosEnvio">
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    /*  onClick={() => confirmPedido(tokcarr, subtotal)} */
                                    >Comprar por Web</button>
                                </a>

                                <a href="/#/compraCorreo">
                                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    /* onClick={()=>confirmPedido(tokcarr,subtotal)}  */
                                    >Comprar por correo</button>
                                </a>
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