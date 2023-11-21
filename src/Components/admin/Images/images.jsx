import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { UseImagesAdmin } from "./hook/use.images";
import { useContext } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import ModalImage from "./modal";
import TableImage from "./table";

const ImagenesAdmin = () => {
    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const { iconEdit, iconDelete, iconNew, iconLoad } = UseIcons()

    const {
        Images, getImages, loaderImage, StateModalImage, toggleModalImage, setformImage, formInitImage, SubmirFormImage, handleChangeImage, handleFileChangeImage,/* formImage */ addTags, tags, removeTag,
        SelectImg,
        deleteImage,
        resetFormImage,
        getId,
        deletePromociones
    } = UseImagesAdmin()
    /* console.log(formImage) */

     const columnsImg = [
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
            name: 'Etiquetas',
            selector: row => row.label,
            sortable: true,
        },
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true,
        },


    ]; 

    return (

        <div className="w-100 max-md:!w-[80%]">
            {loaderImage && <Loader />}
            <Card>
                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Imagenes</h2>
                <button onClick={() => { getImages(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <img src={iconLoad} width="20px" alt="" />

                    </div>
                </button>
                <button onClick={() => { resetFormImage(); toggleModalImage() }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />

                    </div>
                </button>
                {StateModalImage &&
                    <ModalImage
                        resetFormImage={resetFormImage}
                        toggleModalImage={toggleModalImage}
                        SubmirFormImage={SubmirFormImage}
                        tags={tags}
                        removeTag={removeTag}
                        addTags={addTags}
                        handleFileChangeImage={handleFileChangeImage}
                        SelectImg={SelectImg}
                        deleteImage={deleteImage}
                    />
                }
                <TableImage
                    columns={columnsImg}
                    Images={Images}
                />




            </Card>


        </div>

    );
}

export default ImagenesAdmin;