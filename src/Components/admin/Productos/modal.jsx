import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { UseProdAdmin } from "./Hook/use.products";
import { UseSubCatAdmin } from "../Subcategoria/hook/use.subcategoria";
import DataTable from "react-data-table-component";
import { useContext } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";

const ModalProduct = () => {
    const { iconEdit, iconDelete, iconsave, iconNew } = UseIcons()

    const { stateTokenAdmin } = useContext(TokenAdminContext)
    let { subcategoria } = UseSubCatAdmin(stateTokenAdmin)

    const {
        handleImagenChange,
        setGanancia, prodc,
        handleAgregarEspecificacion, StateModal, form, toggleModal,
        handleEliminarEspecificacion,
        handleEspecificacionChange,
        SubmirForm, handleChange, getproductEdit, deleteProd, loaderProd, uploadfiles, handleAgregarImg, handleEliminarImg, imgsView, EliminarImg, resetForm, handleUnidadService, unidadServicio, formService, handleChangeService, SubmirFormService, prodAll } = UseProdAdmin()
    const {
        codfabricante,
        codigo,
        descripcion,
        enterprise_id,
        usuario_id,
        subcategoria_id,
        estado,
        garantia,
        marca,
        nombre,
        palabra_clave,
        precio_compra_dolar,
        precio_compra_dolar_con,
        precio_compra_soles,
        ganancia,
        stock,
        url_fab,
        url_pro,
        valor_dolar,
        ventas,
        especificaciones,
    } = form




    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '150px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getproductEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => deleteProd(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'NOMBRE',
            selector: row => row.nombre,
            sortable: true,
        },
        /*     {
                name: 'CAT',
                selector: row => row.nombre,
                sortable: true,
            },
            {
                name: 'SUB',
                selector: row => row.nombre,
                sortable: true,
            }, */
        {
            name: 'IMG',
            selector: row => (
                <div >
                    <img className="w-20" src={row?.imagenes[0]?.URL} alt="" />
                </div>
            ),
            sortable: true,
        },

        {
            name: 'Precio',
            selector: row => row.precio_venta,
            sortable: true,
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: 'Precio Comp',
            selector: row => row.precio_compra_soles,
            sortable: true,
        },
        {
            name: 'URL',
            selector: row => (<a href={row.url_fab}>link</a>),
            sortable: true,
        },
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true,
        },




    ];

    console.log(unidadServicio)
    return (

        <div className="w-100 max-md:!w-[80%]">

            {loaderProd && <Loader></Loader>}

            <Card>

                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Productos</h2>
                <button onClick={() => { resetForm() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />

                    </div>
                </button>
                {StateModal &&

                    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
                        <input type="hidden" name="_id" id="_id" />
                        <div className="relative bg-white rounded-lg p-2 w-[80%]">
                            <button onClick={() => { resetForm() }} className="absolute top-0 right-0 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                            {/*   <TabList defaultValue="1" onValueChange={(value) => setcardProd(value === "1")} className="mt-6"  >
                            <Tab value="1" text="Detalle Prod" />
                            <Tab value="2" text="Precios" />

                        </TabList> */}
                            <div className="grid md:grid-cols-6 gap-4 -mx-3 mb-6">
                                {unidadServicio === "UNIDAD" ? <Button form="formUnidad" type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button> : <Button form="formService" type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar Servicio</Button>}

                                <div className="w-full px-3">
                                    <div className="flex">

                                        <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" htmlFor="unidad">
                                            Unidad
                                        </label>
                                        <span className="pl-2 ">*</span>
                                    </div>
                                    <select
                                        value={unidadServicio}
                                        onChange={(e) => handleUnidadService(e)}
                                        className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-4 "
                                        name="unidad"
                                        id="unidad"
                                    >
                                        {/* <option value="" >Seleccione </option> */}
                                        <option value="UNIDAD">Unidad</option>
                                        <option value="SERVICIO">Servicio</option>
                                    </select>

                                </div>
                            </div>
                            {unidadServicio === "UNIDAD" ?

                                <form className="w-full" id="formUnidad" onSubmit={(e) => { e.preventDefault(); SubmirForm(e) }}>


                                    <Card>
                                        {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                                                        Codigo
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input onChange={(e) => handleChange(e)}
                                                    value={codigo}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="codigo"
                                                    id="codigo"
                                                    type="text"
                                                    placeholder="Codigo"
                                                />
                                            </div>
                                            <div className="w-full px-3 mb-6 md:mb-0">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codfabricante">
                                                        Codfabricante
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={codfabricante}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                    onChange={(e) => handleChange(e)}
                                                    name="codfabricante"
                                                    id="codfabricante"
                                                    type="text"
                                                    placeholder="Codfabricante"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombre">
                                                        Nombre
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    value={nombre}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="nombre"
                                                    id="nombre"
                                                    type="text"
                                                    placeholder="Nombre"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subcategoria_id">
                                                        Subcategoria ID
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <select
                                                    onChange={(e) => handleChange(e)}
                                                    value={subcategoria_id}
                                                    className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                                    name="subcategoria_id"
                                                    id="subcategoria_id"
                                                >
                                                    <option value="" >Seleccione</option>

                                                    {
                                                        subcategoria.map((el) =>
                                                            <option value={el?._id}>{el?.nombre}</option>
                                                        )
                                                        /*   Showsubcategoria() */
                                                    }

                                                </select>
                                            </div>




                                            <input name="enterprise_id" id="enterprise_id" type="hidden"
                                            />

                                        </div>
                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="url_fab">
                                                    URL del Fabricante
                                                </label>
                                                <input
                                                    value={url_fab}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="url_fab"
                                                    id="url_fab"
                                                    type="text"
                                                    placeholder="URL del Fabricante"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="url_pro">
                                                    URL del Producto
                                                </label>
                                                <input
                                                    value={url_pro}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="url_pro"
                                                    id="url_pro"
                                                    type="text"
                                                    placeholder="URL del Producto"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Stock
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={stock}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="stock"
                                                    id="stock"
                                                    type="number"
                                                    placeholder="Stock"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Descripcion">
                                                        Descripcion
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <textarea
                                                    value={descripcion}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="descripcion"
                                                    id="descripcion"
                                                    type="text"
                                                    placeholder="Descripcion"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Garantia">
                                                        Garantia
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={garantia}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="garantia"
                                                    id="garantia"
                                                    type="text"
                                                    placeholder="Garantia"
                                                />
                                            </div>



                                        </div>



                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="marca">
                                                        Marca
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={marca}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="marca"
                                                    id="marca"
                                                    type="text"
                                                    placeholder="Marca"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Palabra Clave
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={palabra_clave}
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="palabra_clave"
                                                    id="palabra_clave"
                                                    type="text"
                                                    placeholder="Palabra Clave"
                                                />
                                            </div>

                                        </div>

                                        <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3 md:col-start-1 md:col-end-2  ">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Imagenes">
                                                        Imagenes
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>

                                                {uploadfiles.length >= 1 && uploadfiles?.map((especificacion, index) =>
                                                    <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                                                        <input type="file" onChange={(e) => handleImagenChange(e)} name="imagenes" className="relative col-start-1 col-end-4 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />
                                                        <button onClick={() => handleEliminarImg(index)} type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                                                    </div>
                                                )}

                                                {imgsView.length >= 1 && imgsView?.map((imgs, index) =>
                                                    <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                                                        <img width="50px" src={imgs.URL} alt={imgs.nombre} />
                                                        <button onClick={() => EliminarImg(imgs.public_id)} type="button" className="h-11 block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center">Eliminar</button>

                                                    </div>
                                                )}

                                                <button type="button" onClick={(e) => handleAgregarImg(e)} className="col-end-5 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>





                                            </div>

                                            <div className="w-full px-3 md:col-start-2 md:col-end-4">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Especificaciones">
                                                        Especificaciones
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                {especificaciones?.map((especificacion, index) =>
                                                    <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                                                        <input
                                                            onChange={(e) => handleEspecificacionChange(index, 'Nombre', e.target.value)}
                                                            value={especificacion?.Nombre}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                            name="nombre"
                                                            id="nombre"
                                                            type="text"
                                                            placeholder="Nombre"
                                                        />
                                                        <input
                                                            onChange={(e) => handleEspecificacionChange(index, 'Descripcion', e.target.value)}
                                                            value={especificacion?.Descripcion}
                                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                            name="descripcion"
                                                            id="descripcion"
                                                            type="text"
                                                            placeholder="Descripcion"
                                                        />
                                                        <button onClick={() => handleEliminarEspecificacion(index)} type="button" className="block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                                                    </div>
                                                )}

                                                <button onClick={(e) => handleAgregarEspecificacion(e)} type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>
                                            </div>

                                        </div>
                                    </Card>
                                    <Card >

                                        {/*  <Title className="pb-3 font-bold ">Precios</Title> */}

                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Precio compra dolar">
                                                        Precio compra dolar
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={precio_compra_dolar}
                                                    onChange={(e) => { handleChange(e) }}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_dolar"
                                                    id="precio_compra_dolar"
                                                    type="text"
                                                    placeholder="Precio Compra Dolar"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor=" Precio compra Dolar IGV">
                                                        Precio compra Dolar IGV
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <p id="precio_compra_dolar_igv" className=" pt-3">${form.precio_compra_dolar_igv}</p>

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
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        PRecio compra Dolar con IGV
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <p id="precio_compra_dolar_con_IGV">${form.precio_compra_dolar_con_IGV}</p>

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

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Precio compra soles
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <p id="precio_compra_soles" className=" pt-3">S/{form.precio_compra_soles}</p>

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
                                                        Ganancia
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={ganancia}
                                                    onChange={(e) => { handleChange(e); setGanancia(e.target.value) }}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="ganancia"
                                                    id="ganancia"
                                                    type="text"
                                                    placeholder="Ganancia"
                                                />
                                            </div>


                                            <input name="usuario_id" id="usuario_id" type="hidden" />

                                        </div>



                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">


                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Precio venta
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <p id="precio_venta" name="precio_venta"
                                                    className=" pt-3">${form.precio_venta}</p>
                                                {/*    <input
                onChange={(e) => {handleChange(e)}}
                value={calcularValorTotalSoles()}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="precio_venta"
                id="precio_venta"
                type="text"
                placeholder="Precio Venta"
            /> */}
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

                                                    {/* Agrega más opciones aquí */}
                                                </select>


                                            </div>

                                        </div>



                                    </Card>



                                </form>


                                :

                                <form className="w-full" id="formService" onSubmit={(e) => { e.preventDefault(); SubmirFormService(e) }}>


                                    <Card>
                                        {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">



                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombre">
                                                        Nombre
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    onChange={(e) => handleChangeService(e)}
                                                    value={formService.nombre}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="nombre"
                                                    id="nombre"
                                                    type="text"
                                                    placeholder="Nombre"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subcategoria_id">
                                                        Subcategoria ID
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <select
                                                    onChange={(e) => handleChangeService(e)}
                                                    value={formService.subcategoria_id}
                                                    className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                                    name="subcategoria_id"
                                                    id="subcategoria_id"
                                                >
                                                    <option value="" >Seleccione</option>

                                                    {
                                                        subcategoria.map((el) =>
                                                            <option value={el?._id}>{el?.nombre}</option>
                                                        )
                                                        /*   Showsubcategoria() */
                                                    }

                                                </select>
                                            </div>

                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Stock
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={formService.stock}
                                                    onChange={(e) => handleChangeService(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="stock"
                                                    id="stock"
                                                    type="number"
                                                    placeholder="Stock"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Descripcion
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <textarea
                                                    value={formService.descripcion}
                                                    onChange={(e) => handleChangeService(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="descripcion"
                                                    id="descripcion"
                                                    type="text"
                                                    placeholder="Descripcion"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Garantia
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={formService.garantia}
                                                    onChange={(e) => handleChangeService(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="garantia"
                                                    id="garantia"
                                                    type="text"
                                                    placeholder="Garantia"
                                                />
                                            </div>



                                            <input name="enterprise_id" id="enterprise_id" type="hidden"
                                            />

                                        </div>


                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">


                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Precio venta
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <input
                                                    value={formService.precio_venta}
                                                    onChange={(e) => handleChangeService(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_venta"
                                                    id="precio_venta"
                                                    type="number"
                                                    placeholder="precio_venta"
                                                />

                                            </div>


                                            <div className="w-full px-3">
                                                <div className="flex">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                        Estado
                                                    </label>
                                                    <span className="pl-2 ">*</span>
                                                </div>
                                                <select
                                                    value={formService.estado}
                                                    onChange={(e) => handleChangeService(e)}
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

                            }




                        </div>
                    </div>
                }
                <div>
                    <DataTable
                        dense
                        columns={columns}

                        data={prodAll.length ? prodAll : []}
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

export default ModalProduct;