import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
    Button,
    Tab,
    TabList,
    TextInput,
    Grid,
    Col,
    Metric,
    SelectBoxItem,
    SelectBox,
} from "@tremor/react";
import { StatusOnlineIcon, UserGroupIcon, UserIcon } from "@heroicons/react/outline";


import { BaseURLAPI2 } from "../../../config/Base_URL";
import { Fetchs } from "../../../api/fetchs";
import DataTable from "react-data-table-component";
import ModalProduct from "./modal";



/* const data = [
    {
        name: "Viola Amherd",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
        status: "active",
    },
    {
        name: "Simonetta Sommaruga",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
        status: "active",
    },
    {
        name: "Alain Berset",
        Role: "Federal Councillor",
        departement: "The Federal Department of Home Affairs (FDHA)",
        status: "active",
    },
    {
        name: "Ignazio Cassis",
        Role: "Federal Councillor",
        departement: "The Federal Department of Foreign Affairs (FDFA)",
        status: "active",
    },
    {
        name: "Ueli Maurer",
        Role: "Federal Councillor",
        departement: "The Federal Department of Finance (FDF)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Karin Keller-Sutter",
        Role: "Federal Councillor",
        departement: "The Federal Department of Justice and Police (FDJP)",
        status: "active",
    },
]; */

const columns = [
    {
        name: 'ID',
        selector: row => row.idcomp,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.descomp,
        sortable: true,
    },
    {
        name: 'Precio',
        selector: row => row.descomp,
        sortable: true,
    },
];
let formInit = {
    codfabricante: '',
    codigo: '',
    descripcion: '',
    enterprise_id: '',
    usuario_id: '',
    subcategoria_id: '',
    estado: '',
    fechafinpromo: '',
    garantia: '',
    igv: 0,
    igvpromo: 0,
    imagenes: [],
    marca: '',
    nombre: '',
    palabra_clave: '',
    precio_compra_dolar: 0,
    precio_compra_dolar_igv: 0,
    precio_compra_dolar_con_IGV: 0,
    precio_compra_soles: 0,
    precio_promocompra_dolar: 0,
    precio_promocompra_dolar_igv: 0,
    precio_promocompra_dolar_con_igv: 0,
    precio_promocompra_soles: 0,
    ganancia: 0,
    ganancia_promo: 0,
    precio_promoventa: 0,
    precio_venta: 0,
    promocion: '',
    stock: 0,
    unidad: '',
    url_fab: '',
    url_pro: '',
    valor_dolar: 0,
    ventas: 0,
    especificaciones: [],
}

const Productos = () => {

    const [showCard, setShowCard] = useState(true);
    const [cardProd, setcardProd] = useState(true);
    const [form, setform] = useState(formInit)
    const [prodc, setProdc] = useState([]);
    
    const SubmirForm = (e) => console.log(form)
    
    const getprod= async()=>{
        let res= await Fetchs.get()
        console.log(res)
        setProdc(res)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
          getprod()
    }, []);
    return (

        <Card>
            <Title className="!text-4x1">Productos</Title>

           {/*   <TabList
                defaultValue="1"
                onValueChange={(value) => setShowCard(value === "1")}
                className="mt-6"
            >
                <Tab value="1" text="Lista de Productos" icon={UserGroupIcon} />
                <Tab value="2" text="Registro" icon={UserIcon} />
            </TabList>  */}

            <ModalProduct handleChange={handleChange} setcardProd={setcardProd} SubmirForm={SubmirForm} cardProd={cardProd}></ModalProduct>

            {
                showCard === true ?
                   <div>
                    <DataTable 
                    columns={columns}
                    data={prodc}
                    pagination
                    selectableRows
                    striped
                    expandOnRowClicked
                    expandableRows
                    expandableRowsHideExpander
                    />
                   </div> :

                    <div>
                     <div className="">

                            <TabList defaultValue="1" onValueChange={(value) => setcardProd(value === "3")} className="mt-6"  >
                                <Tab value="3" text="Detalle Prod" />
                                <Tab value="4" text="Precios" />
                            </TabList>

                            <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirForm(e) }}>
                                <Button type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button>

                                {cardProd === true ? <Card>
                                    <Title className="pb-3 font-bold ">Detalle Produto</Title>
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
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="subcategoria_id"
                                                id="subcategoria_id"
                                                type="text"
                                                placeholder="Subcategoria ID"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="unidad">
                                                Unidad
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="unidad"
                                                id="unidad"
                                                type="text"
                                                placeholder="Unidad"
                                            />
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
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imagenes">
                                                Imagenes
                                            </label>
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="imagenes"
                                                id="imagenes"
                                                type="text"
                                                placeholder="Imagenes"
                                            />
                                        </div>
                                        <div className="w-full px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="especificaciones">
                                                Especificaciones
                                            </label>
                                            <textarea
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="especificaciones"
                                                id="especificaciones"
                                                placeholder="Especificaciones"
                                            />
                                        </div>
                                    </div>
                                </Card> : <Card className="">
                                    <Title className="pb-3 font-bold ">Precios</Title>

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
                                            <input
                                                onChange={(e) => handleChange(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                name="estado"
                                                id="estado"
                                                type="text"
                                                placeholder="Estado"
                                            />
                                        </div>

                                    </div>
                                </Card>}






                            </form>

                        </div>

                    </div>
            }
        </Card>


    );
}

export default Productos;