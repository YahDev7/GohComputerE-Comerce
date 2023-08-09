import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { CategoriaFetch } from "../../../../api/categoria.fetch";

const MySwal = withReactContent(Swal)
let formInit = {
  nombre: '',
  estado: 'A'
}

export const UseCatAdmin = (stateTokenAdmin) => {

  const [categoria, setcategoria] = useState([]);
  const [form, setform] = useState(formInit)

  const getcategoria = async (token) => {
    let res = await CategoriaFetch.get(token);
    setcategoria(res)
  }

  const getEdit = async (id) => {
    let res = await CategoriaFetch.getOne(id, stateTokenAdmin)
    let {__v,enterprise_id,usuario_id,...res2} = res
    setform(res2)
  }

  const deleteCateogria = async (id) => {
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
        console.log(stateTokenAdmin)
        let res = await CategoriaFetch.delete(id, stateTokenAdmin)
         if(res.status) return  Swal.fire(
          'Alerta!',
          res.message,
          'warning'
        ) 

        if(res.statusCode) return  Swal.fire(
          'Alerta!',
          res.message,
          'warning'
        ) 

        return  Swal.fire(
          'Eliminado!',
          'El registro fue eliminado con exito',
          'success'
        )
  
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await CategoriaFetch.put(_id, form2, stateTokenAdmin)
      console.log(res3)
     // if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)
      
    if (res3.statusCode) return await MySwal.fire({
      title: <h2>{res3.message}</h2>,
      icon: 'error'
    }) 
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


    let res = await CategoriaFetch.post(stateTokenAdmin, form)
    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    setform(formInit)
    return;
  }

  useEffect(() => {
    getcategoria(stateTokenAdmin)
  }, []);

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);
  return {
    categoria,
    formInit,
    setcategoria,
    form,
    setform,
    getcategoria,
    handleChange,
    handleSubmit,
    deleteCateogria,
    getEdit
  }
}