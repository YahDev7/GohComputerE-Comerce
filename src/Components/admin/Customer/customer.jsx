import { useContext } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import DataTable from "react-data-table-component";
import { UseToggle } from "../hook/use.toggle";
import { UseCustomer } from "./hook/use.customer";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { Card } from "@tremor/react";
import ModalCustomer from "./modal.customer";

const Customer = () => {
  const { iconEdit, iconDelete, iconsave, iconNew, iconLoad } = UseIcons()

  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const { StateModal, toggleModal } = UseToggle()

  const {
    customer,
    formInit,
    form,
    setform,
    getEdit, handleChange,
    handleSubmit,
    deletecustomer,
    loaderCustomer,
    getcustomer
  } = UseCustomer(stateTokenAdmin)

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
    {
      name: 'Tipo Doc',
      selector: row => row.tipo_doc,
      sortable: true,
    },
    {
      name: 'Dni/Ruc',
      selector: row => row.dni_ruc,
      sortable: true,
    },
  ];



  return (

    <div className="w-100 max-md:!w-[80%]">
      {loaderCustomer && <Loader />}
      <Card>

        <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Customers</h2>
        <button onClick={() => { getcustomer(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
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
        {StateModal &&
          <ModalCustomer
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setform={setform}
            formInit={formInit}
            toggleModal={toggleModal}

          />
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