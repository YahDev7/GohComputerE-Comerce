import {  useState } from "react";

export const UseProdImage = () => {

  const [selectImage, setselectImage] = useState([]);

  const [selectedImg, setselectedImg] = useState([]);
  const [modalListImage, setmodalListImage] = useState(false)
//  const [ImgSelectedProd, setImgSelectedProd] = useState([]);
  
  const ImagehandleSelect = () => {
    setselectedImg(selectImage)
    toggleModalImage()
  }

  const toggleModalImage = () => {
    if (modalListImage) return setmodalListImage(false)
    if (!modalListImage) return setmodalListImage(true)
    resetFormImage()
  }

  const ImageDeleteSelect = (id) =>  setselectedImg(selectedImg.filter((el) => el._id !== id))

  const imageSelectTable = async ({ selectedRows }) => {
   /*  if (selectedImg.length === 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    })

    if (selectedRows.length > 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    }) */


    if(selectedImg.length>=1){
       return  setselectImage([...selectedRows,...selectedImg])
    }

       return setselectImage(selectedRows)
  };

  return {
    toggleModalImage,
    ImagehandleSelect,
    ImageDeleteSelect,
    imageSelectTable,
    modalListImage,
    selectedImg,
    setselectedImg
 //   ImgSelectedProd
  }
}