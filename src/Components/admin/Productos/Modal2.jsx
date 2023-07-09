import { Button, Tab, TabList, Title, Card } from "@tremor/react";
import { UseProdAdmin } from "./Hook/use.products";
import { UseSubCatAdmin } from "../Subcategoria/hook/use.subcategoria";

const ModalProduct2 = () => {
    const {
        handleImagenChange,
        setGanancia,
    handleAgregarEspecificacion, StateModal, form, toggleModal, handleEliminarEspecificacion, handleEspecificacionChange, SubmirForm, handleChange } = UseProdAdmin()

    return (

        <>
           
            {StateModal &&

                <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
                   
                </div>
            }

        </>

    );
}

export default ModalProduct2;