import { useContext, useEffect, useState } from "react";
import { FetchsPedidos } from "../../../api/pedidos";
import { useParams } from "react-router-dom"
import TokenContext from "../../../context/token";
import Plin from "../MetodoPago/Plin";
import Interbank from "../MetodoPago/INTERBANK";
import Yape from "../MetodoPago/Yape";
import Bcp from "../MetodoPago/BCP";
import Loader from "../../public/Loader";


const Deposito = () => {
  //si el pago ya se realizo
  const [enviado, setenviado] = useState({ state: false, text: null });
  //total que se debe pagar
  const [statePedido, setstatePedido] = useState(null);
  //si ya se envio los datos del deposito
  //  const [depostiotrue, setdepostiotrue] = useState(null);
  const { stateToken, setStateToken } = useContext(TokenContext)
  const [metodoPago, setMetodoPago] = useState(null);
  let { idpedido } = useParams();
  const [loader, setloader] = useState(false);

  const totalpagar = async () => {
    setloader(true)
    let res = await FetchsPedidos.getDetallepedido(idpedido, stateToken);
    setMetodoPago(res.metodo_pago)
    setstatePedido(res)
    setloader(false)
  }

  /*   const confirmDeposito = async () => {
      let verifydep = await FetchsPedidos.getDetallepedido(idpedido,stateToken);
      console.log(verifydep)
      setdepostiotrue(verifydep);
    } */


  useEffect(() => {
    totalpagar();
    /*   confirmDeposito(); */
  }, [enviado]);

  return (
    <>

{loader && <Loader></Loader>}

 {statePedido?.estado === "PENDIENTE" &&
        <div>
          <div>
            {metodoPago === "PLIN" && <Plin statePedido={statePedido} setenviado={setenviado} stateToken={stateToken}></Plin>}
            {metodoPago === "YAPE" && <Yape statePedido={statePedido} setenviado={setenviado} stateToken={stateToken} />}
            {metodoPago === "TRANSFERENCIA BCP" && <Bcp statePedido={statePedido} setenviado={setenviado} stateToken={stateToken} />}
            {metodoPago === "TRANSFERENCIA INTERBANK" && <Interbank statePedido={statePedido} setenviado={setenviado} stateToken={stateToken} />}

          </div>
        </div>
      }
      {statePedido?.estado === "CONFIRMANDO" &&
        <div className="containerDepositopedido pb-5 pt-5">
          <h2>
            El pedido <strong className="text-blue-700">{enviado.data}</strong> SE ENCUENTRA EN REVISION
          </h2>

          <button className="btn !bg-blue-700 " onClick={() => location.href = "#/pedidos"}>Ir a mis pedidos</button>
        </div>

      }

      {statePedido?.estado === "CANCELADO" &&
        <div className="containerDepositopedido pb-5 pt-5">
          <h2>
            El pedido <strong className="text-blue-700">{enviado.data}</strong> SE ENCUENTRA CANCELADO
          </h2>

          <button className="btn !bg-blue-700 " onClick={() => location.href = "#/pedidos"}>Ir a mis pedidos</button>
        </div>

      }
     
    </>
  );
}

export default Deposito;

