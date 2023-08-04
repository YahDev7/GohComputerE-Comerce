import {  useEffect, useState } from "react";
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
    dni: '',
    email: '',
    password: '',
    telefono: '',
    estado: '',
  }
export const UseCustomer = (stateTokenAdmin) => {

    const MySwal = withReactContent(Swal) 

    const [customer, setcustomer] = useState([]);
    const [form, setform] = useState(formInit)
  
  
    const getcustomer = async (token) => {
        let res = await CustomerFetch.get(token);
        setcustomer(res)
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();

        let res = await CustomerFetch.postByEnterprise(stateTokenAdmin, form)
        console.log(res)

        if(!res.err) return MySwal.fire({
          title: <h2>{res.message}</h2>,
          icon: 'success'
        })  
        if(res.statusCode===400) return MySwal.fire({
            title: <h2>{res.statusCode}</h2>,
            icon: 'error'
          })  
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
    handleSubmit

  };
}
