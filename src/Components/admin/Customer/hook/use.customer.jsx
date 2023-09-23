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
  tipo_doc: '',
  email: '',
  password: '',
  telefono: '',
  estado: 'A',
}
export const UseCustomer = (stateTokenAdmin) => {

  const MySwal = withReactContent(Swal)

  const [loaderCustomer, setloaderCustomer] = useState(false);
  
  const [customer, setcustomer] = useState([]);
  const [customerDNI, setcustomerDNI] = useState([]);
  const [customerRUC, setcustomerRUC] = useState([]);
  const [form, setform] = useState(formInit)

  const getEdit = async (id) => {
    setloaderCustomer(true)
    let res = await CustomerFetch.getOne(id, stateTokenAdmin)
    let { __v, enterprise_id, password, ...res2 } = res
    setform(res2)
    setloaderCustomer(false)

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
    setloaderCustomer(true)

      let res = await CustomerFetch.delete(id, stateTokenAdmin)
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
      setloaderCustomer(false)

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
    setloaderCustomer(true)
    let res = await CustomerFetch.get(token);
    setcustomer(res)
    setloaderCustomer(false)
  }

  
  const getcustomerDNI = async (token) => {
    setloaderCustomer(true)
    let res = await CustomerFetch.getDNI(token);
    setcustomerDNI(res)
    setloaderCustomer(false)
  }

  
  const getcustomerRUC = async (token) => {
    setloaderCustomer(true)
    let res = await CustomerFetch.getRUC(token);
    setcustomerRUC(res)
    setloaderCustomer(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloaderCustomer(true)

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await CustomerFetch.put(_id, form2, stateTokenAdmin)
      // if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)
      setloaderCustomer(false)

      if (res3.statusCode===404) return MySwal.fire({
        title: <h2>{res3.message}</h2>,
        icon: 'success'
      })
      // alert(res3.message.map((el) => el))
      if (res3.status===404) return await MySwal.fire({
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
    setloaderCustomer(false)

    if (res.statusCode) return MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    })

    if (res.status) return await MySwal.fire({
      title: <h2>{res.message}</h2>,
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
    getcustomerDNI(stateTokenAdmin)
    getcustomerRUC(stateTokenAdmin)
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
    deletecustomer,
    loaderCustomer,
    customerDNI,
    customerRUC

  };
}
