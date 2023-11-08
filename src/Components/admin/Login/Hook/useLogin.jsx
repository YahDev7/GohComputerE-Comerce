
import withReactContent from "sweetalert2-react-content";
import { useContext, useEffect, useState } from "react";

import { fetchLogin, fetchLoginAdmin } from "../../../../api/fetchs";


const MySwal = withReactContent(Swal) 
let frmlogin = {
  email: '',
  password: ''
}

export const UseLogin = () => {
    const [form, setform] = useState(frmlogin); 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setform({
        ...form,
        [name]: value
      })
  
    }

    const send = async (e,setStateTokenAdmin,setuser) => {

      let res=await fetchLoginAdmin.login(form)
      if(res.statusCode) return MySwal.fire({
          title: <h2>{res.message}</h2>,
          icon: 'error'
        }) 
        if(res.status) return MySwal.fire({
          title: <h2>{res.message}</h2>,
          icon: 'error'
        }) 
  
        localStorage.setItem("tokenadmin",res.token)
        localStorage.setItem("user",JSON.stringify(res.user))
        setStateTokenAdmin(res.token)
        setuser(res.user)
        /* setTimeout(() => {
          return location.href="/#/dashadmin/gohcomputer/Servicios";
        }, 5000); */

        
         MySwal.fire({
          title: <h2 className="!text-3xl">Bienvenido {res.user.nombre}</h2>,
         /*  icon: 'success' */
        })        

       // document.cookie=`token=${res.token}`
     

      //return <Navigate to="/dashadmin/gohcomputer/Servicios"  />
    
      
    }
    return {
        handleChange,
        send
    }
}
