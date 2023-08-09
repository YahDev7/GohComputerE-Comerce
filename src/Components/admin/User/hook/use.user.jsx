import {  useEffect, useState } from "react";
import { UserFetch } from "../../../../api/users.fetch";
import withReactContent from "sweetalert2-react-content";

let formInit = {
    /*  enterprise_id: '', */
    /*  userAdmin_id: '', */
    nombre: '',
    ap_paterno: '',
    ap_materno: '',
    dni: '',
    email: '',
    password: '',
    rol: '',
    telefono: '',
    fecha_creacion: '', // Fecha actual en formato 'YYYY-MM-DD'
    estado: 'A',
  }
export const UseUser = (stateTokenAdmin) => {

    const MySwal = withReactContent(Swal) 

    const [users, setusers] = useState([]);
    const [form, setform] = useState(formInit)
  
  
    const getusers = async (token) => {
      let res = await UserFetch.get(token)
      setusers(res)
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
        let res = await UserFetch.delete(id, stateTokenAdmin)
        console.log(res)
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
    const getEdit = async (id) => {
      let res = await UserFetch.getOne(id, stateTokenAdmin)
      let {__v,enterprise_id,...res2} = res
      setform(res2)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (form?._id) {
        const { _id, ...form2 } = form
        let res3 = await UserFetch.put(_id, form2, stateTokenAdmin)
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

      
  
      let res = await UserFetch.postByEnterprise(stateTokenAdmin, form)
      console.log(res)

      if (res.statusCode) return alert(res.message.map((el) => el))
      if (res.status) return  await MySwal.fire({
        title: <h2>{res.message}</h2>,
        icon: 'error'
      })  

      await MySwal.fire({
        title: <h2>{res.message}</h2>,
        icon: 'success'
      })  
     setform(formInit)

      return;

    };
    useEffect(() => {
        getusers(stateTokenAdmin)
      }, []);
      useEffect(() => {
        if (!stateTokenAdmin) return location.href = "/#/login/admin"
      }, [stateTokenAdmin]);
  return {
    users,
    setusers,
    form,
    setform,
    getusers,
    handleChange,
    handleSubmit,
    formInit,
    getEdit,
    deleteUser
  };
}
