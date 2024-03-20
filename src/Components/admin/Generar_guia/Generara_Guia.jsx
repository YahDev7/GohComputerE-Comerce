import DataTable from "react-data-table-component";
import Loader from "../../public/Loader";
import { UseCustomer } from "../Customer/hook/use.customer";
import TokenAdminContext from "../../../context/tokenAdmin";
import { useContext, useState } from "react";
import { UseToggle } from "../hook/use.toggle";
import { UseIcons } from "../hook/icons";
import ModalGuia from "./Modal.guia";
import ModalCustomer from "../Customer/modal.customer";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { UseGuiaAdmin } from "./Hooks/use.guia";
import { UseInformacion } from "./components/Informacion/hook/use.informacion";
import { UseDiagnostico } from "./components/Diagnostico/hook/use.diagnostico";
import { UseCotizacion } from "./components/Cotizacion/hooks/use.cotizacion";
import { UsePruebasfinales } from "./components/Pruebas_finales/hook/use.pruebasfinales";

const GenerarGuia = () => {
    const { StateModal, toggleModal } = UseToggle()
    const { iconEdit, iconDelete, iconDetalle,iconLoad } = UseIcons()
    const [activeTab, setActiveTab] = useState("1");

    const { getinfoByEquipo, changeInfo, equiposelect,
        Info, isChecked, handleCheckboxChange, loaderInfo
    } = UseInformacion()

    const {
        loaderPruebas, pruebas,
        conclusionesPrueba,
        equiposelectPruebas,
        getPruebasByEquipo,
        changeConclusionesPrueba,
        handleAddpruebas,
        handlePruebasChange,
        handleDeletePrueba,
        SubmirFormPruebas } = UsePruebasfinales()

    const {
        loaderCoti,
        getCotiByEquipo,
        changeNota,
        handleAddpro_ser_necesarios,
        handlepro_ser_necesariosChange,
        handleDeletepro_ser_necesarios,
        handleAddpro_ser_recomendados,
        handleProServRecomendadosChange,
        handleDeletepro_ser_recomendados,
        SubmirFormCoti,
        pro_ser_necesarios,
        pro_ser_recomendados,
        nota,
        equiposelectCotizacion
    } = UseCotizacion()

    const { loaderDiag,
        SubmirFormDiag, equiposelectDiag, changeConclusiones, conclusiones,
        handleDeleteComp, comp, handleAddcomp, handleDeleteproblema, problema, handleAddproblema, handleCompChange,
        handleImgChange, getDiagByEquipo
    } = UseDiagnostico()

    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const {
        deleteGuia,
        customer_now,addEquipo,deleteEquipo,
        getguia,loaderGuia,
        handleChangeTableCustomerGuia,
        generarGuia, guia, toggleModalGuia, resetGuia,
        ModalGuiaDetalle, getEditGuia, ListEquipos, codigoGuia
    } = UseGuiaAdmin(stateTokenAdmin, getinfoByEquipo, getDiagByEquipo, getCotiByEquipo, getPruebasByEquipo)



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
            name: 'Tipo Doc',
            selector: row => <span className={`inline-flex items-center rounded-md bg-[#558dff] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-600/20`}>{row.tipo_doc}</span>,
            sortable: true,
        },
        {
            name: 'Dni/Ruc',
            selector: row => row.dni_ruc,
            sortable: true,
        },

        {
            name: 'Telefono',
            selector: row => row.telefono,
            sortable: true,
        },
    ];

    const columnsGuias = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModalGuia(); getEditGuia(row._id); }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDetalle} width="15px" alt="" /></button>
                    <button  onClick={() => deleteGuia(row._id)}  className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
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
            selector: row => row.cliente,
            sortable: true,
        },

        {
            name: 'Dni/Ruc',
            selector: row => row.dni_ruc,
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
            name: 'Telefono',
            selector: row => row.telefono,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: row =>
                <span className={`
             inline-flex  items-center rounded-md bg-[#558dff] px-2 py-1 !text-[11px] font-medium text-white ring-1 ring-inset ring-600/20`
                }>{row.estado}</span>,
            sortable: true,
        },




    ];

    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderCustomer && <Loader />}
            {loaderGuia && <Loader />}
            
            <div className="flex items-center  ">
                <div className=" p-5 pb-4">
                    <h2 className="!text-5xl font-medium text-[#0C1D79] ">Guia de servicio</h2>
                    <div className="flex pt-4">
                        <img width="20px" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1709315286/Dashboard/fecha_azul_nshnkk.svg" alt="" />
                        <span className="pl-4 !text-[16px] text-[#19191C] font-semibold"> {new Date().toLocaleDateString("es-ES", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>

                    </div>
                </div>
                <div className=" pl-16  ">
                    <button onClick={() => generarGuia()} className=" text-white !text-[20px] bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-3.5 text-center " type="button">
                        Generar Guia
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
                            Guias
                        </Tab>

                    </TabsHeader>
                </div>

                <TabsBody>
                    <TabPanel key={1} value={1}>
                        <div className="ml-10">
                            <button onClick={() => { setform(formInit); toggleModal() }} className="  !text-[18px] text-[#0C1D79] !font-bold bg-white border-3 border-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-sm px-8 py-3.5 text-center " type="button">
                                Nuevo cliente
                            </button>
                            <h2 className="pt-5 text-[#0C1D79]  !text-4xl font-medium">Clientes</h2>
                            <DataTable
                                columns={columnsCustomers}
                                data={customer.length ? customer : []}
                                pagination
                                selectableRows
                                striped
                                onSelectedRowsChange={handleChangeTableCustomerGuia}

                            />
                        </div>
                    </TabPanel >


                    <TabPanel key={2} value={2}>
                        <div className="ml-10">

                            <div className="flex">
                            <h2 className=" text-[#0C1D79]  !text-4xl font-medium">Guias</h2>
                                <button onClick={()=>getguia(stateTokenAdmin)} className=" ml-3 rounded-[10px] bg-[#0C1D79]"> <img width="30px" src={iconLoad} alt="" /></button>
                            </div>
                            <DataTable
                                columns={columnsGuias}
                                data={guia.length ? guia : []}
                                pagination
                                selectableRows
                                striped
                            />
                        </div>
                    </TabPanel >
                </TabsBody>
            </Tabs>






            {ModalGuiaDetalle &&
                <ModalGuia
                deleteEquipo={deleteEquipo}
                stateTokenAdmin={stateTokenAdmin}
                addEquipo={addEquipo}
                customer_now={customer_now}
                    Loader={Loader}
                    pruebas_finales={{
                        pruebas,
                        conclusionesPrueba,
                        equiposelectPruebas,
                        getPruebasByEquipo,
                        changeConclusionesPrueba,
                        handleAddpruebas,
                        handlePruebasChange,
                        handleDeletePrueba,
                        SubmirFormPruebas
                    }}
                    cotizacion={{
                        getCotiByEquipo,
                        changeNota,
                        handleAddpro_ser_necesarios,
                        handlepro_ser_necesariosChange,
                        handleDeletepro_ser_necesarios,
                        handleAddpro_ser_recomendados,
                        handleProServRecomendadosChange,
                        handleDeletepro_ser_recomendados,
                        SubmirFormCoti,
                        pro_ser_necesarios,
                        pro_ser_recomendados,
                        nota,
                        equiposelectCotizacion
                    }}
                    diagnostico={{
                        handleAddproblema, handleCompChange, handleImgChange,
                        problema, handleDeleteproblema, SubmirFormDiag, handleAddcomp,
                        equiposelectDiag, changeConclusiones, conclusiones,
                        handleDeleteComp, comp
                    }}
                    informacion={{
                        equiposelect,
                        isChecked, changeInfo, Info
                    }}
                    loaderDiag={loaderDiag}
                    loaderPruebas={loaderPruebas}
                    loaderCoti={loaderCoti}
                    loaderInfo={loaderInfo}
                    getPruebasByEquipo={getPruebasByEquipo}
                    getDiagByEquipo={getDiagByEquipo}
                    getinfoByEquipo={getinfoByEquipo}
                    getCotiByEquipo={getCotiByEquipo}
                    codigoGuia={codigoGuia}
                    ListEquipos={ListEquipos}
                    toggleModalGuia={toggleModalGuia}
                    resetGuia={resetGuia} />
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

export default GenerarGuia;