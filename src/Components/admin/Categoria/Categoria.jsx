import DataTable from "react-data-table-component";
import { UseCatAdmin } from "./Hooks/use.categoria";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UseToggle } from "../hook/use.toggle";
import { useContext, useEffect, useState } from "react";
import { Card } from "@tremor/react";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { UseImageCat } from "./Hooks/use.categoriaImg";
import ModalCat from "./Modal";
import TableImage from "../Images/table";
import { UseImagesAdmin } from "../Images/hook/use.images";


const Categoria = () => {
    
    const {
        ImagehandleSelectCat,
        toggleModalImageCat,
        ImageDeleteSelectCat,
        imageSelectTableCat,
        modalListImageCat,
        selectedImgCat,
        setselectedImgCat
    } = UseImageCat()
    const {Images} = UseImagesAdmin()


    const { stateTokenAdmin } = useContext(TokenAdminContext)
    const { iconEdit, iconDelete, iconsave, iconNew, iconLoad } = UseIcons()
    const { categoria,
        formInit,
        form,
        setform,
        deleteCategoria,
        getEdit,
        handleChange,
        handleSubmit,  loaderCat, getcategoria } = UseCatAdmin(stateTokenAdmin)
    //  const [uploadfiles, setuploadfiles] = useState(initfiles);

    const { StateModal, toggleModal } = UseToggle()

 
    const columnsImg = [

        {
            name: 'ID',
            selector: row => row._id,
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
            name: 'Estado',
            selector: row => row.estado,
            sortable: true,
        },


    ];

    const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '200px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getEdit(row._id,setselectedImgCat) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => { deleteCategoria(row._id) }} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'IMG',
            selector: row =>
            (
                <div >
                    <img className="w-24" src={row.imagen[0]?.secure_url||row.url_imagen} alt="" />
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Nombre',
            selector: row => row.nombre,
            sortable: true,
        }

    ];


    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderCat && <Loader />}
            <Card>
                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Categorias</h2>
                <button onClick={() => { getcategoria(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <img src={iconLoad} width="20px" alt="" />

                    </div>
                </button>
                <button onClick={() => toggleModal()} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center " type="button">

                    <div className="flex">

                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />

                    </div>
                </button>
                {StateModal &&
                    <ModalCat
                    setselectedImgCat={setselectedImgCat}
                    toggleModal={toggleModal}
                    selectedImgCat ={selectedImgCat }
                    toggleModalImageCat={toggleModalImageCat}
                    setform={setform}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                   form={form}
                    ImageDeleteSelectCat={ImageDeleteSelectCat}
                    />
                }
                <div>
                    <DataTable
                        columns={columns}
                        data={categoria.length ? categoria : []}
                        pagination
                        selectableRows
                        striped
                        expandOnRowClicked
                        expandableRows
                        expandableRowsHideExpander
                    />
                </div>
            </Card>


            <Card>
                {modalListImageCat &&

                    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">


                        <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 ">
                            <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">Lista de Imagenes</p>

                            <button className="bg-blue-700 p-3 rounded-md text-white" onClick={ImagehandleSelectCat} >
                                Seleccionar
                            </button>
                            <button onClick={() => { toggleModalImageCat() }} className=" top-0 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
                            <TableImage
                                columns={columnsImg}
                                Images={Images}
                                onSelectedRowsChange={imageSelectTableCat}

                            />
                        </div>



                    </div>

                }

            </Card>
        </div>

    );
}

export default Categoria;