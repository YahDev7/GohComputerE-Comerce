import { Navigate, Outlet } from "react-router-dom"

const GuardAuth=({clindren, user,redirectTo})=>{
    if(!user) return <Navigate to={redirectTo}/>

    return children ? children: <Outlet></Outlet>
}

export default GuardAuth;
