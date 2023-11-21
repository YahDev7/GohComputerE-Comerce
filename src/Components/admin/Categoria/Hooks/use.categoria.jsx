import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { CategoriaFetch } from "../../../../api/categoria.fetch";
import { uploadFilesFetch } from "../../../../api/fetchs";

const MySwal = withReactContent(Swal)
let formInit = {
  nombre: '',
  estado: 'A'
}
let initfiles = null

export const UseCatAdmin = (stateTokenAdmin) => {
  const [loaderCat, setloaderCat] = useState(false);

  const [categoria, setcategoria] = useState([]);
  const [form, setform] = useState(formInit)
  const [uploadfile, setuploadfile] = useState(initfiles);

  const getcategoria = async (token) => {
    setloaderCat(true)
    let res = await CategoriaFetch.get(token);
    setcategoria(res)
    setloaderCat(false)

  }

  const getEdit = async (id) => {
    setloaderCat(true)

    let res = await CategoriaFetch.getOne(id, stateTokenAdmin)
    let { __v, enterprise_id, usuario_id, ...res2 } = res
    setform(res2)
    setloaderCat(false)

  }

  const handleImagenChange = (e) => {

    const { files } = e.target;
    setuploadfile(files[0])
  };

  const deleteCategoria = async (id) => {
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
      setloaderCat(true)

      let res = await CategoriaFetch.delete(id, stateTokenAdmin)
      if (res.status) return Swal.fire(
        'Alerta!',
        res.message,
        'warning'
      )

      if (res.statusCode) return Swal.fire(
        'Alerta!',
        res.message,
        'warning'
      )

      getcategoria(stateTokenAdmin)
      setloaderCat(false)
      Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )

      return
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    setloaderCat(true)


    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await CategoriaFetch.put(_id, form2, stateTokenAdmin)
      setloaderCat(false)
      if (uploadfile) uploadFilesFetch.saveCategoria(uploadfile, stateTokenAdmin, _id)

      if (res3.statusCode) return await MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'error'
      })
      if (res3.status) return await MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'error'
      })
      getcategoria(stateTokenAdmin)
      setform(formInit)
      await MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'success'
      })

      return;
    }


    let res = await CategoriaFetch.post(stateTokenAdmin, form)

    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)
    if (uploadfile) {
      let res3 = await uploadFilesFetch.saveCategoria(uploadfile, stateTokenAdmin, res._id)
    }

    setform(formInit)
    getcategoria(stateTokenAdmin)
    setloaderCat(false)
    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })

    return;
  }

  useEffect(() => {
    getcategoria(stateTokenAdmin)
  }, []);

 /*  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]); */
  
  return {
    categoria,
    formInit,
    setcategoria,
    form,
    setform,
    getcategoria,
    handleChange,
    handleSubmit,
    deleteCategoria,
    getEdit,
    handleImagenChange,
    loaderCat

  }
}