

const ModalComprobante = ({
    toggleModalComprobante, resetComprobante,
    codigoComprobante, Comprobante_one, changeComprobante, handleUpdate, CPendiente, handleRestar,
    Cpagado, Ctotal


}) => {
    const { cliente, telefono, marca, modelo,
        imei,
        estado,
        fecha,
        fecha_retiro,
        estado_recibido,
        contra_pin,
        problema,
        componentes_testeados,
        total,
        pagado,
        pendiente,
        metodo_pago,
        observaciones,
        inversion,
        tecnico } = Comprobante_one

    return (

        <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] max-h-full">


            <input type="hidden" name="_id" id="_id" />
            <div className="relative p-4 bg-white rounded-lg w-[70%] lg:top-[-10px] max-md:w-[80%] ">
                <button onClick={() => { toggleModalComprobante(); resetComprobante() }} className="absolute top-5 right-1 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-3.5 py-2.5 mr-2 mb-2">X</button>

                <div className=" mb-3  pb-3 grid grid-cols-7 border-b">
                    <h2 className="!text-3xl font-bold text-[#0C1D79] col-span-3 ">Nro Comprobante: <span className="!text-2xl text-[#19191C] font-medium ">{codigoComprobante}</span></h2>
                    <div className="flex col-span-1">
                        <p className="pl-3 mt-2 !text-[15px] text-[#19191C] font-semibold pr-2">Entrada:</p>

                        <img width="20px" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1709315286/Dashboard/fecha_azul_nshnkk.svg" alt="" />
                        <span className="pl-3 mt-2 !text-[15px] text-[#19191C] font-semibold"> {
                            new Date(fecha).toLocaleDateString('es-ES', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            }).replace(/\//g, '-')
                        }</span>

                    </div>

                    <div className="flex col-span-1">
                        <p className="pl-3 mt-2 !text-[15px] text-[#19191C] font-semibold pr-2">Salida:</p>
                        <img width="20px" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1709315286/Dashboard/fecha_azul_nshnkk.svg" alt="" />
                        <span className="  pl-3 mt-2 !text-[15px] text-[#19191C] font-semibold"> {
                            (fecha_retiro && !isNaN(new Date(fecha_retiro).getTime()))
                                ? new Date(fecha_retiro).toLocaleDateString('es-ES', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                }).replace(/\//g, '-')
                                : "-----"
                        }</span>

                    </div>
                    <div className=" pl-40  col-span-2">
                        <button /* onClick={() => } */ className=" text-white !text-[20px] bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="button">
                            Generar PDF
                        </button>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="grid md:grid-cols-5  -mx-3 mb-6">
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    CLIENTE
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={cliente}
                                disabled
                                className="appearance-none font-bold block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="cliente"
                                id="cliente"
                                type="text"
                                placeholder="cliente"
                            />
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    TELEFONO
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={telefono}
                                disabled
                                className="appearance-none font-bold block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="telefono"
                                id="telefono"
                                type="text"
                                placeholder="telefono"
                            />
                        </div>
                        <div className="w-full px-3"></div>
                        <div className="w-full px-3"></div>
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    Estado
                                </label>
                            </div>
                            {/* <label className="block uppercase tracking-wide text-blue-900 !text-3xl font-bold mb-2" htmlFor="tipo">
                                {estado}
                            </label> */}

                            {
                                (estado === "PAGADO") ?

                                <label className="block uppercase tracking-wide text-blue-900 !text-3xl font-bold mb-2" htmlFor="tipo">
                                        {estado}
                                    </label>
                                    
                                    :
                                    <select name="estado" onChange={(e) => changeComprobante(e)} id="estado" value={estado} className="appearance-none block w-full !text-[25px]  bg-gray-200 text-blue-900 font-bold border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                                        <option value="">Seleccione</option>
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="EN REPARACION">EN REPARACION</option>
                                        <option value="CONCLUIDO">TERMINADO</option>
                                        <option value="ENTREGADO">ENTREGADO</option>
                                        <option value="ENTREGADO_FALTA_CANCELAR">ENTREGADO FALTA CANCELAR</option>
                                        <option value="PAGADO">PAGADO</option>

                                    </select>

                            }

                        </div>
                    </div>


                    <div className="grid md:grid-cols-5  -mx-3 mb-6">
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    marca
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>

                            <select name="marca" onChange={(e) => changeComprobante(e)} id="marca" value={marca} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                                <option value="">Seleccione</option>
                                <option value="SAMSUNG">SAMSUNG</option>
                                <option value="APPLE">APPLE</option>
                                <option value="XIAOMI">XIAOMI</option>
                                <option value="OPPO">OPPO</option>
                                <option value="MOTOROLA">MOTOROLA</option>
                                <option value="HUAWEI">HUAWEI</option>
                                <option value="LAPTOP">LAPTOP</option>

                            </select>

                            {/*   <input
                                value={marca}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="marca"
                                id="marca"
                                type="text"
                                placeholder="marca"
                            /> */}
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    modelo
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={modelo}
                                
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none uppercase font-bold block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="modelo"
                                id="modelo"
                                type="text"
                                placeholder="modelo"
                            />
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    imei
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={imei}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="imei"
                                id="imei"
                                type="text"
                                placeholder="imei"
                            />
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    estado recibido
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={estado_recibido}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="estado_recibido"
                                id="estado_recibido"
                                type="text"
                                placeholder="estado_recibido"
                            />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    CONTRASEÑA o pin
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={contra_pin}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="contra_pin"
                                id="contra_pin"
                                type="text"
                                placeholder="contra_pin"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-5  -mx-3 mb-6">


                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    problema
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={problema}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="problema"
                                id="problema"
                                type="text"
                                placeholder="problema"
                            />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    Componentes testeados
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={componentes_testeados}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="componentes_testeados"
                                id="componentes_testeados"
                                type="text"
                                placeholder="componentes_testeados"
                            />
                        </div>
                    </div>


                    <div className="grid md:grid-cols-8  -mx-3 mb-6">
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    TOTAL
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={Ctotal}
                                onChange={(e) => handleRestar(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="total"
                                id="total"
                                type="text"
                                placeholder="total"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-8  -mx-3 mb-6">

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    PAGADO
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={Cpagado}
                                onChange={(e) => handleRestar(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="pagado"
                                id="pagado"
                                type="text"
                                placeholder="pagado"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-8  -mx-3 mb-6">

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    pendiente
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={CPendiente}
                                /*   onChange={(e) => calcular_pendiente(e)} */
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="pendiente"
                                id="pendiente"
                                type="text"
                                placeholder="pendiente"
                            />
                        </div>
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    Metodo pago
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>

                            <select name="metodo_pago" onChange={(e) => changeComprobante(e)} id="metodo_pago" value={metodo_pago} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                                <option value="">Seleccione</option>
                                <option value="EFECTIVO">EFECTIVO</option>
                                <option value="YAPE">YAPE</option>
                                <option value="PLIN">PLIN</option>
                                <option value="TARJETA">TARJETA</option>

                            </select>

                            {/*  <input
                                value={metodo_pago}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="metodo_pago"
                                id="metodo_pago"
                                type="text"
                                placeholder="metodo_pago"
                            /> */}
                        </div>
                    </div>


                    <div className=" -mx-3 mb-6 ">

                        <div className="w-full  px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    observaciones
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <textarea
                                value={observaciones}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="observaciones"
                                id="observaciones"
                                type="text"
                                placeholder="observaciones"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-10  -mx-3 mb-6">

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    inversion                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={inversion}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="inversion"
                                id="inversion"
                                type="text"
                                placeholder="inversion"
                            />
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                                    tecnico                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input
                                value={tecnico}
                                onChange={(e) => changeComprobante(e)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="tecnico"
                                id="tecnico"
                                type="text"
                                placeholder="tecnico"
                            />
                        </div>
                        {
                            estado==="PAGADO"?<p></p>:<div className="pl-20 pt-3  col-start-9">
                            <button onClick={() => handleUpdate()} className=" text-white !text-[20px] bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 text-center " type="button">
                                Guardar
                            </button>
                        </div>
                        }
                        
                    </div>

                </div>
            </div>


        </div>




    );
}

export default ModalComprobante;

