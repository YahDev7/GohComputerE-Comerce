import { Card } from "@tremor/react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../pdf/PDF";
import DataTable from "react-data-table-component";

const ModalDetalle = ({ form, toggleModal, ListEquipos, UseIcons }) => {
    const { iconDetalle, iconNew } = UseIcons()
    let {
        cliente,
        dni_ruc,
        fecha,
        estado,
    } = form
    const columnsEquipos = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconNew} width="15px" alt="" /></button>
                    <button className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDetalle} width="15px" alt="" /></button>
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
            <div className="relative bg-white rounded-lg p-2 w-[40%] lg:top-[-106px] max-md:w-[80%] ">
                <button onClick={() => { toggleModal() }} className="z-30 absolute top-2 right-0 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                <Card>
                    <div className="grid md:grid-cols-1 gap-4 -mx-3 mb-6">
                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Cliente
                                </label>
                            </div>
                            <p className="bg-slate-100 p-3 rounded-lg">{cliente}</p>
                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Dni/Ruc
                                </label>
                            </div>
                            <p className="bg-slate-100 p-3 rounded-lg">{dni_ruc}</p>

                        </div>



                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Fecha
                                </label>
                            </div>
                            <p className="bg-slate-100 p-3 rounded-lg">{new Date(fecha).toLocaleDateString()}</p>

                        </div>


                        <div className="w-full px-3 ">

                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                                    Estado
                                </label>
                            </div>
                            <p className="bg-slate-100 p-3 rounded-lg">{estado}</p>


                        </div>

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
                    <div>

                    </div>
                    <PDFDownloadLink document={<PDF form={form} ListEquipos={ListEquipos} />} fileName='mypdf.pdf' >
                        {
                            ({ url, loading, error, blob }) => loading ? <button> Cargando...</button> : <button className="block w-100 mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Imprimir</button>

                        }
                    </PDFDownloadLink>

                    {/*  <PDFViewer className="w-100"> <PDF form={form}></PDF></PDFViewer>  */}
                </Card>
            </div>
        </div>

    );
}

export default ModalDetalle;

