import { Card } from "@tremor/react";

const ModalMovimiento = () => {



    
    return(


        <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
        <input type="hidden" name="_id" id="_id" />
        <div className="relative bg-white rounded-lg p-2 w-[80%]">
          <button onClick={() => { setform(formInit); toggleModal() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>
          <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>

            <button type="submit" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Enviar</button>

            {/* 
  cardProd === true ?{ */}
            <Card>
              {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
              <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">

             {/*     <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_documento">
                    Tipo de Documento
                  </label>
                  <input
                    onChange={handleChange}
                    value={tipo_documento}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    name="tipo_documento"
                    id="tipo_documento"
                    type="text"
                    placeholder="Tipo de Documento"
                  />
                </div>  */}


                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="documento_id">Documento ID</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"

                    onChange={handleChange}
                    value={documento_id}
                    name="documento_id"
                    id="documento_id"
                    type="text"
                    required
                  />
                </div>

               {/*  <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="enterprise_id">Enterprise ID</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={enterprise_id}
                    name="enterprise_id"
                    id="enterprise_id"
                    type="text"
                    required
                  />
                </div> */}

              {/*   <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="caja_id">Caja ID</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={caja_id}
                    name="caja_id"
                    id="caja_id"
                    type="text"
                  />
                </div> */}

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fecha">Fecha</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={fecha}
                    name="fecha"
                    id="fecha"
                    type="date"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">Tipo</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={tipo}
                    name="tipo"
                    id="tipo"
                    type="text"
                    maxLength="10"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="metodo_pago">Método de Pago</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={metodo_pago}
                    name="metodo_pago"
                    id="metodo_pago"
                    type="text"
                    required
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nro_operacion">Nro de Operación</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    value={monto_deposito}
                    name="monto_deposito"
                    id="monto_deposito"
                    type="number"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="monto_pagar">Monto a Pagar</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={monto_pagar}
                    name="monto_pagar"
                    id="monto_pagar"
                    type="number"
                    required
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="vuelto">Vuelto</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={vuelto}
                    name="vuelto"
                    id="vuelto"
                    type="number"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="observacion">Observación</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={observacion}
                    name="observacion"
                    id="observacion"
                    type="text"
                    maxLength="40"
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_compra_venta">Tipo de Compra/Venta</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={tipo_compra_venta}
                    name="tipo_compra_venta"
                    id="tipo_compra_venta"
                    type="text"
                    maxLength="10"
                    required
                  />
                </div>

                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="estado">Estado</label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    placeholder="s"
                    onChange={handleChange}
                    value={estado}
                    name="estado"
                    id="estado"
                    type="text"
                    maxLength="15"
                    required
                  />
                </div>

             {/*    <div className="col-span-2">
                  <label htmlFor="fileAdjunto">Archivo Adjunto</label>
                  <input
                    value={fileAdjunto}
                    name="fileAdjunto"
                    id="fileAdjunto"
                    type="file"
                  />
                </div> */}



              </div>






            </Card>
          </form>
        </div>
      </div>
    )
}

export default ModalMovimiento;