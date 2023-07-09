import { UseProdAdmin } from "../Hook/use.products";

const { setformEdit} = UseProdAdmin()

export const columns = [
    {
        name: 'Actions',
        sortable: true,
        maxWidth: '200px',
        cell: row => (
          <div className="flex max-md:flex-col pt-2">
            <button onClick={() => setformEdit(row.idcomp)} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Editar</button>
            <button onClick={() => setformEdit(row.idcomp)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center ">Eliminar</button>
          </div>
        ),
  
    },
    {
        name: 'ID',
        selector: row => row.idcomp,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.descomp,
        sortable: true,
    },
    {
        name: 'Precio',
        selector: row => row.descomp,
        sortable: true,
    },
    
];