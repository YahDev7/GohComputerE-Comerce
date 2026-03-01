import { Card } from "@tremor/react";
import TokenAdminContext from "../../../context/tokenAdmin";
import { useContext } from "react";
import { UseToggle } from "../hook/use.toggle";
import { UseMovimiento } from "./hook/use.movimiento";

const ModalMovimiento = ({ handleSubmitMov, handleChangeMov, toggleModalMovimiento, formMov, setformMov,handleFileChange }) => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const { formInit,
  } = UseMovimiento(stateTokenAdmin)

  //const {handleSubmitMov}= UseMovimiento(stateTokenAdmin)
  let { documento_id,

    fecha,
    tipo,
    metodo_pago,
    nro_operacion,
    monto_deposito,
    monto_pagar,
    vuelto,
    observacion,
    tipo_compra_venta,
    estado } = formMov;


  return (
    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
      <input type="hidden" name="_id" id="_id" />
      <div className="relative bg-white rounded-lg p-2 w-[80%]">
        <button onClick={() => { setformMov(formInit); toggleModalMovimiento() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>
        <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmitMov(e) }}>

          <button type="submit" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Enviar</button>

          <Card>

            <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">




              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="documento_id">Documento ID</label>
                {/* <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"

                  onChange={handleChangeMov}
                  value={documento_id}
                  name="documento_id"
                  id="documento_id"
                  type="text"
                  required
                /> */}
                <p id="documento_id" className=" pt-3">{documento_id}</p>

              </div>


              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fecha">Fecha</label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={fecha}
                  name="fecha"
                  id="fecha"
                  type="date"
                />
              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">Tipo</label>
                {/*  <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={tipo}
                  name="tipo"
                  id="tipo"
                  type="text"
                  maxLength="10"
                /> */}
                <p id="tipo" className=" pt-3">{tipo}</p>

              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="metodo_pago">Método de Pago</label>
                {/*   <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={metodo_pago}
                  name="metodo_pago"
                  id="metodo_pago"
                  type="text"
                  required
                /> */}
                <p id="metodo_pago" className=" pt-3">{metodo_pago}</p>

              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nro_operacion">Nro de Operación</label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Ingresa el número de operacion"
                  onChange={handleChangeMov}
                  value={nro_operacion}
                  name="nro_operacion"
                  id="nro_operacion"
                  type="text"
                  maxLength="100"
                />
              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="monto_deposito">Monto de Depósito</label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={monto_deposito}
                  name="monto_deposito"
                  id="monto_deposito"
                  type="number"
                />
              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="monto_pagar">Monto a Pagar</label>
                {/*  <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={monto_pagar}
                  name="monto_pagar"
                  id="monto_pagar"
                  type="number"
                  required
                /> */}
                <p id="monto_pagar" className=" pt-3">{monto_pagar}</p>

              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vuelto">Vuelto</label>
                <p id="vuelto" className=" pt-3">{vuelto || 0}</p>

                {/*   <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={vuelto}
                  name="vuelto"
                  id="vuelto"
                  type="number"
                /> */}
              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="observacion">Observación</label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Ingresa la Observacion"
                  onChange={handleChangeMov}
                  value={observacion}
                  name="observacion"
                  id="observacion"
                  type="text"
                  maxLength="40"
                />
              </div>

              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_compra_venta">Tipo de Compra/Venta</label>
                {/*  <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={tipo_compra_venta}
                  name="tipo_compra_venta"
                  id="tipo_compra_venta"
                  type="text"
                  maxLength="10"
                  required
                /> */}
                <p id="tipo_compra_venta" className=" pt-3">{tipo_compra_venta}</p>

              </div>
              <div className="w-full px-3 md:col-start-1 md:col-end-2  ">
                      <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Imagenes">
                          Constancia de Pago
                        </label>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                        <input type="file" onChange={(e) => handleFileChange(e)} name="imagenes" className="relative col-start-1 col-end-4 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />
                      </div>
                    </div>
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="estado">Estado</label>
                {/*  <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="s"
                  onChange={handleChangeMov}
                  value={estado}
                  name="estado"
                  id="estado"
                  type="text"
                  maxLength="15"
                  required
                /> */}
                <p id="estado" className=" pt-3">{estado}</p>

              </div>


            </div>






          </Card>
        </form>
      </div> *
    </div>
  )
}

export default ModalMovimiento;