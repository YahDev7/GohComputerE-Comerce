import { useContext, useEffect, useState } from "react";
import { FetchSubCat, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import { SubCategoriaFetch } from "../../../../api/subcategoria.fetch";
import withReactContent from "sweetalert2-react-content";



let formInit = {
  nombre: '',
  categoria_id: null,    //url_imagen: '',
  estado: 'A'
}

let initfiles = null

export const UseSubCatAdmin = (stateTokenAdmin) => {
  const MySwal = withReactContent(Swal) 
  const [loaderSubCat, setloaderSubCat] = useState(false);

  const [subcategoria, setsubcategoria] = useState([]);
  const [uploadfile, setuploadfile] = useState(initfiles);
  const [form, setform] = useState(formInit)

  const getsubcategoria = async (stateTokenAdmin) => {
    setloaderSubCat(true)
    let res = await SubCategoriaFetch.get(stateTokenAdmin);
    setsubcategoria(res)
    setloaderSubCat(false)

  }
  const getEdit = async (id,setselectedImg) => {
    setloaderSubCat(true)

    let res = await SubCategoriaFetch.getOne(id, stateTokenAdmin)
    let {__v,enterprise_id,usuario_id,...res2} = res
    setform(res2)
    setselectedImg(res2.imagen)
    setloaderSubCat(false)

  }
  const deleteUser = async (id) => {

    let res2 = await MySwal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "Se eliminara de manera permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    })

    if (res2.isConfirmed) {
    setloaderSubCat(true)

      let res = await SubCategoriaFetch.delete(id, stateTokenAdmin)
       if(res.status) return Swal.fire(
        'Alerta!',
        res.message,
        'warning'
      ) 

      if(res.statusCode) return  Swal.fire(
        'Alerta!',
        res.message,
        'warning'
      ) 

       Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )
      getsubcategoria(stateTokenAdmin)
    setloaderSubCat(false)

      return
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  
  const handleImagenChange = (e) => {

    const { files } = e.target;
    setuploadfile(files[0]) 
  };

  const handleSubmit = async (e,selectedImg,setselectedImg) => {
    setloaderSubCat(true)

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await SubCategoriaFetch.put(_id, {...form2,imagen:selectedImg}, stateTokenAdmin)
      if (uploadfile) uploadFilesFetch.saveSubCategoria(uploadfile, stateTokenAdmin,_id)
      
    if (res3.statusCode) return alert(res3.message.map((el) => el))
    if (res3.status) return  await MySwal.fire({
      title: <h2>{res3.message}</h2>,
      icon: 'error'
    })  
    setloaderSubCat(false)
    setselectedImg([])

    await MySwal.fire({
      title: <h2>{res3.message}</h2>,
      icon: 'success'
    }) 
      setform(formInit)
      return;
    }

    let res = await SubCategoriaFetch.post(stateTokenAdmin, {...form,imagen:selectedImg})

    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

  /*   if (uploadfile){
      let res3=await uploadFilesFetch.saveSubCategoria(uploadfile, stateTokenAdmin,res._id)
    }  */
    setloaderSubCat(false)
    setselectedImg([])


    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    getsubcategoria(stateTokenAdmin)
    
    
  }

  useEffect(() => {
    getsubcategoria(stateTokenAdmin)
  }, []);

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);

  return {
    subcategoria,
    getsubcategoria,
    formInit,
    form,
    handleSubmit,
    setform,
    handleChange,
    getEdit,
    deleteUser,
    handleImagenChange,
    loaderSubCat
  }
}


