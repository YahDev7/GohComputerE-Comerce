/* import { UseIcons } from "../hook/icons";

const { iconEdit, iconDelete, iconNew, iconLoad } = UseIcons()

export const columnsImg = [
    {
        name: 'Actions',
        sortable: true,
        maxWidth: '150px',
        cell: row => (
            <div className="flex max-md:flex-col pt-2">
                <button onClick={() => { toggleModalImage(); getId(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                <button onClick={() => { deletePromociones(row._id) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
            </div>
        ),
    },
    {
        name: 'ID',
        selector: row => row._id,
        sortable: true,
    },
    {
        name: 'ID_IMG',
        selector: row => row.public_id,
        sortable: true,
    },
    {
        name: 'URL',
        selector: row => row.secure_url,
        sortable: true,
    },

    {
        name: 'IMG',
        selector: row =>
        (
            <div >
                <img className="w-24" src={row.secure_url} alt="" />
            </div>
        ),
        sortable: true,
    },


    {
        name: 'Etiquetas',
        selector: row => row.label,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        sortable: true,
    },


]; */