import { useContext, useEffect, useState } from "react";
import { FetchsPedidos } from "../../../api/pedidos";
import { useParams } from "react-router-dom"
import TokenContext from "../../../context/token";
import Plin from "../MetodoPago/Plin";
import Interbank from "../MetodoPago/INTERBANK";
import Yape from "../MetodoPago/Yape";


const Deposito = () => {
  //si el pago ya se realizo
  const [enviado, setenviado] = useState({ state: false, text: null });
  console.log(enviado)
  //total que se debe pagar
  const [statePedido, setstatePedido] = useState(null);
  //si ya se envio los datos del deposito
  //  const [depostiotrue, setdepostiotrue] = useState(null);
  const { stateToken, setStateToken } = useContext(TokenContext)
  const [metodoPago, setMetodoPago] = useState(null);
  let { idpedido } = useParams();

  const totalpagar = async () => {
    let res = await FetchsPedidos.getDetallepedido(idpedido, stateToken);
    setMetodoPago(res.metodo_pago)
    console.log(res)
    setstatePedido(res)
  }
  console.log(statePedido?.estado)

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
 {statePedido?.estado === "PENDIENTE" &&
        <div>
          <div>
            {metodoPago === "PLIN" && <Plin statePedido={statePedido} setenviado={setenviado}></Plin>}
            {metodoPago === "YAPE" && <Yape statePedido={statePedido} setenviado={setenviado} />}
            {metodoPago === "TRANSFERENCIA BCP" && <Bcp statePedido={statePedido} setenviado={setenviado} />}
            {metodoPago === "TRANSFERENCIA INTERBANK" && <Interbank statePedido={statePedido} setenviado={setenviado} />}

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

