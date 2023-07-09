
import withReactContent from "sweetalert2-react-content";
import { useContext, useEffect, useState } from "react";

import { fetchLogin, fetchLoginAdmin } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";


const MySwal = withReactContent(Swal) 
let frmlogin = {
  email: '',
  password: ''
}

export const UseLogin = () => {

    const [form, setform] = useState(frmlogin);
    const {stateTokenAdmin,user,setuser} =useContext(TokenAdminContext)

    if(stateTokenAdmin)return location.href="/#/dashadmin/gohcomputer/Servicios"
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setform({
        ...form,
        [name]: value
      })
  
    }

    const send = async (e) => {
     let res=await fetchLoginAdmin.login(form,stateTokenAdmin)
      if(res.statusCode) return MySwal.fire({
          title: <h2>{res.message}</h2>,
          icon: 'error'
        }) 
        if(res.status) return MySwal.fire({
          title: <h2>{res.message}</h2>,
          icon: 'error'
        }) 
  
        MySwal.fire({
          title: <h2>Bienvenido {res.user.nombre}</h2>,
          icon: 'success'
        })        

       // document.cookie=`token=${res.token}`
       localStorage.setItem("tokenadmin",res.token)
       localStorage.setItem("user",JSON.stringify(res.user))
        location.href="/#/dashadmin/gohcomputer/Servicios";   
    }
    return {
        handleChange,
        send
    }
}
