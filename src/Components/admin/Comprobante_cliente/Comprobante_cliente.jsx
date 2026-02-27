import DataTable from "react-data-table-component";
import Loader from "../../public/Loader";
import { UseCustomer } from "../Customer/hook/use.customer";
import TokenAdminContext from "../../../context/tokenAdmin";
import { useContext, useState } from "react";
import { UseToggle } from "../hook/use.toggle";
import { UseIcons } from "../hook/icons";
import ModalCustomer from "../Customer/modal.customer";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { UseComprobanteAdmin } from "./Hooks/use.comprobante";
import ModalComprobante from "./Modal.comprobante";

const ComprobanteCliente = () => {
    const { StateModal, toggleModal } = UseToggle()
    const { iconEdit, iconDelete, iconDetalle, iconLoad } = UseIcons()
    const [activeTab, setActiveTab] = useState("1");

    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const {
        deleteComprobante, Comprobante_one, changeComprobante, handleUpdate,campoPendiente,handleTotalPagado,

        customer_now, addEquipo, deleteEquipo,
        getComprobante,
        handleChangeTableCustomerComprobante,
        generarComprobante, Comprobante, toggleModalComprobante, resetComprobante,
        ModalComprobanteDetalle, getEditComprobante, ListEquipos, codigoComprobante
    } = UseComprobanteAdmin(stateTokenAdmin)


    const {
        customer,
        formInit,
        setform,
        loaderCustomer,
        deletecustomer, handleChange,
        form,
        handleSubmit,
        getEdit,
    } = UseCustomer(stateTokenAdmin)

    const columnsCustomers = [
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">actions</div>,
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => deletecustomer(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        /*   {
              name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">id</div>,
              selector: row => row._id,
              sortable: true,
          }, */
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">nombres</div>,
            selector: row => row.nombres,
            sortable: true,
        },

        /*       {
                  name: 'Tipo Doc',
                  selector: row => <span className={`inline-flex items-center rounded-md bg-[#558dff] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-600/20`}>{row.tipo_doc}</span>,
                  sortable: true,
              },
              {
                  name: 'Dni/Ruc',
                  selector: row => row.dni_ruc,
                  sortable: true,
              }, */

        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">Telefono</div>,
            selector: row => <span className={`
             inline-flex  items-center  rounded-md bg-[#9FC5E8] px-2 py-2 !text-[14px] font-bold text-[#0C1D79]  ring-inset ring-600/20`
            }>{row.telefono}</span>,
            sortable: true,
        },
    ];

    const columnsComprobantes = [
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">actions</div>,
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModalComprobante(); getEditComprobante(row._id); }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDetalle} width="15px" alt="" /></button>
                    <button onClick={() => deleteComprobante(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">Comprobante</div>,
            selector: row => row._id,
            sortable: true,
        },
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">Cliente</div>,
            selector: row => row.cliente,
            sortable: true,
        },

        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">Equipo</div>,
            selector: row => row.modelo,
            sortable: true,
        },

        /* {
            name: 'Dni/Ruc',
            selector: row => row.dni_ruc,
            sortable: true,
        }, */


        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">telefono</div>,
            selector: row => <span className={`
             inline-flex  items-center  rounded-md bg-[#9FC5E8] px-2 py-2 !text-[14px] font-semibold text-[#0C1D79]  ring-inset ring-600/20`
            }>{row.telefono}</span>,
            sortable: true,
        },
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">fecha</div>,
            selector: row => row.fecha,
            sortable: true,
            format: (row) => {
                return <span className={`
             inline-flex  items-center  rounded-md bg-gray-800 px-2 py-2 !text-[13px]  text-white  ring-inset ring-600/20`
                }>{new Date(row.fecha).toLocaleDateString()}</span>
            }
        },
        {
            name: <div className="font-bold uppercase text-[#0C1D79]  !text-2xl">estado</div>,
            selector: row =>
                <span className={`
             inline-flex  items-center  rounded-md bg-[#9FC5E8] px-2 py-2 !text-[12px] font-bold text-white  ring-inset ring-600/20`
                }>{row.estado}</span>,
            sortable: true,
        },




    ];

    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderCustomer && <Loader />}
            {/*   {loaderComprobante && <Loader />} */}

            <div className="flex items-center  ">
                <div className=" p-5 pb-4">
                    <h2 className="!text-5xl font-medium text-[#0C1D79] ">Comprobante Cliente</h2>
                </div>
                <div className=" pl-16  ">
                    <button onClick={() => generarComprobante()} className=" text-white mt-4 !text-[20px] bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="button">
                        Generar comprobante
                    </button>
                </div>
            </div>

            <Tabs value={1} className="">
                <div className="w-[100px] ml-10 pl-4">

                    <TabsHeader className="w-[100px] rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-[#0C1D79] shadow-none rounded-none",
                        }}>
                        <Tab
                            key={1}
                            value={1}
                            onClick={() => setActiveTab("1")}
                            className={activeTab === "1" ? "text-[#0C1D79] font-bold" : ""}
                        >
                            Clientes
                        </Tab>

                        <Tab
                            key={2}
                            value={2}
                            onClick={() => setActiveTab("2")}
                            className={activeTab === "2" ? "text-[#0C1D79] font-bold" : ""}
                        >
                            Comprobantes
                        </Tab>

                    </TabsHeader>
                </div>

                <TabsBody>
                    <TabPanel key={1} value={1}>
                        <div className="ml-6">
                            <button onClick={() => { setform(formInit); toggleModal() }} className=" mb-4 !text-[18px] text-[#0C1D79] !font-bold bg-white border-3 border-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-sm px-8 py-3.5 text-center " type="button">
                                Nuevo cliente
                            </button>
                            {/*  <h2 className="pt-5 pb-5 text-[#0C1D79]  !text-4xl font-bold">Clientes</h2> */}
                            <DataTable
                                columns={columnsCustomers}
                                data={customer.length ? customer : []}
                                pagination
                                selectableRows
                                striped
                                subHeaderComponent={<><div> <h2 className="!text-5xl font-medium text-[#0C1D79] ">Comprobante Cliente</h2></div></>}
                                fixedHeader
                                onSelectedRowsChange={handleChangeTableCustomerComprobante}

                            />
                        </div>
                    </TabPanel >


                    <TabPanel key={2} value={2}>
                        <div className="ml-10">

                            <div className="flex mb-4">
                                {/*       <button onClick={() => generarComprobante()}   className=" mb-4 !text-[18px] text-[#0C1D79] !font-bold bg-white border-3 border-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-sm px-8  py-2.5 text-center" type="button">
                                        <div className="flex items-center">
                                            <h4 className="font-semibold !text-2xl mr-3">Cargar</h4>{ <img width="30px" src={iconLoad} alt="" /> }
                                        </div>
                                    </button> */}
                                <button onClick={() => getComprobante(stateTokenAdmin)} className=" ml-3 rounded-[10px] bg-[#0C1D79] p-2">
                                    <div className="flex">
                                        <h4 className="!text-2xl text-white">Actualizar</h4>
                                        <img width="30px" src={iconLoad} alt="" />
                                    </div>
                                </button>
                            </div>
                            <DataTable
                                columns={columnsComprobantes}
                                data={Comprobante.length ? Comprobante : []}
                                pagination
                                selectableRows
                                striped
                            />
                        </div>
                    </TabPanel >
                </TabsBody>
            </Tabs>

            {ModalComprobanteDetalle &&
                <ModalComprobante
                    /* deleteEquipo={deleteEquipo}
                    stateTokenAdmin={stateTokenAdmin}
                    addEquipo={addEquipo}
                    customer_now={customer_now}
                    Loader={Loader}
                    ListEquipos={ListEquipos} */

                    codigoComprobante={codigoComprobante}
                    campoPendiente={campoPendiente}
                    handleTotalPagado={handleTotalPagado}
                    
                    Comprobante_one={Comprobante_one}
                    changeComprobante={changeComprobante}
                    handleUpdate={handleUpdate}
                    toggleModalComprobante={toggleModalComprobante}
                    resetComprobante={resetComprobante} />
            }


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
        </div>
    );
}

export default ComprobanteCliente;