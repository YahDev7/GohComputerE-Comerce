import {  useState } from "react";

export const UseImageSubCat = () => {

  const [selectImageSubCat, setselectImageSubCat] = useState([]);

  const [selectedImgSubCat, setselectedImgSubCat] = useState([]);
  const [modalListImageSubCat, setmodalListImageSubCat] = useState(false)
//  const [ImgSelectedProd, setImgSelectedProd] = useState([]);
  
  const ImagehandleSelectSubCat = () => {
    setselectedImgSubCat(selectImageSubCat)
    toggleModalImageSubCat()
  }

  const toggleModalImageSubCat = () => {
    if (modalListImageSubCat) return setmodalListImageSubCat(false)
    if (!modalListImageSubCat) return setmodalListImageSubCat(true)
  }

  const ImageDeleteSelectSubCat = (id) =>  setselectedImgSubCat(selectedImgSubCat.filter((el) => el._id !== id))

  const imageSelectTableSubCat = async ({ selectedRows }) => {
   /*  if (selectedImgSubCat.length === 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    })

    if (selectedRows.length > 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    }) */


    if(selectedImgSubCat.length>=1){
       return  setselectImageSubCat([...selectedRows,...selectedImgSubCat])
    }

       return setselectImageSubCat(selectedRows)
  };

  return {
    toggleModalImageSubCat,
    ImagehandleSelectSubCat,
    ImageDeleteSelectSubCat,
    imageSelectTableSubCat,
    modalListImageSubCat,
    selectedImgSubCat,
    setselectedImgSubCat
 //   ImgSelectedProd
  }
}