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
    const handleChange = (e) => {
      const { name, value } = e.target;
      setform({ ...form, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let res = await UserFetch.postByEnterprise(stateTokenAdmin, form)

      if(!res.err) return MySwal.fire({
        title: <h2>{res.message}</h2>,
        icon: 'success'
      })  

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
    formInit

  };
}
