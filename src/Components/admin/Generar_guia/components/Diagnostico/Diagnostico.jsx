import { UseDiagnostico } from "./hook/use.diagnostico";

const Diagnostico = ({ diagnostico /* diag,changeDiag,equiposelectDiag */ }) => {

    const { SubmirFormDiag, comp, handleAddcomp, handleImgChange,
        handleDeleteproblema, problema, handleCompChange,
        changeConclusiones, conclusiones, handleDeleteComp, handleAddproblema,equiposelectDiag  } = diagnostico

    return (
        <form className="w-full"  onSubmit={(e) =>{e.preventDefault(); SubmirFormDiag(e, equiposelectDiag,comp,problema,conclusiones)}}>
            <h2 className="!text-2xl text-[#0C1D79] mb-4 font-semibold">Problemas</h2>


            <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">


                <div className="w-full px-3 md:col-start-1 md:col-end-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="problemas">
                            Componentes
                        </label>
                        <button onClick={(e) => handleAddcomp(e, comp)} type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>

                    </div>
                    {comp.map((el, index) =>

                        <div className="grid grid-cols-4 gap-4 pb-2  max-md:grid-cols-1 ">
                            <input
                                value={el.nombre}
                                onChange={(e) => handleCompChange(index, 'nombre', e.target.value, comp)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="nombre"
                                id="nombre"
                                type="text"
                                placeholder="Nombre"
                            />
                            <input
                            value={el.descripcion}
                                onChange={(e) => handleCompChange(index, 'descripcion', e.target.value, comp)}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="descripcion"
                                id="descripcion"
                                type="text"
                                placeholder="Descripcion"
                            />
                            <select
                            value={el.estado}
                                onChange={(e) => handleCompChange(index, 'estado', e.target.value, comp)}
                                className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                name="estado"
                                id="estado"
                            >
                                <option value="">Estado</option>
                                <option value="A">Correcto</option>
                                <option value="R">Riesgo</option>
                                <option value="G">Grabe</option>

                            </select>
                            <button onClick={() => handleDeleteComp(index)} type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                        </div>
                    )}

                </div>

                <div className="w-full px-3">
                    <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cpncl_recomendaciones">
                            Conclusiones y recomendaciones
                        </label>
                        <span className="pl-2 ">*</span>
                    </div>
                    <input
                        value={conclusiones}
                        onChange={(e) => changeConclusiones(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="conclusiones"
                        id="conclusiones"
                        type="text"
                        placeholder="conclusiones"
                    />
                </div>
            </div>

            <div className="w-full px-3 md:col-start-1 md:col-end-3">
                <div className="flex">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="problemas">
                        Imagenes
                    </label>
                    <button onClick={() => handleAddproblema(problema)} type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>

                </div>
                {problema.map((el, index) =>

                    < div className="grid grid-cols-5 gap-4 pb-2  max-md:grid-cols-1 ">
                        <input
                            onChange={(e) => handleImgChange(index, 'problema', e.target.value, problema)}
                            value={el.problema}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="problema"
                            id="problema"
                            type="text"
                            placeholder="problema"
                        />
                        <input type="file" name="file" className=" relative m-0 block w-72 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />

                        <button onClick={() => handleDeleteproblema(index)} type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                    </div>
                )}


            </div>

            <button  className=" text-white !text-[20px] w-full bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="submit">
                Guardar Diagnostico
            </button>
        </form >

    );
}

export default Diagnostico;