import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { UseProdAdmin } from "./Hook/use.products";
import { UseSubCatAdmin } from "../Subcategoria/hook/use.subcategoria";
import DataTable from "react-data-table-component";
import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import { UseIcons } from "../hook/icons";
import Loader from "../../public/Loader";
import { UseImagesAdmin } from "../Images/hook/use.images";
import TableImage from "../Images/table";
import ModalImage from "../Images/modal";
import ModalProd from "./Modal";
import { UseProdImage } from "./Hook/use.productImg";

const Product = () => {
    const { iconEdit, iconDelete, iconsave, iconNew,iconLoad } = UseIcons()
    const { stateTokenAdmin } = useContext(TokenAdminContext)
    let { subcategoria } = UseSubCatAdmin(stateTokenAdmin)
    const {Images} = UseImagesAdmin()

        const{toggleModalImage,
            ImagehandleSelect,
            ImageDeleteSelect,modalListImage,
            imageSelectTable,setselectedImg,selectedImg
           }= UseProdImage()

   const {
        setGanancia, handleAgregarEspecificacion, StateModal, form, toggleModal,
        handleEliminarEspecificacion,getprodAll,
        handleEspecificacionChange,
        SubmirForm, handleChange, getproductEdit, deleteProd,
         loaderProd, resetForm, handleUnidadService,
          unidadServicio, formService, handleChangeService, 
          SubmirFormService, prodAll 
       
    } = UseProdAdmin() 
    
     const columns = [
        {
            name: 'Actions',
            sortable: true,
            maxWidth: '150px',
            cell: row => (
                <div className="flex max-md:flex-col pt-2">
                    <button onClick={() => { toggleModal(); getproductEdit(row._id,setselectedImg) }} className="mr-2 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconEdit} width="15px" alt="" /></button>
                    <button onClick={() => deleteProd(row._id)} className="block mb-3 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center "><img src={iconDelete} width="15px" alt="" /></button>
                </div>
            ),

        },
        {
            name: 'ID',
            selector: row => row._id,
            sortable: true,
        },
        {
            name: 'NOMBRE',
            selector: row => row.nombre,
            sortable: true,
        },

        {
            name: 'IMG',
            selector: row => (
                <div >
                    <img className="w-20" src={row?.imagenes[0]?.URL ?? row?.imagenes[0]?.secure_url} alt="" />
                </div>
            ),
            sortable: true,
        },

        {
            name: 'Precio',
            selector: row => row.precio_venta,
            sortable: true,
        },
        {
            name: 'Stock',
            selector: row => row.stock,
            sortable: true,
        },
        {
            name: 'Precio Comp',
            selector: row => row.precio_compra_soles,
            sortable: true,
        },
        {
            name: 'URL',
            selector: row => (<a target="_black" href={row.url_fab}>link</a>),
            sortable: true,
        },
        {
            name: 'Estado',
            selector: row => row.estado,
            sortable: true,
        },




    ];

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
  
    return (

        <div className="w-100 max-md:!w-[80%]">

            {loaderProd && <Loader></Loader>}

            <Card>

                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Productos</h2>
                <button onClick={() => { getprodAll(stateTokenAdmin) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <img src={iconLoad} width="20px" alt="" />

                    </div>
                </button>
                <button onClick={() => { resetForm(),setselectedImg([]) }} className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">

                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />

                    </div>
                </button>
                {StateModal &&
                    <ModalProd
                    selectedImg={selectedImg}
                    ImageDeleteSelect={ImageDeleteSelect} 
                        subcategoria={subcategoria}
                        setGanancia={setGanancia} handleAgregarEspecificacion={handleAgregarEspecificacion}
                        form={form}
                        setselectedImg={setselectedImg}
                        toggleModalImage={toggleModalImage}
                        resetForm={resetForm}
                        handleEliminarEspecificacion={handleEliminarEspecificacion}
                        handleEspecificacionChange={handleEspecificacionChange}
                        SubmirForm={SubmirForm} handleChange={handleChange}
                         handleUnidadService={handleUnidadService} unidadServicio={unidadServicio} 
                         formService={formService} handleChangeService={handleChangeService}
                          SubmirFormService={SubmirFormService} />

                }
                <div>
                    <DataTable
                        dense
                        columns={columns}
                        data={prodAll.length ? prodAll : []}
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
                {modalListImage &&

                    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">


                        <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 ">
                            <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">Lista de Imagenes</p>

                            <button className="bg-blue-700 p-3 rounded-md text-white"  onClick={ImagehandleSelect} >
                                Seleccionar
                            </button>
                            <button onClick={() => { toggleModalImage() }} className=" top-0 right-0 z-10  position-absolute  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  " type="button">X</button>
                            <TableImage
                                columns={columnsImg}
                                Images={Images}
                                onSelectedRowsChange={imageSelectTable}

                            />
                        </div>



                    </div>
         
                }

            </Card>
 

        </div>

    );
}

export default Product;