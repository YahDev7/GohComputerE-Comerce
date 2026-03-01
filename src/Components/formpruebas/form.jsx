import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { CategoriaFetch } from "../../api/categoriaQuery.fetch";


const FormPrueba = () => {
    let fnrun=CategoriaFetch.get('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoiNjQ2M2I3YzM3ZDZlMDI5OGVlNzMzZTFlIiwibm9tYnJlIjoid2llbCIsImVudGVycHJpc2VfaWQiOiI2NDYzYjcxNzZmNjJlYWJkYzVkNzMyOWQiLCJyb2wiOiJBRE1JTiIsImlhdCI6MTY5NTkxNTg3NSwiZXhwIjoxNjk2Nzc5ODc1fQ.VbD5eZGKeqQxnu3xYhdOeQ3VEexXbjUBqaxKlGE6TIM');
    const {isLoading,data,isError,error}=useQuery({
        queryKey:['categorias'],
        queryFn:async()=>await fnrun
    })
    if(isLoading) return <div>loading......</div>
    if(isError) return <div>{error.message}</div>

    const { register, handleSubmit,
        formState:{errors}
    } = useForm();

        console.log(errors)

    const onsubmit = handleSubmit((e) => {
        console.log(e)
    })

    return (
        <>
            <div className="w-[80%] m-auto pt-5">
                <form onSubmit={onsubmit}>

                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="marca">
                                Marca
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <input
                            className="appearance-nonse block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="marca"
                            id="marca"
                            type="text"
                            placeholder="Marca"
                            {
                            ...register("marca",
                                {
                                    required: {
                                        value:true,
                                        message:"Nombre requerido"
                                    },
                                    minLength:{
                                        value:2,
                                        message:"Nombre 2 caracteres"

                                    }
                                })

                            }
                        />

                        {
                            errors.marca && <p>{errors.marca.message}</p>
                        }
                      
                    </div>

                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombre">
                                nombre
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="nombre"
                            id="nombre"
                            type="text"
                            placeholder="nombre"
                            {...register("nombre", {
                                required: true,minLength:2,
                            })}
                        />
                        {
                            errors.nombre && <p>Nombre es requerido</p>
                        }
                    </div>


                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni">
                                dni
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="dni"
                            id="dni"
                            type="text"
                            placeholder="dni"
                            {...register("dni", {
                                required: true
                            })}
                        />
                        {
                            errors.dni && <p>Nombre es dni</p>
                        }
                    </div>

                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="numero">
                                numero
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            name="numero"
                            id="numero"
                            type="text"
                            placeholder="numero"
                            {...register("numero", {
                                required: true
                            })}
                        />
                        {
                            errors.numero && <p>numero es requerido</p>
                        }
                    </div>

                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                Estado
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <select

                            className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                            name="estado"
                            id="estado"
                            {...register("estado")}
                        >
                            <option value="A">A</option>
                            <option value="D">D</option>

                            {/* Agrega más opciones aquí */}
                        </select>


                    </div>

                    <div className="w-full px-3">
                        <div className="flex">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="numero">
                                file
                            </label>
                            <span className="pl-2 ">*</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                            <input
                                {...register("foto", {
                                    required: true
                                })}
                                type="file"name="imagenes" className="relative col-start-1 col-end-4 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />

{
                            errors.foto && <p>foto es requerido</p>
                        }
                        </div>
                    </div>


                    <button type="submit" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Enviar</button>


                </form>
            </div>

        </>
    );
}

export default FormPrueba;