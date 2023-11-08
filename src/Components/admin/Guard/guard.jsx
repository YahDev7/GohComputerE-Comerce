import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom"

//Outlet IRAN MUCHAS RUTAS DE REACT ROUTER
export const GuardRoute=({user,children, redirecto,tokenAdmin})=>{
    if(!user || !tokenAdmin){
         return <Navigate to={redirecto}  />
    }

/*      useEffect(() => {
        if(!user || !tokenAdmin){
            return <Navigate to={redirecto}  />
       }
   }, [tokenAdmin]);  */

    return children?children:<Outlet/>
}