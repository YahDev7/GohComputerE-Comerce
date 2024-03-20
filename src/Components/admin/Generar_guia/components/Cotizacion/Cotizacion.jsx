
const Cotizacion = ({cotizacion}) => {

    const {
        getCotiByEquipo,
        changeNota,
        handleAddpro_ser_necesarios,
        handlepro_ser_necesariosChange,
        handleDeletepro_ser_necesarios,
        handleAddpro_ser_recomendados,
        handleProServRecomendadosChange,
        handleDeletepro_ser_recomendados,
        SubmirFormCoti,
        pro_ser_necesarios,
        pro_ser_recomendados,
        nota,
        equiposelectCotizacion
    }=cotizacion
    return (

        <form className="w-full"  onSubmit={(e) => { e.preventDefault(); SubmirFormCoti(e,equiposelectCotizacion,pro_ser_necesarios,pro_ser_recomendados,nota) }} >
            <h2 className="!text-2xl text-[#0C1D79] mb-4 font-semibold">Productos/Servicios</h2>


            <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">


                <div className="w-full px-3 md:col-start-1 md:col-end-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="problemas">
                            Producto/servicio NECESARIO
                        </label>
                        <span className="pl-2 ">*</span>
                    <button  onClick={(e) => handleAddpro_ser_necesarios(pro_ser_necesarios)} type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>

                    </div>

                    {
                        pro_ser_necesarios?.map((el,index)=>
                        <div className="grid grid-cols-4 gap-4 pb-2  max-md:grid-cols-1 ">
                        <input
                            onChange={(e) => handlepro_ser_necesariosChange(index, 'nombre', e.target.value,pro_ser_necesarios)}
                            value={el?.nombre}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="nombre"
                            id="nombre"
                            type="text"
                            placeholder="Mantenimineto"
                        />
                        <input
                         onChange={(e) => handlepro_ser_necesariosChange(index, 'cantidad', e.target.value,pro_ser_necesarios)}
                         value={el?.cantidad}                                                            /*   value={especificacion?.Descripcion} */
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="cantidad"
                            id="cantidad"
                            type="text"
                            placeholder="1"
                        />
                        <input
                            onChange={(e) => handlepro_ser_necesariosChange(index, 'precio', e.target.value,pro_ser_necesarios)}
                            value={el?.precio}  
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="precio"
                            id="precio"
                            type="text"
                            placeholder="40"
                        />
                        <button  onClick={() => handleDeletepro_ser_necesarios(index)}  type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                    </div>)
                    }

                </div>
                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="concl_recomendaciones">
                            Nota                                                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        onChange={(e) => changeNota(e)}
                        value={nota}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="concl_recomendaciones"
                        id="concl_recomendaciones"
                        type="text"
                        placeholder="Garantia de .."
                    />
                </div>

                <div className="w-full px-3 md:col-start-1 md:col-end-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="problemas">
                            Producto/servicio RECOMENDADO
                        </label>
                        <span className="pl-2 ">*</span>
                    <button  onClick={(e) => handleAddpro_ser_recomendados(pro_ser_recomendados)}  type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>
                    </div>

                  {pro_ser_recomendados?.map((el,index)=>
                    <div className="grid grid-cols-4 gap-4 pb-2  max-md:grid-cols-1 ">
                    <input
                      onChange={(e) => handleProServRecomendadosChange(index, 'nombre', e.target.value,pro_ser_recomendados)}
                        value={el?.nombre}                                                          /*  value={especificacion?.Nombre} */
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="nombre"
                        id="nombre"
                        type="text"
                        placeholder="Mantenimineto"
                    />
                    <input
                        onChange={(e) => handleProServRecomendadosChange(index, 'cantidad', e.target.value,pro_ser_recomendados)}
                     value={el?.cantidad}                                                              /*   value={especificacion?.Descripcion} */
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="cantidad"
                        id="cantidad"
                        type="text"
                        placeholder="1"
                    />
                    <input
                         onChange={(e) => handleProServRecomendadosChange(index, 'precio', e.target.value,pro_ser_recomendados)}
                        value={el?.precio} 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="precio"
                        id="precio"
                        type="text"
                        placeholder="40"
                    />
                    <button  onClick={() => handleDeletepro_ser_recomendados(index)}   type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                </div>
)}
                </div>





            </div>

            <button className=" text-white !text-[20px] w-full bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="submit">
                Guardar Cotizacion
            </button>
        </form>
    );
}

export default Cotizacion;