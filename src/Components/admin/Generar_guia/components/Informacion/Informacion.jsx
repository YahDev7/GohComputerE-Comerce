import { UseInformacion } from "./hook/use.informacion";

const InformacionGuia = ({informacion}) => {

    const { equiposelect,
        isChecked,changeInfo, Info}=informacion
        
    const { SelectImg,
        handleCheckboxChange,handleDeleteImg,
        handleImgChange,
        ImgInfo, SubmirFormImgInfo } = UseInformacion()

    const {
        tipo,
        modelo,
        comentario_cliente,
        observaciones,
        tiempo_uso,
    } = Info

    return (

        <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirFormImgInfo(e,equiposelect,Info) }}>

            <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo">
                            Tipo
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={tipo}
                        onChange={(e) => changeInfo(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="tipo"
                        id="tipo"
                        type="text"
                        placeholder="tipo"
                    />
                </div>

                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="modelo">
                            Modelo
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={modelo}
                        onChange={(e) => changeInfo(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="modelo"
                        id="modelo"
                        type="text"
                        placeholder="modelo"
                    />
                </div>

                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Comentario Cliente
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={comentario_cliente}
                        onChange={(e) => changeInfo(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="comentario_cliente"
                        id="comentario_cliente"
                        type="text"
                        placeholder="comentario_cliente"
                    />
                </div>

                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Observaciones
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={observaciones}
                        onChange={(e) => changeInfo(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="observaciones"
                        id="observaciones"
                        type="text"
                        placeholder="observaciones"
                    />
                </div>

            </div>

            <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 !text-[10px] font-bold mb-2" htmlFor="password">
                            Tiempo de uso
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={tiempo_uso}
                        onChange={(e) => changeInfo(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="tiempo_uso"
                        id="tiempo_uso"
                        type="text"
                        placeholder="tiempo_uso"
                    />
                </div>

                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                            Imagen
                        </label>

                        <span className="pl-2 ">*</span>
                        {/*                         <button onClick={(e) => handleAddImgInfo(e)} type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>
 */}                    </div>
                    <div className="flex pb-3">
                        <input onChange={(e) => handleImgChange(e)} multiple type="file" name="file" className=" relative col-start-1 col-end-4 m-0 block w-72 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />
                        {/*                                 <button type="button"  onClick={() => handleDeleteImg(i)}  className=" ml-4 h-[40px] row-start-2 row-span-2 block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>
 */}                            </div>
                    {
                       ImgInfo.length >0&& ImgInfo.map((el,i) =>
                            <div className="relative w-[100px]">
                                <button onClick={(e)=>handleDeleteImg(i)} className="absolute top-0 right-0 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 ">X</button>
                                <img src={URL.createObjectURL(el)} width="100px" alt="" />
                            </div>

                        )
                    }

                </div>

                <div className="w-full px-3 ">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                            Reparado anteriormente(Otro servicio)
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input

                        name="reparado"
                        id="reparado"
                        type="checkbox"
                        placeholder="reparado"
                        checked={isChecked}
                        onChange={(e) => handleCheckboxChange(e)}
                    />
                </div>
            </div>
            <button className=" text-white !text-[20px] w-full bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="submit">
                Guardar informacion Guia
            </button>
        </form>
    );
}

export default InformacionGuia;