import DataTable from "react-data-table-component";
import { UseSubCatAdmin } from "./hook/use.subcategoria";
import { UseToggle } from "../hook/use.toggle";
import TokenAdminContext from "../../../context/tokenAdmin";
import { useContext, useEffect, useState } from "react";
import { SubCategoriaFetch } from "../../../api/subcategoria.fetch";
import { Card } from "@tremor/react";
import { UseCatAdmin } from "../Categoria/Hooks/use.categoria"
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
const ModalSubCategoria = () => {

    const {iconEdit, iconDelete,iconsave}=UseIcons()

    const { StateModal, setStateModal, toggleModal } = UseToggle()
    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const { handleSubmit, handleChange, subcategoria,
        form, setform, formInit, getEdit,
        deleteUser,handleImagenChange,loaderSubCat } = UseSubCatAdmin(stateTokenAdmin)

    const { categoria } = UseCatAdmin(stateTokenAdmin)
    let { nombre,
        url_imagen,
        categoria_id,
        estado } = form
    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => deleteUser(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },
       
        {
            name: 'IMG',
            selector: row =>  (
                <div >
                    <img className="w-24" src={row.url_imagen} alt="" />
                   </div>
            ), 
            sortable: true,
        }, 
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        }
    ];


    return (

        <>
{loaderSubCat && <Loader/>}

            <button onClick={() => toggleModal()} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                New
            </button>
            {StateModal &&

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
                                <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                                nombre
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>
                                        <input onChange={(e) => handleChange(e)}
                                            value={nombre}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="nombre"
                                            id="nombre"
                                            type="text"
                                            placeholder="nombre"
                                        />
                                    </div>

                                    <div className="w-full px-3">
                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imagen">
                                                Imagen
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>
                                        <input type="file" onChange={(e) => handleImagenChange(e)}  name="file" className=" relative col-start-1 col-end-4 m-0 block w-72 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />

                                    </div>


                                    <div className="w-full px-3">

                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                                categoria_id
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>

                                        <select
                                              value={categoria_id} 
                                            onChange={(e) => handleChange(e)}
                                            className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                            name="categoria_id"
                                            id="categoria_id"
                                        >
                                            <option value="">Seleccione</option>

                                            {
                                                categoria.map((el) =>
                                                    <option value={el?._id}>{el?.nombre}</option>
                                                )
                                                /*   Showsubcategoria() */
                                            }
                                        </select>

                                    </div>
                                    <div className="w-full px-3">

                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                                Estado
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>

                                        <select
                                            value={estado}
                                            onChange={(e) => handleChange(e)}
                                            className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                            name="estado"
                                            id="estado"
                                        >
                                            <option value="A">A</option>
                                            <option value="D">D</option>

                                            {/* Agrega más opciones aquí */}
                                        </select>

                                    </div>


                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            }
            <div>
                <DataTable
                dense
                    columns={columns}
                    data={subcategoria}
                    pagination
                    selectableRows
                    striped
                    expandOnRowClicked
                    expandableRows
                    expandableRowsHideExpander
                />
            </div>
        </>

    );
}

export default ModalSubCategoria;