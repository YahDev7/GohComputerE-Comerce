import { useContext, useEffect, useState } from "react";
import { FetchSubCat } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import { SubCategoriaFetch } from "../../../../api/subcategoria.fetch";
import withReactContent from "sweetalert2-react-content";



let formInit = {
  nombre: '',
  categoria_id: null,    //url_imagen: '',
  estado: 'A'
}


export const UseSubCatAdmin = (stateTokenAdmin) => {
  const MySwal = withReactContent(Swal) 

  const [subcategoria, setsubcategoria] = useState([]);
  const [form, setform] = useState(formInit)

  const getsubcategoria = async (stateTokenAdmin) => {
    let res = await SubCategoriaFetch.get(stateTokenAdmin);
    setsubcategoria(res)
  }
  const getEdit = async (id) => {
    let res = await SubCategoriaFetch.getOne(id, stateTokenAdmin)
    console.log(res)
    let {__v,enterprise_id,usuario_id,...res2} = res
    setform(res2)
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
      return
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(form)

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await SubCategoriaFetch.put(_id, form2, stateTokenAdmin)
      console.log(res3)
     // if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)
      
    if (res3.statusCode) return alert(res3.message.map((el) => el))
    if (res3.status) return  await MySwal.fire({
      title: <h2>{res3.message}</h2>,
      icon: 'error'
    })  

    await MySwal.fire({
      title: <h2>{res3.message}</h2>,
      icon: 'success'
    }) 
      setform(formInit)
      return;
    }

    let res = await SubCategoriaFetch.post(stateTokenAdmin, form)

    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    getsubcategoria(stateTokenAdmin)
    
  }

  useEffect(() => {
    getsubcategoria(stateTokenAdmin)
  }, [subcategoria]);

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);

  return {
    subcategoria,
    formInit,
    form,
    handleSubmit,
    setform,
    handleChange,
    getEdit,
    deleteUser
  }
}


