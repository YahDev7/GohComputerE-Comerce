import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import withReactContent from "sweetalert2-react-content";
import { PromocionesFetch } from "../../../../api/Promociones";
import TokenAdminContext from "../../../../context/tokenAdmin";
import { ImageFetch } from "../../../../api/Image.fetch";
const MySwal = withReactContent(Swal)

export const UseImagesAdmin = () => {
  let formInitImage = {
    label: [],
    estado: "A",
  }
  const [loaderImage, setloaderImage] = useState(false);
  const [formImage, setformImage] = useState(formInitImage)
  const [StateImage, setStateImage] = useState(false);
  let initfilesImage = null
  const [Images, setImages] = useState([]);

  const [uploadfileImage, setuploadfileImage] = useState(initfilesImage);

  const handleChangeImage = (e) => {
    const { files } = e.target;
    setuploadfile(files[0])
  };

  const toggleModalImage = () => {
    if (StateImage) return setStateImage(false)
    if (!StateImage) return setStateImage(true)
    setform(formInit)
  }


  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const getImages = async () => {
    setloaderImage(true)
    let res = await ImageFetch.get(stateTokenAdmin)
    console.log(res)
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

      let res = await ImageFetch.delete(id, stateTokenAdmin)
      setloaderImage(false)
      /*  if(res.message) return  Swal.fire(
         'Alerta!',
         res.message,
         'warning'
       ) */

       getImages(stateTokenAdmin)

      if (!res.err) return Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )

    }
  }

  const [StateModalImage, setStateModalImage] = useState(false);

  const SubmirForm = async (e) => {
    setloaderImage(true)

    /* if (form._id) {
      const { __v, _id, enterprise_id, ...form2 } = form
      let res3 = await PromocionesFetch.put(_id, form2, stateTokenAdmin)

      setloaderImage(false)
      if (res3.statusCode === 400 || res3.statusCode === 500) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      if (res3.status) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });


      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })
      setform(formInit)

      return;
    } */

    //ENVIAR EL TOKEN PARA LAS APIS
    let newform = { ...formImage }
    let res = await ImageFetch.post(stateTokenAdmin,uploadfileImage,newform)
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

    setformImage(formInitImage)
    getImages(stateTokenAdmin)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
   
    return;
  }

  const toggleModal = () => {
    if (StateModalImage) return setStateModalImage(false)
    if (!StateModalImage) return setStateModalImage(true)
    setform(formInit)
  }

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newform = {
      ...formImage,
      [name]: value
    }

    //let res2 = numberProperties.map((el) => Number(newform[el]))
    setformImage(newform)
  }

  



  useEffect(() => {
    getImages()
  }, []);


  return {
    getImages,
    loaderImage,
    StateModalImage,
    Images
  }
}