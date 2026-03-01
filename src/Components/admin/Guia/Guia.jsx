import DataTable from "react-data-table-component";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UseToggle } from "../hook/use.toggle";
import { useContext } from "react";
import { Card } from "@tremor/react";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import ModalGuia from "./Modal";
import { UseGuiaAdmin } from "./Hooks/use.guia";
import ModalDetalle from "./Modal.detalle";
const Guia = () => {

    const { stateTokenAdmin } = useContext(TokenAdminContext)
    const { guia,
        formInit,
        ModalGuiaDetalle,
        toggleModalGuia,
        form,
        setform,
        getguia,
        handleChange,
        handleSubmit,
        getEdit,
        stateModalListClientes,
        toggleListaClientes,
        handleChangeTableCustomer,
        handleSelectCustomer, ListEquipos,
        addEquipo, handleChangeEquipos, equipos,
        loaderGuia,reset } = UseGuiaAdmin(stateTokenAdmin)

    const { iconEdit, iconDelete, iconDetalle, iconNew, iconLoad } = UseIcons()
    const { StateModal, toggleModal } = UseToggle()


    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
{/*                     <button onClick={() => { toggleModal(); getEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
 */}                    <button onClick={() => { toggleModalGuia(); getEdit(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDetalle} width="15px" alt="" /></button>
                </div>
            ),
        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },

        {
            name: 'Cliente',
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
            format: (row) => {
                return new Date(row.fecha).toLocaleDateString();
            },
            sortable: true,
        },

     
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true,
        }

    ];


    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderGuia && <Loader />}
            <Card>
                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Guias</h2>
                <button onClick={() => { getguia(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">
                        <img src={iconLoad} width="20px" alt="" />
                    </div>
                </button>
                <button onClick={() => { toggleModal(); setform(formInit);reset()  }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center " type="button">
                    <div className="flex">
                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />
                    </div>
                </button>
                {StateModal &&
                    <ModalGuia
                    ListEquipos={ListEquipos}
                    reset={reset}
                        equipos={equipos}
                        iconDelete={iconDelete}
                        addEquipo={addEquipo}
                        handleChangeEquipos={handleChangeEquipos}
                        handleSelectCustomer={handleSelectCustomer}
                        handleChangeTableCustomer={handleChangeTableCustomer}
                        stateModalListClientes={stateModalListClientes}
                        toggleListaClientes={toggleListaClientes}
                        stateTokenAdmin={stateTokenAdmin}
                        formInit={formInit}
                        toggleModal={toggleModal}
                        form={form}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        setform={setform}
                    />
                }
                {ModalGuiaDetalle &&
                    <ModalDetalle
                    UseIcons={UseIcons}
                        form={form}
                        ListEquipos={ListEquipos}
                        toggleModal={toggleModalGuia}

                    />
                }

                <div>

                    <DataTable
                        columns={columns}
                        data={guia.length ? guia : []}
                        pagination
                        selectableRows
                        striped
                        expandOnRowClicked
                        expandableRows
                        expandableRowsHideExpander
                    />
                </div>
            </Card>



        </div>

    );
}

export default Guia;