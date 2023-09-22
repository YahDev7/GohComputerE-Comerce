import { useContext, useEffect, useState } from "react";
import { Navigate, redirect, useParams} from "react-router-dom"

import CarritoContext from "../../../context/carr";
import { FetchsPedidos } from "../../../api/pedidos";
import TokenContext from "../../../context/token";
import CompDetallePedido from "../../Detallepedido/DetallePedido";

//IMPORTANTE NO ESTOY SEGURO SI DEPOSITAR TODA LA CONFIANZA EN EL SUBTOTAL PARA REDIRIGIR AL CONFIRMAR EL PEDIDO

const Confirm = () => {
/*     const {itemsCarr} =useContext(CarritoContext);
 */    let {idpedido}=useParams();
/*     const [inconfirm, setinconfirm] = useState(true);
 */
    const [propedido, setpropedido] = useState(null);
    const { stateToken, setStateToken } = useContext(TokenContext)

    if(!stateToken) return location.href="#/gohcomputer"
    const getallpropedido=async()=>{
       let respedidos= await FetchsPedidos.getDetallepedido(idpedido,stateToken);    
       setpropedido(respedidos)
    }
    /*  useEffect(() => {
        //setinconfirm(true)
    }, [inconfirm]);  */

    useEffect(() => {
        getallpropedido()
    }, []);

    const depositopedido=()=>{
        location.href="#/depositopedido/"+idpedido;
    }
    return ( 
        <>
        {/*   {propedido
            ? 
        
             <Navigate to="#/gohcomputer"></Navigate> 
            :  */}
           <div className="containerPedido pb-5">
           <h2 className="!text-blue-800 font-bold">Tu pedido a sido guardado con éxito</h2>
           <p style={{color:"red",fontWeight:"bold"}}>Tienes 5 horas antes que tu pedido se cancele</p>
           <div className="pt-4">
               <p className="mb-2"><strong>Nro pedido:</strong> {idpedido}</p>
               <p className="mb-2"><strong>Total a pagar:</strong > <strong className="text-blue-800">s/{propedido?propedido.total_pagar:"nada"}</strong>  </p>
{/*                <p className="mb-2"><strong>Nro de cuenta a cancelar</strong> 1232134988 8328483288</p>
 */}           </div>

           {/* <div className="flex flex-col">
            <button className="btn btnpedido !bg-blue-800 mt-3 mb-3 w-40" onClick={()=>depositopedido()}>Pagar Pedido</button>
            <label htmlFor="">Elija el Metodo de pago:</label>
            <select className="form-select" name="metodo_pago" id="">
                    <option value="">Seleccione</option>
                    <option value="deposito">Deposito</option>
                    <option value="transferencia">Transferencia</option>
                  </select>
            </div> */}
            {propedido.estado==="ANULADO"?<h3 className=" !text-red-600 pb-3 font-bold">Este pedido se encutra Anulado</h3>:
            <button className="btn btnpedido !bg-blue-800 mt-3 mb-3 w-40" onClick={()=>depositopedido()}>Pagar Pedido</button>
            }

            <h3 className=" font-bold">Detalles del Pedido</h3>
            <CompDetallePedido idpedido={idpedido} stateToken={stateToken}></CompDetallePedido>
          
               </div>  
        {/*  }   */}
        
        
        </>
     );
}
 
export default Confirm;