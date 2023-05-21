import { useContext, useEffect, useState } from "react";
import { FetchsPedidos } from "../../../Fetchs/pedidos";
import CarrContext from "../../../Context/carr";


const AllPedidos = () => {
    const [pedidosAll, setPedidosAll] = useState([]);
    const {tokensession,tokensessionset}=useContext(CarrContext)

    if(!tokensession) return location.href='/#/gohcomputer'
    const allpedi=async()=>{
          let res= await FetchsPedidos.getallpedidos();
        console.log(res);
        setPedidosAll(res)
    }
    useEffect(() => {
        allpedi()
    }, []);


    const getpropedido = () => {
        let box=[];
        for (let i = 0; i < pedidosAll.length; i++) {
           
           box.push( 
            <tr  key={pedidosAll[i].id*Math.random()*100}>
                <td><a style={{textDecoration:"none",cursor:"pointer"}} onClick={()=>{location.href="#/detallepedido/"+pedidosAll[i].id}} >{pedidosAll[i].id}</a></td>
                <td><span class="badge rounded-pill bg-primary">{pedidosAll[i].estado}</span></td>
                <td>{pedidosAll[i].fecha}</td>
                <td>{pedidosAll[i].total}</td>
                <td>{pedidosAll[i].persona_id}</td>
            </tr>
               )
       }

       if(box.length===0) return <tr><td className="text-center" colSpan="5">Aun no tiene ningun pedido</td></tr> 
       return box
   }
    return ( 
        <>
        <div className="containerAllPedidos">
            <h2 >Todos tus pedidos</h2>
            <table className="table">
            <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Usuario</th>
                    </tr>
            </thead>
            <tbody>
                {getpropedido()}
            </tbody>
           </table>

        </div>
        </>
     );
}
 
export default AllPedidos;