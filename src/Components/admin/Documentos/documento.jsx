import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Title,
} from "@tremor/react";
import { data } from "./data/data";
import TokenAdminContext from "../../../context/tokenAdmin";
import { DocumentoFetch } from "../../../api/documento.fetch";
import DataTable from "react-data-table-component";
import { UseToggle } from "../hook/use.toggle";
import { UseDocumento } from "./hook/use.documento";
import { UseCustomer } from "../Customer/hook/use.customer";
import { UseProdAdmin } from "../Productos/Hook/use.products";
import ModalMovimiento from "../Movimientos/modal";



const Documento = () => {

  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const { StateModal, setStateModal, toggleModal } = UseToggle()

  const { documento,
    setdocumento,
    formInit,
    form,
    setform,
    getdocumento,
    handleChange,
    handleSubmit } = UseDocumento(stateTokenAdmin)


    const [StateModalCliente, setStateModalCliente] = useState(false);

    const toggleModalcliente = () => {
        if (StateModalCliente) return setStateModalCliente(false)
        if (!StateModalCliente) return setStateModalCliente(true)
      }

      const [StateModalProducto, setStateModalProducto] = useState(false);

      const toggleModalProducto = () => {
          if (StateModalProducto) return setStateModalProducto(false)
          if (!StateModalProducto) return setStateModalProducto(true)
        }


  const {
    customer,
  } = UseCustomer(stateTokenAdmin)

  const {
    prodc,
  } = UseProdAdmin(stateTokenAdmin)

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
    metodo_pago } = form;

  const columns = [
    {
      name: 'Actions',
      sortable: true,
      maxWidth: '200px',
      cell: row => (
        <div className="flex max-md:flex-col pt-2">
          <button type="button" onClick={() => { /* getproductEdit(row.idcomp)  */ }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Pagar</button>
          <button type="button" /* onClick={() => deleteProd(row.idcomp)}  */ className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Anular</button>
        </div>
      ),

    },
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
      name: 'Email',
      selector: row => row.email,
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
          <button type="button" /* onClick={() => deleteProd(row.idcomp)}  */ className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Editar</button>
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
      selector: row => row.precio,
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
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },

  ];

  const columnsProductos = [
  
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


  const handleChangeTableCustomer = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };

  const handleChangeTableProducto = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };





/*   const {formInit,
    stateMovimiento,
    setstateMovimiento,
    form,
    setform,
    getdocumento,
    handleChange,
    handleSubmit} =UseDocumento(stateTokenAdmin) */



  return (
    <div className="w-100">

      <Card>
        <Title>Documento</Title>
        <button onClick={() => { setform(formInit); toggleModal() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
          Nuevo
        </button>
        {StateModal &&

          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
            <input type="hidden" name="_id" id="_id" />
            <div className="relative bg-white rounded-lg p-2 w-[80%]">
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
                        <option value="A">Seleccione</option>
                        <option value="A">Boleta</option>
                        <option value="D">Factura</option>
                        <option value="D">Ticked</option>

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

                    <div class="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="razonSocial">DNI/RUC</label>
                      <div class="grid grid-cols-5">
                        <input type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="nombreCliente" id="nombreCliente" placeholder="" />
                        <button onClick={()=>toggleModalcliente()} class="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i class="fas fa-search"></i></button>
                      </div>

                    </div>

                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="razonSocial">
                        Razon Social
                      </label>
                      <input
               
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="razonSocial"
                        id="razonSocial"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                  </div>


                  <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="razonSocial">Producto</label>
                      <div class="grid grid-cols-5">
                        <input type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="nombreCliente" id="nombreCliente" placeholder="" />
                        <button onClick={()=>toggleModalProducto()} class="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i class="fas fa-search"></i></button>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="precio">
                        Precio
                      </label>
                      <input
                    
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="precio"
                        id="precio"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cantidad">
                        cantidad
                      </label>
                      <input
                 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="cantidad"
                        id="cantidad"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descuento">
                        descuento
                      </label>
                      <input
                  
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
                 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        name="stock"
                        id="stock"
                        type="text"
                        placeholder="Razon Social"
                      />
                    </div>

                    <div className="grid md:grid-cols-4  gap-4 -mx-3 mb-6">
                      <button type="button" className=" text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center" >Agregar</button>
                      <button type="button" className=" text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center" >Limpiar</button>

                    </div>
                  </div>



                  <div>
                    <DataTable
                      columns={columnsDetalleDoc}
                      data={[{ id: "1" }]}
                      pagination
                      selectableRows
                      striped
                  
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

                  

                  </div>







                </Card>
              </form>
            </div>
          </div>
        }

        <DataTable
          columns={columns}
          data={documento}
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



          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">
          <button onClick={() => { toggleModalcliente() }} className="left-2 right-0   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>

            <DataTable
              columns={columnsCustomer}
              data={customer}
              pagination
              selectableRows
              striped
              expandableRows
              expandableRowsHideExpander
              onSelectedRowsChange={handleChangeTableCustomer}
            />
          </div>

       </Card>

      }



{StateModalProducto &&
       <Card>



          <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">
          <button onClick={() => { toggleModalProducto() }} className="left-2 right-0   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>

            <DataTable
              columns={columnsProductos}
              data={prodc}
              pagination
              selectableRows
              striped
              expandableRows
              expandableRowsHideExpander
               onSelectedRowsChange={handleChangeTableProducto} 
            />
          </div>

       </Card>

      }
{/* 
<ModalMovimiento toggleModal={toggleModal}></ModalMovimiento>
 */}
    </div>

  );
}

export default Documento;