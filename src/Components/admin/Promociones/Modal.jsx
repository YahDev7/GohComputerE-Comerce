import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { UseSubCatAdmin } from "../Subcategoria/hook/use.subcategoria";
import DataTable from "react-data-table-component";
import { useContext } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UsePromocionesAdmin } from "./Hook/use.promociones";
import { UseProdAdmin } from "../Productos/Hook/use.products";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { UseLoader } from "../hook/loader";

const ModalPromociones = () => {

    const { stateTokenAdmin } = useContext(TokenAdminContext)
    const {iconEdit, iconDelete,iconsave}=UseIcons()
    const {prodc} =UseProdAdmin()
    const {
        setGanancia,
        ganancia, promociones,
         setform, StateModal, form, formInit, toggleModal,   SubmirForm, handleChange,
          getpromocionesEdit, deletePromociones,loaderPromo } = UsePromocionesAdmin()

    const {
        producto_id,
        fecha_fin,
        precio_compra_dolar_promo,
        precio_compra_dolar_igv_promo,
        precio_compra_dolar_con_IGV_Promo,
        precio_compra_soles_promo,
        precio_venta_promo,
        estado,
        valor_dolar
    } = form
    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getpromocionesEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => deletePromociones(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete}  width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'Precio Venta',
            selector: row => row.precio_venta_promo,
            sortable: true,
        },
        {
            name: 'IMG',
            selector: row =>   (
                <div >
                    <img className="w-20" src={row?.imagenes[0][0]?.URL} alt="" />
                   </div>
            ), 
            sortable: true,
        }, 
        {
            name: 'Valor dolar',
            selector: row => row.valor_dolar,
            sortable: true,
        },
        {
            name: 'Fecha fin',
            selector: row => row.fecha_fin,
            sortable: true,
        },




    ];
    return (

        <>
        {loaderPromo && <Loader/>}
            <button onClick={() => { setform(formInit); toggleModal() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                New
            </button>
            {StateModal &&

                <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
                    <input type="hidden" name="_id" id="_id" />
                    <div className="relative bg-white rounded-lg p-2 w-[80%]">
                        <button onClick={() => { setform(formInit); toggleModal() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                        {/*   <TabList defaultValue="1" onValueChange={(value) => setcardProd(value === "1")} className="mt-6"  >
                            <Tab value="1" text="Detalle Prod" />
                            <Tab value="2" text="Precios" />

                        </TabList> */}
                        <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirForm(e) }}>

                            <Button type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button>


                            <Card>
                                <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">

                                    <div className="w-full px-3">
                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="producto_id">
                                                Producto ID
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>
                                        <select
                                            onChange={(e) => handleChange(e)}
                                            value={producto_id}
                                            className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                            name="producto_id"
                                            id="producto_id"
                                        >
                                            <option value="" >Seleccione</option>
                                           
                                            {
                                                prodc.map((el) =>
                                                    <option value={el?._id}>{el?.nombre}</option>
                                                )
                                            } 

                                        </select>
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

                                        {/*  <input
                                            onChange={(e) => handleChange(e)}
                                            value={form.precio_compra_dolar_igv}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            name="precio_compra_dolar_igv"
                                            id="precio_compra_dolar_igv"
                                            type="text"
                                            placeholder="Precio Compra Dolar IGV"
                                        /> */}
                                    </div>
                                    <div className="w-full px-3">
                                        <div className="flex">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_dolar_con_IGV_Promo">
                                                precio_compra_dolar_con_IGV
                                            </label>
                                            <span className="pl-2 ">*</span>
                                        </div>
                                        <p id="precio_compra_dolar_con_IGV_Promo">${precio_compra_dolar_con_IGV_Promo}</p>

                                        {/*     <input
                                                    onChange={(e) => {handleChange(e)}}
                                                    value={form.precio_compra_dolar_con_IGV}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_dolar_con_IGV"
                                                    id="precio_compra_dolar_con_IGV"
                                                    type="text"
                                                    placeholder="Precio Compra Dolar con IGV"
                                                /> * */}
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

                                        {/*   <input
                                                    onChange={(e) =>{ handleChange(e)}}
                                                    value={calcularValorTotalSoles_singanacia()}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_soles"
                                                    id="precio_compra_soles"
                                                    type="text"
                                                    placeholder="Precio Compra Soles"
                                                /> */}
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
                    data={promociones??[]}
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

export default ModalPromociones;