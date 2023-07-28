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

let formInit = {
  user_id: '',
  customer_id: '',
  provider_id: '',
  caja_id: '',
  enterprise_id: '',
  tipo_documento: '',
  serie: '',
  nro_documento: '',
  fecha: '',
  sub_total: 0,
  descuento_total: 0,
  igv: 0,
  total_pagar: 0,
  estado: '',
  tipo_compra_venta: '',
  detalle: [],
  dataCustomer: [],
  metodo_pago: '',
}

const Documento = () => {

  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const { StateModal, setStateModal, toggleModal } = UseToggle()

  const [documento, setdocumento] = useState([]);
  const [form, setform] = useState(formInit)

  let { enterprise_id,
    userAdmin_id,
    nombre,
    ap_paterno,
    ap_materno,
    dni,
    email,
    password,
    rol,
    telefono,
    fecha_creacion,
    estado } = form;
  const getdocumento = async (token) => {
    let res = await DocumentoFetch.get(token)
    console.log(res)
    setdocumento(res)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites.
    console.log(form);
  };

  const columns = [
    {
      name: 'Actions',
      sortable: true,
      maxWidth: '200px',
      cell: row => (
        <div className="flex max-md:flex-col pt-2">
          <button onClick={() => { toggleModal(); /* getproductEdit(row.idcomp)  */}} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Editar</button>
          <button /* onClick={() => deleteProd(row.idcomp)}  */className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Eliminar</button>
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

  useEffect(() => {
    getdocumento(stateTokenAdmin)
  }, []);
  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);

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
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                      ap_paterno
                    </label>
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
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                        ap_paterno
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <input
                      onChange={(e) => handleChange(e)}
                      value={ap_paterno}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
                      <span className="pl-2 ">*</span>
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni">
                      dni
                    </label>
                    <input
                      value={dni}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="dni"
                      id="dni"
                      type="text"
                      placeholder="URL del Fabricante"
                    />
                  </div>
                  <input name="enterprise_id" id="enterprise_id" type="hidden" />


                </div>
                <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">

                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                      email
                    </label>
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

                      {/* Agrega más opciones aquí */}
                    </select>
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
                  <div className="w-full px-3">
                    <div className="flex">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fecha_creacion">
                        fecha_creacion
                      </label>
                      <span className="pl-2 ">*</span>
                    </div>
                    <input
                      value={fecha_creacion}
                      onChange={(e) => handleChange(e)}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      name="fecha_creacion"
                      id="fecha_creacion"
                      type="text"
                      placeholder="fecha_creacion"
                    />
                  </div>


                </div>



                <div className="grid md:grid-cols-5 gap-4 -mx-3 mb-6">
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