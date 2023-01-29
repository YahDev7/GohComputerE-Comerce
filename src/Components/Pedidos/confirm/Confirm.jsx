import { useContext, useEffect, useState } from "react";
import { Navigate, useParams} from "react-router-dom"

import CarrContext from "../../../Context/carr";
import { FetchsPedidos } from "../../../Fetchs/pedidos";

//IMPORTANTE NO ESTOY SEGURO SI DEPOSITAR TODA LA CONFIANZA EN EL SUBTOTAL PARA REDIRIGIR AL CONFIRMAR EL PEDIDO

const Confirm = () => {
/*     const {itemsCarr} =useContext(CarrContext);
 */    let {idpedido}=useParams();
/*     const [inconfirm, setinconfirm] = useState(true);
 */

    const [propedido, setpropedido] = useState([]);

    const getallpropedido=async()=>{
       let respedidos= await FetchsPedidos.getDetallepedido(idpedido);       
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
    const getpropedido = () => {
        let box=[];
        for (let i = 0; i < propedido.length; i++) {
           
           box.push( 
            <tr  key={propedido[i].id*Math.random()*100}>
                <td>imagen</td>
                <td>{propedido[i].nompro}</td>
                <td>{propedido[i].precio_unitario}</td>
                <td>{propedido[i].cantidad}</td>
                <td>{propedido[i].subtotal}</td>
            </tr>
               )
       }

       if(box.length===0) return <h2>No hay especificaciones que mostrar</h2>
       return box
   }


    return ( 
        <>
          {propedido.err
            ? 
           /*  <h2>{propedido.Text}</h2> */
             <Navigate to="/#/gohcomputer"></Navigate> 
            : 
           <div className="containerPedido pb-5">
           <h2 >Tu pedido a sido guardado con éxito</h2>
           <div className="pt-4">
               <p className="mb-2"><strong>Nro pedido:</strong> {idpedido}</p>
               <p className="mb-2"><strong>Total a pagar:</strong> s/{propedido[0]?.total?propedido[0].total:"nada"} </p>
               <p className="mb-2"><strong>Nro de cuenta a cancelar</strong> 1232134988 8328483288</p>
           </div>

           <button className="btn btnpedido mt-3 mb-3" onClick={()=>depositopedido()}>Pagar Pedido</button>

           <table className="table">
            <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Importe</th>
                    </tr>
            </thead>
            <tbody>
                {getpropedido()}
                
            </tbody>
           </table>
               </div>  
         }  
        
        
        </>
     );
}
 
export default Confirm;