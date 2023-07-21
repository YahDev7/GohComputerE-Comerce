import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchsPedidos } from "../../../api/pedidos";
import TokenContext from "../../../context/token";

const DetallePedido = () => {
   /*     const {itemsCarr} =useContext(CarritoContext);
 */    let { idpedido } = useParams();
    /*     const [inconfirm, setinconfirm] = useState(true);
     */
    const { stateToken, setStateToken } = useContext(TokenContext)
    if(!stateToken) return location.href="#/gohcomputer"

    const [propedido, setpropedido] = useState(null);
    const getallpropedido = async () => {
        let respedidos = await FetchsPedidos.getDetallepedido(idpedido, stateToken);
        setpropedido(respedidos)
    }
    /*  useEffect(() => {
        //setinconfirm(true)
    }, [inconfirm]);  */

    useEffect(() => {
        getallpropedido()
    }, []);

    const depositopedido = () => {
        location.href = "#/depositopedido/" + idpedido;
    }
  


    return (
        <>

            <div className="containerPedido pb-5">
                <h2 >Pedido {idpedido}</h2>

                <div className="pt-4 col-5">
                    <h3>Direccion de envio</h3>
                    <p className="mb-1"><strong>Departamento:</strong> {propedido?.departamento}</p>
                    <p className="mb-1"><strong>Provincia</strong> {propedido?.provincia}</p>
                    <p className="mb-1"><strong>Distrito:</strong> {propedido?.distrito} </p>
                    <p className="mb-1"><strong>Direccion</strong> {propedido?.direccion}</p>
                </div>
                <div className="pt-4 col-5">
                    <h3>Detalle del pedido</h3>
                    <p className="mb-1"><strong>Nro pedido:</strong> {idpedido}</p>
                    <p className="mb-1"><strong>Total a pagar:</strong> s/{propedido?.total_pagar ? propedido.total_pagar : "nada"} </p>
                    <p className="mb-1"><strong>Nro de cuenta a cancelar</strong> 1232134988 8328483288</p>
                </div> 



                {
                    propedido?.estado !== "PENDIENTE" ? <h3 style={{ paddingTop: "20px", fontWeight: "bold" }}>{propedido?.estado}...</h3> :
                        <button className="btn btnpedido mt-3 mb-3" onClick={() => depositopedido()}>Pagar Pedido</button>
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*   {getpropedido()} */}
                        {
                            propedido?.detalle.map((el) =>
                                <tr >
                                    <td><img width="70px" height="70px" src= {el.img} alt="" /></td>
                                    <td>{el.nombre}</td>
                                    <td>{el.total_pagar}</td>s
                                    <td>{el.unidad}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>



        </>
    );
}

export default DetallePedido;