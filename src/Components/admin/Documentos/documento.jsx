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
          <button type="button" onClick={() => { toggleModal(); /* getproductEdit(row.idcomp)  */ }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Editar</button>
          <button type="button" /* onClick={() => deleteProd(row.idcomp)}  */ className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Eliminar</button>
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


  const handleChangeTable = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };


  return (
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

              {/* 
    cardProd === true ?{ */}
              <Card>
                {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
                <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
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

                      {/* Agrega más opciones aquí */}
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
                      Número{/*  de Documento */}
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
                <div>
                <DataTable
                    columns={columnsDetalleDoc}
                    data={[{id:"1"}]}
                    pagination
                    selectableRows
                    striped
                  /*   onSelectedRowsChange={handleChangeTable} */
                  /*   expandOnRowClicked */
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

                  {/*    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="estado">
                      Estado
                    </label>
                    <input
                      onChange={handleChange}
                      value={estado}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="estado"
                      id="estado"
                      type="text"
                      placeholder="Estado"
                    />
                  </div> */}

            {/*       <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_compra_venta">
                      Tipo de Compra/Venta
                    </label>
                    <input
                      onChange={handleChange}
                      value={tipo_compra_venta}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="tipo_compra_venta"
                      id="tipo_compra_venta"
                      type="text"
                      placeholder="Tipo de Compra/Venta"
                    />
                  </div> */}

              {/*     <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="detalle">
                      Detalle
                    </label>
                    <input
                      onChange={handleChange}
                      value={detalle}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="detalle"
                      id="detalle"
                      type="text"
                      placeholder="Detalle"
                    />
                  </div> */}

        {/*           <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="metodo_pago">
                      Método de Pago
                    </label>


                    <select
                      value={metodo_pago}
                      onChange={(e) => handleChange(e)}
                      className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                      name="metodo_pago"
                      id="metodo_pago"
                    >
                      <option value="">Seleccione</option>
                      <option value="YAPE">YAPE</option>
                      <option value="PLIN">PLIN</option>
                      <option value="INTERBANK">TRANS. INTERBANK</option>
                      <option value="BCP">TRANS. BCP</option>

                    </select>



                  </div> */}
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

      {/*  <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {columns.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </Card>


  );
}

export default Documento;