import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchsPedidos } from "../../../api/pedidos";

const DetallePedido = () => {
   /*     const {itemsCarr} =useContext(CarritoContext);
 */    let {idpedido}=useParams();
/*     const [inconfirm, setinconfirm] = useState(true);
 */

const [propedido, setpropedido] = useState([]);
console.log(propedido[0]?.departamento);
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
        <tr  key={Math.random()*500}>
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
       <h2 >Pedido {idpedido}</h2>
      
        <div className="pt-4 col-5">
            <h3>Direccion de envio</h3>
            <p className="mb-1"><strong>Departamento:</strong> {propedido[0]?.departamento}</p>
            <p className="mb-1"><strong>Provincia</strong> {propedido[0]?.provincia}</p>
            <p className="mb-1"><strong>Distrito:</strong> {propedido[0]?.distrito} </p>
            <p className="mb-1"><strong>Direccion</strong> {propedido[0]?.direccion}</p>
        </div>
        <div className="pt-4 col-5">
            <h3>Detalle del pedido</h3>
            <p className="mb-1"><strong>Nro pedido:</strong> {idpedido}</p>
            <p className="mb-1"><strong>Total a pagar:</strong> s/{propedido[0]?.total?propedido[0].total:"nada"} </p>
            <p className="mb-1"><strong>Nro de cuenta a cancelar</strong> 1232134988 8328483288</p>
        </div>
       
       

{
    propedido[0]?.estado_pedido !== "pendiente" ? <h3 style={{paddingTop:"20px",fontWeight:"bold"}}>{propedido[0]?.estado_pedido}...</h3> :
       <button className="btn btnpedido mt-3 mb-3" onClick={()=>depositopedido()}>Pagar Pedido</button>
}

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
 
export default DetallePedido;