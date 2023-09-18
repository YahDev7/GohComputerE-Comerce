import { useContext, useEffect, useState } from "react";
import {
  Card,
  Title,
} from "@tremor/react";
import { data } from "./data/data";
import TokenAdminContext from "../../../context/tokenAdmin";
import DataTable from "react-data-table-component";
import { UseToggle } from "../hook/use.toggle";
import { UseCompra } from "./hook/use.compra";
import { UseCustomer } from "../Customer/hook/use.customer";
import { UseProdAdmin } from "../Productos/Hook/use.products";
import ModalMovimiento from "../Movimientos/modal";
import { UseMovimiento } from "../Movimientos/hook/use.movimiento";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";

const Compra = () => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const { iconpagar,
    iconAnular, iconNew } = UseIcons()

  const {
    prodc, getprod
  } = UseProdAdmin(stateTokenAdmin)


  const { compra,
    formInit,
    form,
    setform,
    handleChange,
    handleSubmit, formCustomer, formProducto,
    importe, handle, descuento, addDetalle, detalleDoc, cantidad, removedetalle, setDetalleDoc,
    toggleModalcliente,
    toggleModalProducto,
    StateModalCliente,
    StateModalProducto,
    handleChangeTableCustomer,
    handleChangeTableProducto,
    handleSelect,
    handleSelectProduct,
    toggleModalMovimiento,
    StateModalMovimiento,
    anular,
    loaderDoc, getDetalleDoc, StateModalDetalleDoc, toggleModalDetalleDoc, detalleTable
  } = UseCompra(stateTokenAdmin, getprod)
  console.log(detalleTable)
  let {
    nombre,
    precio_venta,
    stock } = formProducto

  let { /* user_id,
      customer_id,
      provider_id,
      caja_id,
      enterprise_id, */
    tipo_documento,
    serie,
    nro_documento,
    fecha,
    sub_total,
    descuento_total,
    igv,
    total_pagar,
    estado,
    tipo_compra_venta,
    detalle,
    dataCustomer,
    metodo_pago, customer_id } = form;




  const { StateModal, setStateModal, toggleModal } = UseToggle()

  const {
    customer,
  } = UseCustomer(stateTokenAdmin)
  let {
    nombres,
    dni_ruc } = formCustomer
  const { formMov, handleChangeMov, handleSubmitMov, setformMov, loaderMov, getdocumentoCompraid } = UseMovimiento(stateTokenAdmin)







  const columns = [
    {
      name: 'Actions',
      sortable: true,
      maxWidth: '120px',
      cell: row => (<div /* className="flex max-md:flex-col pt-2" */>
        {row.estado === "CANCELADO" ? <span className="inline-flex h-6 mt-3 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Cancelado</span>
          : row.estado === "ANULADO" ? <span className="inline-flex h-6 mt-3 items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">Anulado</span>
            : <div className="flex max-md:flex-col pt-2">
              <button type="button" onClick={() => { getdocumentoCompraid(row._id); toggleModalMovimiento() }} className="mr-2 block mb-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconpagar} width="18px" alt="" /></button>
              <button type="button" onClick={() => anular(row._id)} className="block mb-3 mt-3  text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconAnular} width="18px" alt="" /></button>

            </div>
        }

      </div>
      )

    },
    {
      name: 'Detalle',
      maxWidth: '100px',
      selector: row => <button onClick={() => { getDetalleDoc(row._id); toggleModalDetalleDoc() }} className="block mb-3 mt-3  text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1694272035/Dashboard/ver-detalles_w2r9pg.svg" width="15px" alt="" /></button>,
      sortable: true,

    },

    {
      name: 'Archivo',
      maxWidth: '80px',
      selector: row => <a className="text-blue-600 font-bold hover:text-blue-400" href="">Archvivo</a>,
      sortable: true,

    },

    {
      name: 'ID',
      selector: row => row._id,
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: row => row.fecha,
      sortable: true,
      format: (row) => {
        return new Date(row.fecha).toLocaleDateString();
      }
    },
    {
      name: 'Sub Total',
      selector: row => row.sub_total,
      sortable: true,
    },
    {
      name: 'Descuento T',
      selector: row => row.descuento_total,
      sortable: true,
    },
    {
      name: 'IGV',
      selector: row => row.igv,
      sortable: true,
    },
    {
      name: 'Total',
      selector: row => <span className={`inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20`}>{row.total_pagar}</span>,

      sortable: true,
    },
    {
      name: 'Tipo',
      selector: row => <span className={`inline-flex items-center rounded-md bg-${row.tipo_compra_venta === "COMPRA" ? "yellow" : "green"}-50 px-2 py-1 text-xs font-medium text-${row.tipo_compra_venta === "COMPRA" ? "yellow" : "green"}-700 ring-1 ring-inset ring-${row.tipo_compra_venta === "COMPRA" ? "yellow" : "green"}-600/20`}>{row.tipo_compra_venta}</span>,
      sortable: true,
    },

  ];

  const columnsDetalleDoc = [
    {
      name: 'Actions',
      sortable: true,
      maxWidth: '200px',
      cell: row => (
        <div className="flex max-md:flex-col pt-2">
          <button type="button" onClick={() => removedetalle(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Quitar</button>
        </div>
      ),

    },
    {
      name: 'ID',
      selector: row => row._id,
      sortable: true,
    },
    {
      name: 'Product',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Precio unitario',
      selector: row => row.precioUnitario,
      sortable: true,
    },
    {
      name: 'Cantidad',
      selector: row => row.cantidad,
      sortable: true,
    },
    {
      name: 'Desc Unitario',
      selector: row => row.descuento,
      sortable: true,
    },
    {
      name: 'Importe',
      selector: row => row.importe,
      sortable: true,
    },

  ];

  const columnsCustomer = [
    {
      name: 'ID',
      selector: row => row._id,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombres,
      sortable: true,
    },
    {
      name: 'DNI/RUC',
      selector: row => row.dni_ruc,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },

  ];
  const columnsProductos = [

    {
      name: 'ID',
      selector: row => row._id,
      sortable: true,
    },

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
      name: 'Nombre',
      selector: row => row.nombre,
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


  ];

  const columnsDetalleDocListar = [

    {
      name: 'ID',
      selector: row => row._id,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },

    {
      name: 'IMG',
      selector: row => (
        <div >
          <img className="w-20" src={row.imagenes ? row?.imagenes[0]?.URL : row.img ? row.img : ""} alt="" />
        </div>
      ),
      sortable: true,
    },
    {
      name: 'cantidad',
      selector: row => row.cantidad || row.unidad,
      sortable: true,
    },
    {
      name: 'Descuento',
      selector: row => row.descuento,
      sortable: true,
    },
    {
      name: 'Importe',
      selector: row => row.importe || row.precio,
      sortable: true,
    },


  ];

  return (
    <div className="w-100 max-md:!w-[80%]">
      {loaderDoc && <Loader />}
      {loaderMov && <Loader />}
      {
        StateModalMovimiento &&
        <ModalMovimiento /* handleChange={handleChange}  */ setformMov={setformMov} handleSubmitMov={handleSubmitMov} handleChangeMov={handleChangeMov} formMov={formMov} toggleModalMovimiento={toggleModalMovimiento} form={form}></ModalMovimiento>
      }


      <Card>
        <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Compras</h2>

        <button onClick={() => { setform(formInit); toggleModal() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
          <div className="flex">

            <p className="pr-2">Nuevo</p>
            <img src={iconNew} width="20px" alt="" />

          </div>
        </button>
        {StateModal &&

          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full  p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
            <input type="hidden" name="_id" id="_id" />
            <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96">
              <button onClick={() => { setform(formInit); toggleModal() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>
              <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>

                <button type="submit" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Enviar</button>

                <Card>
                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_documento">
                        Tipo de Documento
                      </label>

                      <select
                        value={tipo_documento}
                        onChange={(e) => handleChange(e)}
                        className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                        name="tipo_documento"
                        id="tipo_documento"
                      >
                        <option value="">Seleccione</option>
                        <option value="Boleta">Boleta</option>
                        <option value="FACTURA">Factura</option>
                        <option value="TICKED">Ticked</option>

                      </select>

                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="serie">
                        Serie
                      </label>
                      <input
                        onChange={handleChange}
                        value={serie}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="serie"
                        id="serie"
                        type="text"
                        placeholder="Serie"
                      />
                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nro_documento">
                        Número
                      </label>
                      <input
                        onChange={handleChange}
                        value={nro_documento}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="nro_documento"
                        id="nro_documento"
                        type="text"
                        placeholder="Número de Documento"
                      />
                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fecha">
                        Fecha
                      </label>
                      <input
                        onChange={handleChange}
                        value={fecha}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="fecha"
                        id="fecha"
                        type="date" // Utilizar type="date" para campos de fecha
                        placeholder="Fecha"
                      />
                    </div>



                  </div>

                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                    {/*  <input value={customer_id} type="text" name="customer_id" id="customer_id" /> */}

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">DNI/RUC</label>
                      <div className="grid grid-cols-5">
                        <input value={dni_ruc} type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="dni_ruc" id="dni_ruc" placeholder="" />
                        <button onClick={() => toggleModalcliente()} className="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i className="fas fa-search"></i></button>
                      </div>

                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nombres">
                        Razon Social
                      </label>
                      <input
                        value={nombres}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="nombres"
                        id="nombres"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                  </div>


                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="producto">Producto</label>
                      <div className="grid grid-cols-5">
                        <input value={nombre} type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="nombre" id="nombre" placeholder="" />
                        <button onClick={() => toggleModalProducto()} className="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i className="fas fa-search"></i></button>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio">
                        Precio
                      </label>
                      <input
                        value={precio_venta}

                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="precio_venta"
                        id="precio_venta"
                        type="text"
                        placeholder="precio de venta"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cantidad">
                        cantidad
                      </label>
                      <input
                        value={cantidad}
                        onChange={(e) => handle(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="cantidad"
                        id="cantidad"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descuento">
                        descuento Unitario
                      </label>
                      <input
                        value={descuento}
                        onChange={(e) => handle(e)}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="descuento"
                        id="descuento"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="importe">
                        importe
                      </label>
                      <input
                        value={importe}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="importe"
                        id="importe"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                        stock
                      </label>
                      <input
                        value={stock}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="stock"
                        id="stock"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 h-14  mb-6 ">
                      <button onClick={(e) => addDetalle(e)} type="button" className=" text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center h-12" >Agregar</button>
                      <button onClick={(e) => setDetalleDoc([])} type="button" className=" text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center h-12" >Limpiar</button>

                    </div>
                  </div>



                  <div>
                    <DataTable
                      columns={columnsDetalleDoc}
                      data={detalleDoc.length ? detalleDoc : []}
                      pagination
                      selectableRows
                      striped
                      customStyles={{
                        table: {
                          style: {

                            /*    width:"702px",
                               
                               maxWidth: '1002px' // override the row height */
                          },
                        },
                        /*  rows: {
                           style: {
                             
                             width:"202px",
                             maxWidth: '100%' // override the row height
                           },
                         },
                         headRow:{
                           style: {
                             width:"202px",
                             maxWidth: '100%' // override the row height
                             
                           },
                         } */

                      }}
                      expandableRows
                      expandableRowsHideExpander
                    />
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sub_total">
                        Sub Total
                      </label>
                      <input
                        onChange={handleChange}
                        value={sub_total}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="sub_total"
                        id="sub_total"
                        type="number"
                        placeholder="Sub Total"
                      />
                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descuento_total">
                        Descuento Total
                      </label>
                      <input
                        onChange={handleChange}
                        value={descuento_total}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="descuento_total"
                        id="descuento_total"
                        type="number"
                        placeholder="Descuento Total"
                      />
                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="igv">
                        IGV
                      </label>
                      <input
                        onChange={handleChange}
                        value={igv}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="igv"
                        id="igv"
                        type="number"
                        placeholder="IGV"
                      />
                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="total_pagar">
                        Total a Pagar
                      </label>
                      <input
                        onChange={handleChange}
                        value={total_pagar}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="total_pagar"
                        id="total_pagar"
                        type="number"
                        placeholder="Total a Pagar"
                      />
                    </div>
                    <div className="w-full px-3">
                      <div className="flex">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                          Metodo de pago
                        </label>
                        <span className="pl-2 ">*</span>
                      </div>
                      <select
                        value={metodo_pago}
                        onChange={(e) => handleChange(e)}
                        className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                        name="metodo_pago"
                        id="metodo_pago"
                      >
                        <option value="">Seleccione</option>
                        <option value="BCP">BCP</option>
                        <option value="INTERBANK">INTERBANK</option>
                        <option value="YAPE">YAPE</option>
                        <option value="PLIN">PLIN</option>
                        {/* Agrega más opciones aquí */}
                      </select>


                    </div>


                  </div>







                </Card>
              </form>
            </div>
          </div>
        }


        <DataTable
          columns={columns}
          data={compra.length ? compra : []}
          pagination
          selectableRows
          striped
          expandOnRowClicked
          expandableRows
          expandableRowsHideExpander
        />


      </Card>

      {StateModalCliente &&
        <Card>
          <Title>Compras</Title>
          <button className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
            Nuevo
          </button>
          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">
            {/*  <button onClick={() => { toggleModalcliente() }} className="left-2 right-0   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button> */}

            <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 ">
              <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">Lista de Clientes</p>

              <button className="bg-blue-700 p-3 rounded-md text-white" onClick={handleSelect}>
                Seleccionar
                <button onClick={() => { toggleModalcliente() }} className=" top-0 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
              </button>
              <DataTable
                //title="CLIENTES"
                columns={columnsCustomer}
                data={customer.length ? customer : []}
                dense
                pagination
                selectableRows
                striped
                expandableRows
                expandableRowsHideExpander
                onSelectedRowsChange={handleChangeTableCustomer}
                customStyles={{

                  table: {
                    style: {
                      width: "100%",
                      // maxWidth:"80%"
                      // margin:"0 auto"
                    },
                  },
                  pagination: {
                    style: {
                      width: "100%",
                      //margin:"0 auto"
                    },
                  },


                }}
              />
            </div>

          </div>

        </Card>
      }
      {StateModalProducto &&
        <Card>

          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">
            {/*  <button onClick={() => { toggleModalProducto() }} className="left-2 right-0   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button> */}

            <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 ">
              <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">Lista de Productos</p>

              <button className="bg-blue-700 p-3 rounded-md text-white" onClick={handleSelectProduct}>
                Seleccionar
              </button>
              <button onClick={() => { toggleModalProducto() }} className=" top-0 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
              <DataTable
                columns={columnsProductos}
          data={prodc.length ? prodc : []}
                pagination
                selectableRows
                striped
                expandableRows
                expandableRowsHideExpander
                onSelectedRowsChange={handleChangeTableProducto}
                customStyles={{
                  table: {
                    style: {
                      width: "100%",
                      // maxWidth:"80%"
                      // margin:"0 auto"
                    },
                  },
                  pagination: {
                    style: {
                      width: "100%",
                      //margin:"0 auto"
                    },
                  },


                }}
              />
            </div>
          </div>

        </Card>
      }

      {StateModalDetalleDoc &&
        <Card>

          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">

            <div className="w-10/12 position-relative">
              <button onClick={() => { toggleModalDetalleDoc() }} className=" -top-10 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
              {/* <button className="bg-blue-700 p-3 rounded-md text-white" onClick={handleSelectProduct}>
                Seleccionar
              </button> */}
              <DataTable
                columns={columnsDetalleDocListar}
                data={[detalleTable]}
                pagination
                selectableRows
                striped
                expandableRows
                expandableRowsHideExpander
              /*    onSelectedRowsChange={handleChangeTableProducto} */
              />
            </div>
          </div>

        </Card>
      }
    </div>

  );
}

export default Compra;