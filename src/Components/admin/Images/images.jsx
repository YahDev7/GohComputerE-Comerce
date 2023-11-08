import { Button, Tab, TabList, Title, Card } from "@tremor/react";

import DataTable from "react-data-table-component";



import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { UseImagesAdmin } from "./hook/use.images";
import { useContext } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";

const ImagenesAdmin = () => {
    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const { iconEdit, iconDelete, iconNew,iconLoad } = UseIcons()

    const {
        Images, getImages,loaderImage,StateModalImage  } = UseImagesAdmin()


    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '150px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button /* onClick={() => { toggleModal(); getpromocionesEdit(row._id) }}  */className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>

                  
                </div>
            ),

        },
        {
            name: 'ID_IMG',
            selector: row => row.public_id,
            sortable: true,
        },
        {
            name: 'URL',
            selector: row => row.secure_url,
            sortable: true,
        },

        {
            name: 'IMG',
            selector: row =>
        (
            <div >
                <img className="w-24" src={row.secure_url} alt="" />
            </div>
        ),
            sortable: true,
        },

       
        {
            name: 'Etiquetas',
            selector: row => row.label,
            sortable: true,
        },
       


    ];

 
    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderImage && <Loader />}
            <Card>
                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Imagenes</h2>
              <button onClick={() => { getImages(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <img src={iconLoad} width="20px" alt="" />

                    </div>
                </button>
                <button onClick={() => { setform(formInit); toggleModal() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />

                    </div>
                </button>
                {StateModalImage &&

                    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
                        <input type="hidden" name="_id" id="_id" />
                        <div className="relative bg-white rounded-lg p-2 w-[80%]">
                            <button onClick={() => { setform(formInit); toggleModal() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                     
                            <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirForm(e) }}>

                                <Button type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button>


                                <Card>
                                    <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">

                                       
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">Producto</label>
                                            <div className="grid grid-cols-5">
                                                <input value={producto_id} type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="dni_ruc" id="producto_id" placeholder="" />
                                                <button onClick={() => toggleModalProducto()} className="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i className="fas fa-search"></i></button>
                                            </div>

                                        </div>


                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    precio_compra_dolar_promo
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <input
                                                value={precio_compra_dolar_promo}
                                                onChange={(e) => { handleChange(e) }}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="precio_compra_dolar_promo"
                                                id="precio_compra_dolar_promo"
                                                type="text"
                                                placeholder="Precio Compra Dolar"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    precio_compra_dolar_igv
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <p id="precio_compra_dolar_igv_promo" className=" pt-3">${precio_compra_dolar_igv_promo}</p>

                                        </div>
                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_dolar_con_IGV_Promo">
                                                    precio_compra_dolar_con_IGV
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <p id="precio_compra_dolar_con_IGV_Promo">${precio_compra_dolar_con_IGV_Promo}</p>

                                           
                                        </div>

                                    </div>






                                    <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">



                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    precio_compra_soles_promo
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <p id="precio_compra_soles_promo" className=" pt-3">S/{precio_compra_soles_promo}</p>

                                        </div>
                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    ganancia_promo
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <input
                                                value={ganancia}
                                                onChange={(e) => { handleChange(e); setGanancia(e.target.value) }}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="ganancia_promo"
                                                id="ganancia_promo"
                                                type="text"
                                                placeholder="ganancia_promo"
                                            />
                                        </div>

                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    precio_venta_promo
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <p id="precio_venta_promo" name="precio_venta_promo"
                                                className=" pt-3">${precio_venta_promo}</p>

                                        </div>


                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
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

                                            </select>


                                        </div>

                                    </div>

                                    <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fefecha_fincha">
                                                fecha_fin
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                value={fecha_fin}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="fecha_fin"
                                                id="fecha_fin"
                                                type="date"
                                                placeholder="Fecha"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <div className="flex">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                    Valor del dolar
                                                </label>
                                                <span className="pl-2 ">*</span>
                                            </div>
                                            <input
                                                value={valor_dolar}
                                                onChange={(e) => { handleChange(e); /* setDolar(e.target.value) | */ }}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="valor_dolar"
                                                id="valor_dolar"
                                                type="number"
                                                placeholder="Valor del Dólar"
                                            />
                                        </div>
                                    </div>




                                </Card>







                            </form>
                        </div>
                    </div>
                }
                <div>
                    <DataTable
                        columns={columns}
                        data={Images.length ? Images : []}
                        pagination
                        selectableRows
                        striped
                        expandOnRowClicked
                        expandableRows
                        expandableRowsHideExpander
                    />
                </div>


              

            </Card>


        </div>

    );
}

export default ImagenesAdmin;