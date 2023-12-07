import {  useState } from "react";

export const UseImageCat = () => {

  const [selectImageCat, setselectImageCat] = useState([]);

  const [selectedImgCat, setselectedImgCat] = useState([]);
  const [modalListImageCat, setmodalListImageCat] = useState(false)
//  const [ImgSelectedProd, setImgSelectedProd] = useState([]);
  
  const ImagehandleSelectCat = () => {
    setselectedImgCat(selectImageCat)
    toggleModalImageCat()
  }

  const toggleModalImageCat = () => {
    if (modalListImageCat) return setmodalListImageCat(false)
    if (!modalListImageCat) return setmodalListImageCat(true)
  }

  const ImageDeleteSelectCat = (id) =>  setselectedImgCat(selectedImgCat.filter((el) => el._id !== id))

  const imageSelectTableCat = async ({ selectedRows }) => {
  
    if(selectedImgCat.length>=1){
       return  setselectImageCat([...selectedRows,...selectedImgCat])
    }

       return setselectImageCat(selectedRows)
  };

  return {
    ImagehandleSelectCat,
    ImageDeleteSelectCat,
    imageSelectTableCat,
    modalListImageCat,
    selectedImgCat,
    toggleModalImageCat,
    setselectedImgCat
 //   ImgSelectedProd
  }
}