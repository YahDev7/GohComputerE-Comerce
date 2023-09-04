import { useContext, useEffect, useState } from "react";
import { FetchsPedidos } from "../../../api/pedidos";
import CarritoContext from "../../../context/carr";
import TokenContext from "../../../context/token";
import Loader from "../../../Components/public/Loader";


const AllPedidos = () => {
    const [pedidosAll, setPedidosAll] = useState([]);
    //if(!tokensession) return location.href='/#/gohcomputer'
    const [loader, setloader] = useState(false);

    const { stateToken, setStateToken } = useContext(TokenContext)
    if (!stateToken) return location.href = "#/gohcomputer"

    const allpedi = async () => {
        setloader(true)
        let res = await FetchsPedidos.getallpedidosByEnterprise(stateToken);
        setPedidosAll(res)
        setloader(false)
    }
    useEffect(() => {
        allpedi()
    }, []);
    return (
        <>
            <div className="containerAllPedidos">
                <h2 >Todos tus pedidos</h2>
                {loader && <Loader></Loader>}

                <table className="table">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            {/*   <th>Usuario</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidosAll.map((el) =>
                                <tr >
                                    <td><a style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => { location.href = "#/detallepedido/" + el?._id }} >{el?._id}</a></td>
                                    <td><span className="badge rounded-pill bg-primary">{el?.estado}</span></td>
                                    <td>{el?.fecha}</td>
                                    <td className="text-blue-800 font-bold">{el?.total_pagar}</td>
                                    {/*  <td>{el.persona_id}</td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default AllPedidos;