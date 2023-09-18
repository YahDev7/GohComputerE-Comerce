import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card, Title,

} from "@tremor/react";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UserFetch } from "../../../api/users.fetch";
import DataTable from "react-data-table-component";
import { UseToggle } from "../hook/use.toggle";
import { CustomerFetch } from "../../../api/customer.fetch";
import { UseCustomer } from "./hook/use.customer";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";



const Customer = () => {
  const { iconEdit, iconDelete, iconsave,iconNew } = UseIcons()

  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const { StateModal, setStateModal, toggleModal } = UseToggle()

  const {
    customer,
    formInit,
    form,
    setform,
    handleChange,
    handleSubmit,
    getEdit,
    deletecustomer,
    loaderCustomer

  } = UseCustomer(stateTokenAdmin)

  console.log(loaderCustomer)
  let {
    nombres,
    ap_paterno,
    ap_materno,
    dni_ruc,
    email,
    password,
    departamento,
    provincia,
    distrito,
    direccion,
    telefono,
    estado } = form;



  const columns = [
    {
      name: 'Actions',
      sortable: true,
      maxWidth: '200px',
      cell: row => (
        <div className="flex max-md:flex-col pt-2">
          <button onClick={() => { toggleModal(); getEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
          <button onClick={() => deletecustomer(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
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
      selector: row => row.nombres,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },

  ];



  return (

    <div className="w-100 max-md:!w-[80%]">
      {loaderCustomer && <Loader />}
    <Card>

      <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Customers</h2>
      <button onClick={() => { setform(formInit); toggleModal() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
        <div className="flex">

          <p className="pr-2">Nuevo</p>
          <img src={iconNew} width="20px" alt="" />

        </div>
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
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                        nombres
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <input onChange={(e) => handleChange(e)}
                      value={nombres}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="nombres"
                      id="nombres"
                      type="text"
                      placeholder="nombres"
                    />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <div className="flex">

                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        ap_paterno
                      </label>
                      <span className="pl-2 text-red-700">*</span>
                    </div>
                    <input
                      value={ap_paterno}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      onChange={(e) => handleChange(e)}
                      name="ap_paterno"
                      id="ap_paterno"
                      type="text"
                      placeholder="ap_paterno"
                    />
                  </div>

                  <div className="w-full px-3">
                    <div className="flex">

                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_materno">
                        ap_materno
                      </label>
                      <span className="pl-2 text-red-700">*</span>
                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={ap_materno}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="ap_materno"
                      id="ap_materno"
                      type="text"
                      placeholder="ap_materno"
                    />

                  </div>

                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">
                        dni_ruc
                      </label>
                      <span className="pl-2 text-red-700">*</span>
                    </div>
                    <input
                      value={dni_ruc}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="dni_ruc"
                      id="dni_ruc"
                      type="text"
                      placeholder="URL del Fabricante"
                    />
                  </div>
                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="telefono">
                        telefono
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <input
                      value={telefono}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="telefono"
                      id="telefono"
                      type="text"
                      placeholder="telefono"
                    />
                  </div>


                  <input name="enterprise_id" id="enterprise_id" type="hidden" />


                </div>
                <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                  <div className="w-full px-3">
                    <div className="flex">

                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        email
                      </label>
                      <span className="pl-2 text-red-700">*</span>
                    </div>
                    <input
                      value={email}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="email"
                      id="email"
                      type="text"
                      placeholder="URL del Producto"
                    />
                  </div>
                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                        password
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <input
                      value={password}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="password"
                      id="password"
                      type="text"
                      placeholder="password"
                    />
                  </div>

                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        departamento
                      </label>

                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={departamento}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="departamento"
                      id="departamento"
                      type="text"
                      placeholder="departamento"
                    />
                  </div>

                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        provincia
                      </label>
                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={provincia}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="provincia"
                      id="provincia"
                      type="text"
                      placeholder="provincia"
                    />
                  </div>
                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        distrito
                      </label>
                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={distrito}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="distrito"
                      id="distrito"
                      type="text"
                      placeholder="distrito"
                    />
                  </div>





                  {/*         <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rol">
                        rol
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <select
                      value={rol}
                      onChange={(e) => handleChange(e)}
                      className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                      name="estado"
                      id="estado"
                    >
                      <option value="">Seleccione</option>
                      <option value="ADMIN">Admin</option>
                      <option value="COMUN">Comun</option>

                    </select>
                  </div> */}




                </div>



                <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        direccion
                      </label>
                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={direccion}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="direccion"
                      id="direccion"
                      type="text"
                      placeholder="direccion"
                    />
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

      <DataTable
        columns={columns}
        data={customer.length ? customer : []}
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
    </div>

  );
}

export default Customer;