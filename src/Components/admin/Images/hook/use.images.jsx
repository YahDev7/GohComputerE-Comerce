import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import withReactContent from "sweetalert2-react-content";
import { PromocionesFetch } from "../../../../api/Promociones";
import TokenAdminContext from "../../../../context/tokenAdmin";
import { ImageFetch } from "../../../../api/Image.fetch";
const MySwal = withReactContent(Swal)

export const UseImagesAdmin = () => {

  const [loaderImage, setloaderImage] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagsId, setTagsId] = useState(null);
  const { stateTokenAdmin } = useContext(TokenAdminContext)
  let initfilesImage = null
  const [Images, setImages] = useState([]);
  const [SelectImg, setSelectImg] = useState(null);
  const [uploadfileImage, setuploadfileImage] = useState(initfilesImage);
  const [StateModalImage, setStateModalImage] = useState(false);

  const [selectImage, setselectImage] = useState([]);
  const [selectedImg, setselectedImg] = useState([]);

  const addTags = (e) => {
    let { value } = e.target;
    if (e.key === ",") {
      const newString = value.replace(",", "");
      if (newString === "") return e.target.value = ""
      setTags([...tags, newString])
      e.target.value = ""
    }
  }

  const getId = async (id) => {
    setloaderImage(true)

    let resById = await ImageFetch.getOne(id, stateTokenAdmin);
    setloaderImage(false)

    let { label, _id } = resById
    console.log(resById)
    setTags(label)
    setTagsId(_id)

  }

  const ImagehandleSelect = () => {
    setselectedImg(selectImage)
    /*     selectImage.map()
        let {  _id, secure_url } = selectImage
        setselectedImg([
           ...selectedImg,
           { _id, secure_url }
              ]);
              toggleModalImage()
        */
    toggleModalImage()

  }

  const ImageDeleteSelect = (id) =>  setselectedImg(selectedImg.filter((el) => el._id !== id))
  
/*   const getImagesEdit=()=>{

  } */
  const imageSelectTable = async ({ selectedRows }) => {
    if (selectedImg.length === 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    })

    if (selectedRows.length > 3) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione como maximo 3',
    })
    setselectImage(selectedRows)
  };

  const removeTag = (indexRemove) => setTags(tags.filter((el, index) => index !== indexRemove))

  const deleteImage = (e) => setSelectImg(null)

  const handleFileChangeImage = (e) => {
    const { files } = e.target;
    let fileOnly = files[0]
    setuploadfileImage(fileOnly)
    setSelectImg(URL.createObjectURL(fileOnly))

  };

  const getImages = async () => {
    setloaderImage(true)
    let res = await ImageFetch.get(stateTokenAdmin)
    setImages(res)
    setloaderImage(false)
  }

  const deletePromociones = async (id) => {

    let res2 = await MySwal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "Se eliminara de manera permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    })/* .then((result) => {
            if (result.isConfirmed) {
              
              Swal.fire(
                'Eliminado!',
                'El registro fue eliminado con exito',
                'success'
              )
            }
          }) */

    if (res2.isConfirmed) {
      setloaderImage(true)
      let res = await ImageFetch.delete(id, stateTokenAdmin)
      setloaderImage(false)
      getImages(stateTokenAdmin)

      if (!res.err) return Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )

    }
  }


  const SubmirFormImage = async (e) => {

    setloaderImage(true)

    if (tagsId) {
      let res3 = await ImageFetch.put(stateTokenAdmin, tags, tagsId)

      setloaderImage(false)
      if (res3.statusCode === 400 || res3.statusCode === 500) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      if (res3.status) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      getImages(stateTokenAdmin)
      toggleModalImage()
      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })

      return;
    }

    //ENVIAR EL TOKEN PARA LAS APIS
    let res = await ImageFetch.post(stateTokenAdmin, uploadfileImage, tags)
    setloaderImage(false)
    // if (res.statusCode) return alert(res.message.map((el) => el))   
    if (res.statusCode === 400 || res.statusCode === 500) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    if (res.status) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    getImages(stateTokenAdmin)
    toggleModalImage()
    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })

    return;
  }

  const toggleModalImage = () => {
    if (StateModalImage) return setStateModalImage(false)
    if (!StateModalImage) return setStateModalImage(true)
    resetFormImage()
  }

  const handleChangeImage = (e) => {
    const { name, value } = e.target;

    let newform = {
      ...formImage,
      [name]: value
    }

    //let res2 = numberProperties.map((el) => Number(newform[el]))
    setformImage(newform)
  }

  const resetFormImage = () => {
    setSelectImg(null);
    setTags([])
    setTagsId(null)
  }

  useEffect(() => {
    getImages()
  }, []);


  return {
    getImages,
    loaderImage,
    StateModalImage,
    Images,
    toggleModalImage,
    SubmirFormImage,
    handleFileChangeImage,
    handleChangeImage,
    addTags,
    tags,
    removeTag,
    SelectImg,
    deleteImage,
    resetFormImage,
    getId,
    deletePromociones,
    ImagehandleSelect,
    imageSelectTable,
    selectedImg,
    ImageDeleteSelect,
    setselectedImg
  }
}