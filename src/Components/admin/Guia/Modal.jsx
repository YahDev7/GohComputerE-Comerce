import { Card, Title } from "@tremor/react";
import { UseCustomer } from "../Customer/hook/use.customer";
import DataTable from "react-data-table-component";

const ModalGuia = ({reset,ListEquipos,addEquipo,equipos,handleChangeEquipos, handleSelectCustomer, handleChangeTableCustomer, form, toggleModal, handleSubmit, handleChange, setform, formInit, stateTokenAdmin, stateModalListClientes, toggleListaClientes,iconDelete }) => {
    let {
        estado,
        customerDetalle
    } = form
    const {equipo,
        comentario,
        gama_equipo}=equipos

    const { dni_ruc,
        telefono,
        direccion } = customerDetalle

    const { customer } = UseCustomer(stateTokenAdmin)
    const columns = [

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


    const columnsEquipos = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button /* onClick={() => { toggleModal(); getEdit(row._id) }} */ className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
       

        {
            name: 'Nombre',
            selector: row => row.equipo,
            sortable: true,
        },
        {
            name: 'Comentario',
            selector: row => row.comentario,
            sortable: true,
        },
    

        {
            name: 'Gama',
            selector: row => row.gama_equipo,
            sortable: true,
        },
     

    ];

    return (
        <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
            <input type="hidden" name="_id" id="_id" />
            <div className="relative bg-white rounded-lg p-2 w-[40%] lg:top-[-30px] max-md:w-[80%] ">
                <button onClick={() => { toggleModal(); reset() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>
                <form className="w-full" onSubmit={(e) => { e.preventDefault();handleSubmit(e) }}>

                    <button type="submit" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Enviar</button>
                    <Card>
                        <div className="grid md:grid-cols-1 gap-4 -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">DNI/RUC</label>
                                <div className="grid grid-cols-5">
                                    <input value={dni_ruc} type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="dni_ruc" id="dni_ruc" placeholder="" />
                                    <button onClick={() => toggleListaClientes()} className="btn bg-blue-700 text-white col-start-5" type="button" data-bs-toggle="modal" data-bs-target="#modalListarPersonas" id="btn-searchCliente"><i className="fas fa-search"></i></button>
                                </div>

                            </div>

                            <div className="w-full px-3">
                                <div className="flex">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                        Equipo
                                    </label>
                                    <span className="pl-2 ">*</span>
                                </div>
                                <input onChange={(e) => handleChangeEquipos(e)}
                                    value={equipo}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    name="equipo"
                                    id="equipo"
                                    type="text"
                                    placeholder="Laptop core i5..."
                                />
                            </div>

                            <div className="w-full px-3">
                                <div className="flex">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                        Comentario
                                    </label>
                                    <span className="pl-2 ">*</span>
                                </div>
                                <input onChange={(e) => handleChangeEquipos(e)}
                                    value={comentario}
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    name="comentario"
                                    id="comentario"
                                    type="text"
                                    placeholder="Mi computadora recalienta..."
                                />
                            </div>


                            <div className="w-full px-3">
                                <div className="flex">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                        Gama_equipo
                                    </label>
                                    <span className="pl-2 ">*</span>
                                </div>
                                <select
                                    value={gama_equipo}
                                    onChange={(e) => handleChangeEquipos(e)}
                                    className=" bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                                    name="gama_equipo"
                                    id="gama_equipo"
                                >
                                    <option className="font-bold" value="">Seleccione</option>
                                    <option className="font-bold" value="Alta">GAMA ALTA</option>
                                    <option className="font-bold" value="Media">GAMA MEDIA</option>
                                    <option className="font-bold" value="Baja">GAMA BAJA</option>

                                </select>
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

                                </select>

                            </div>
                        </div>
                        <button onClick={(e)=>addEquipo(e)} type="button" className=" w-full text-white bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 p-3 font-medium rounded-lg text-sm text-center h-12" >Agregar</button>

                    </Card>


                </form>

                <DataTable
                    columns={columnsEquipos}
                    data={ListEquipos.length ? ListEquipos : []}
                    pagination
                    selectableRows
                    striped
                    expandableRows
                    expandableRowsHideExpander
                />

            </div>

            {
                stateModalListClientes &&
                <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50  z-50  w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(80% - 1rem)]">

                    <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 ">
                        <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">Lista de Clientes</p>

                        <button onClick={() => handleSelectCustomer()} className="bg-blue-700 p-3 rounded-md text-white">
                            Seleccionar
                        </button>
                        <button onClick={() => { toggleListaClientes() }} className=" top-0 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
                        <DataTable
                            //title="CLIENTES"
                            columns={columns}
                            data={customer.length ? customer : []}

                            dense
                            pagination
                            selectableRows
                            striped
                            expandableRows
                            onSelectedRowsChange={handleChangeTableCustomer}
                            expandableRowsHideExpander
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


            }
        </div>




    );
}

export default ModalGuia;

