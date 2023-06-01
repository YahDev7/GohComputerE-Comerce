import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { useState } from "react";

const ModalProduct = ({ handleChange, setcardProd, SubmirForm, cardProd }) => {

    const [StateModal, setStateModal] = useState(false);

    const toggleModal = () => {

        console.log(StateModal)
        if (StateModal) return setStateModal(false)
        if (!StateModal) return setStateModal(true)

    }


    return (

        <>
            <button onClick={() => toggleModal()} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                New
            </button>
            {StateModal &&

                <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
                    <div className="relative bg-white rounded-lg p-2 w-[80%]">
                        <button onClick={() => toggleModal()} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                        <TabList defaultValue="1" onValueChange={(value) => setcardProd(value === "3")} className="mt-6"  >
                            <Tab value="3" text="Detalle Prod" />
                            <Tab value="4" text="Precios" />

                        </TabList>
                        <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirForm(e) }}>

                            <Button type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button>

                            {
                                cardProd === true ? <Card>
                                    {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
                                    <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                                                Codigo
                                            </label>
                                            <input onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="codigo"
                                                id="codigo"
                                                type="text"
                                                placeholder="Codigo"
                                            />
                                        </div>
                                        <div className="w-full px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codfabricante">
                                                Codfabricante
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                onChange={(e) => handleChange(e)}
                                                name="codfabricante"
                                                id="codfabricante"
                                                type="text"
                                                placeholder="Codfabricante"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombre">
                                                Nombre
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}

                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="nombre"
                                                id="nombre"
                                                type="text"
                                                placeholder="Nombre"
                                            />
                                        </div>

                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="subcategoria_id">
                                                Subcategoria ID
                                            </label>
                                            <select
                                                onChange={(e) => handleChange(e)}
                                                className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                                name="subcategoria_id"
                                                id="subcategoria_id"
                                            >
                                                <option value="" >Seleccione</option>
                                                <option value="1">Subcategoría 1</option>
                                                <option value="2">Subcategoría 2</option>
                                                <option value="3">Subcategoría 3</option>
                                                {/* Agrega más opciones aquí */}
                                            </select>
                                        </div>

                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="unidad">
                                                Unidad
                                            </label>
                                            <select
                                                onChange={(e) => handleChange(e)}
                                                className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3 px-4 "
                                                name="unidad"
                                                id="unidad"
                                            >
                                                <option value="" >Seleccione </option>
                                                <option value="1">Unidad</option>
                                                <option value="2">Servicio</option>
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
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="url_pro"
                                                id="url_pro"
                                                type="text"
                                                placeholder="URL del Producto"
                                            />
                                        </div>

                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                                Stock
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="stock"
                                                id="stock"
                                                type="text"
                                                placeholder="Stock"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descripcion">
                                                Descripcion
                                            </label>
                                            <textarea
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="descripcion"
                                                id="descripcion"
                                                type="text"
                                                placeholder="Descripcion"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="garantia">
                                                Garantia
                                            </label>
                                            <input
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
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="marca">
                                                Marca
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="marca"
                                                id="marca"
                                                type="text"
                                                placeholder="Marca"
                                            />
                                        </div>

                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="palabra_clave">
                                                Palabra Clave
                                            </label>
                                            <input
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
                                        <div className="w-full px-3 md:col-start-1 md:col-end-2">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imagenes">
                                                Imagenes
                                            </label>
                                            <div className="grid md:grid-cols-4 gap-4 ">

                                                <input type="file" className="relative col-start-1 col-end-4 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />
                                                {/* <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div> */}
                                                <button type="button" className="col-end-5 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>
                                            </div>

                                        </div>

                                        <div className="w-full px-3 md:col-start-2 md:col-end-4">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="especificaciones">
                                                Especificaciones
                                            </label>
                                            <div className="grid grid-cols-3 gap-4">
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="nombre"
                                                    id="nombre"
                                                    type="text"
                                                    placeholder="Nombre"
                                                />
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="valor"
                                                    id="valor"
                                                    type="text"
                                                    placeholder="Valor"
                                                />
                                                <button type="button" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center ">        Agregar      </button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                    :
                                    <Card >

                                        {/*  <Title className="pb-3 font-bold ">Precios</Title> */}

                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_dolar">
                                                    Precio Compra Dolar
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_dolar"
                                                    id="precio_compra_dolar"
                                                    type="text"
                                                    placeholder="Precio Compra Dolar"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_dolar_igv">
                                                    Precio Compra Dolar IGV
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_dolar_igv"
                                                    id="precio_compra_dolar_igv"
                                                    type="text"
                                                    placeholder="Precio Compra Dolar IGV"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_dolar_con_IGV">
                                                    Precio Compra Dolar con IGV
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_dolar_con_IGV"
                                                    id="precio_compra_dolar_con_IGV"
                                                    type="text"
                                                    placeholder="Precio Compra Dolar con IGV"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_compra_soles">
                                                    Precio Compra Soles
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_compra_soles"
                                                    id="precio_compra_soles"
                                                    type="text"
                                                    placeholder="Precio Compra Soles"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ganancia">
                                                    Ganancia
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
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
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_venta">
                                                    Precio Venta
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_venta"
                                                    id="precio_venta"
                                                    type="text"
                                                    placeholder="Precio Venta"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="promocion">
                                                    Promoción
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="promocion"
                                                    id="promocion"
                                                    type="text"
                                                    placeholder="Promoción"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fechafinpromo">
                                                    Fechafinpromo
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="fechafinpromo"
                                                    id="fechafinpromo"
                                                    type="text"
                                                    placeholder="Fechafinpromo"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_promocompra_dolar">
                                                    Precio Promo Compra Dolar
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_promocompra_dolar"
                                                    id="precio_promocompra_dolar"
                                                    type="text"
                                                    placeholder="Precio Promo Compra Dolar"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_promocompra_dolar_igv">
                                                    Precio Promo Compra Dolar IGV
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_promocompra_dolar_igv"
                                                    id="precio_promocompra_dolar_igv"
                                                    type="text"
                                                    placeholder="Precio Promo Compra Dolar IGV"
                                                />
                                            </div>


                                        </div>


                                        <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_promocompra_dolar_con_igv">
                                                    Precio Promo Compra Dolar con IGV
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_promocompra_dolar_con_igv"
                                                    id="precio_promocompra_dolar_con_igv"
                                                    type="text"
                                                    placeholder="Precio Promo Compra Dolar con IGV"
                                                />
                                            </div>

                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_promocompra_soles">
                                                    Precio Promo Compra Soles
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_promocompra_soles"
                                                    id="precio_promocompra_soles"
                                                    type="text"
                                                    placeholder="Precio Promo Compra Soles"
                                                />
                                            </div>


                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ganancia_promo">
                                                    Ganancia Promo
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="ganancia_promo"
                                                    id="ganancia_promo"
                                                    type="text"
                                                    placeholder="Ganancia Promo"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio_promoventa">
                                                    Precio Promo Venta
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="precio_promoventa"
                                                    id="precio_promoventa"
                                                    type="text"
                                                    placeholder="Precio Promo Venta"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="valor_dolar">
                                                    Valor del Dólar
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="valor_dolar"
                                                    id="valor_dolar"
                                                    type="text"
                                                    placeholder="Valor del Dólar"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="igv">
                                                    IGV
                                                </label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                    name="igv"
                                                    id="igv"
                                                    type="text"
                                                    placeholder="IGV"
                                                />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="estado">
                                                    Estado
                                                </label>
                                                <select
                                                    onChange={(e) => handleChange(e)}
                                                    className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                                    name="estado"
                                                    id="estado"
                                                >
                                                    <option value="" >Seleccione</option>
                                                    <option value="A">A</option>
                                                    <option value="D">D</option>

                                                    {/* Agrega más opciones aquí */}
                                                </select>


                                            </div>

                                        </div>


                                    </Card>
                            }






                        </form>
                    </div>
                </div>
            }

        </>

    );
}

export default ModalProduct;