import { useDeposito } from "../deposito/hook/useDeposito";

const Interbank = ({ statePedido,setenviado,stateToken }) => {
  const { savedeposito } = useDeposito(statePedido,setenviado,stateToken)

  return (
    <>
        <div className="containerDepositopedido pb-5">
          <h2 className="text-blue-900 font-semibold">Datos del Pedido</h2>
          <div className="pt-4">
            <p className="mb-2"><strong>Nro pedido:</strong> {statePedido._id}</p>
            <p className="mb-2"><strong>Total a pagar:</strong> <strong className="text-blue-800">s/{statePedido?.total_pagar}</strong>   </p>
          </div>
          <p className="mb-2"><strong>Nro de  Cuenta INTERBANK :</strong> <strong className="text-blue-800">321321 3123 2131</strong></p>
          <p className="mb-2"><strong>Nro de  Cuenta INTERBANK  CCI  :</strong> <strong className="text-blue-800">321321 3123 2131</strong></p>

          <form action="" onSubmit={(e) => {
            e.preventDefault();
            savedeposito(e)
          }}
          >



            <div className="row">
              <div className="form-floating  mb-3 col-4">
                <input type="text" name="nro_operacion" className="form-control" />
                <label htmlFor="nro_operacion" className="ps-4">Nro Operacion</label>
                <strong className="errorcampo "></strong>
              </div>
              <div className="form-floating  mb-3 col-4">
                <input type="date" name="fecha_deposito" className="form-control" />
                <label htmlFor="fecha_deposito" className="ps-4">Fecha Deposito</label>
                <strong className="errorcampo "></strong>
              </div>
              <div className="form-floating  mb-3 col-4">
                <input type="text" name="monto_deposito" className="form-control" />
                <label htmlFor="monto_deposito" className="ps-4">Monto Deposito</label>
                <strong className="errorcampo "></strong>
              </div>

            </div>



            <button type="submit" className="btn !bg-blue-700 mt-3 mb-3" >Guardar</button>

          </form>
        </div>




    </>
  );
}

export default Interbank;
