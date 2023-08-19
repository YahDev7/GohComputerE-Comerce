import { useEffect, useState } from "react";
import { UserFetch } from "../../../../api/users.fetch";
import withReactContent from "sweetalert2-react-content";
import { CustomerFetch } from "../../../../api/customer.fetch";

let formInit = {
  nombres: '',
  ap_paterno: '',
  ap_materno: '',
  departamento: '',
  provincia: '',
  distrito: '',
  direccion: '',
  dni_ruc: '',
  email: '',
  password: '',
  telefono: '',
  estado: 'A',
}
export const UseCustomer = (stateTokenAdmin) => {

  const MySwal = withReactContent(Swal)

  const [customer, setcustomer] = useState([]);
  const [form, setform] = useState(formInit)

  const getEdit = async (id) => {
    let res = await CustomerFetch.getOne(id, stateTokenAdmin)
    console.log(res)
    let { __v, enterprise_id, password, ...res2 } = res
    setform(res2)
  }

  const deletecustomer = async (id) => {

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
      let res = await CustomerFetch.delete(id, stateTokenAdmin)
      console.log(res)
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

      Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )
      getcustomer(stateTokenAdmin)
      return
    }
  }


  const getcustomer = async (token) => {
    let res = await CustomerFetch.get(token);
    setcustomer(res)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await CustomerFetch.put(_id, form2, stateTokenAdmin)
      console.log(res3)
      // if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)

      if (res3.statusCode) return alert(res3.message.map((el) => el))
      if (res3.status) return await MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'error'
      })

      await MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'success'
      })
      setform(formInit)
      getcustomer(stateTokenAdmin)

      return;
    }


    let res = await CustomerFetch.postByEnterprise(stateTokenAdmin, form)
    console.log(res)

    if (res.status) return await MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    })

    if (res.statusCode) return MySwal.fire({
      title: <h2>{res.statusCode}</h2>,
      icon: 'error'
    })

    MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'success'
    })

    setform(formInit)
    return
  };

  useEffect(() => {
    getcustomer(stateTokenAdmin)
  }, []);
  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);
  return {
    customer,
    formInit,
    setcustomer,
    form,
    setform,
    getcustomer,
    handleChange,
    handleSubmit,
    getEdit,
    deletecustomer

  };
}
