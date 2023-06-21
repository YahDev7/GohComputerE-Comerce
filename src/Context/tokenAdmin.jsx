import { createContext, useEffect, useState } from "react";

const TokenAdminContext = createContext()

const TokenAdminProvider = ({ children }) => {

  let tokenAdmin = localStorage.getItem("tokenadmin")
  let infoUser = localStorage.getItem("user")

  const [stateTokenAdmin, setStateTokenAdmin] = useState(tokenAdmin === null ? null : tokenAdmin);
  const [user, setuser] = useState(infoUser === null ? null : infoUser);

  //OBTENER EL USER A TRAVEZ DEL TOKEN
  let getUser=async ()=>{

    useEffect(() => {
      if(!stateTokenAdmin) return location.href="/#/login/admin"
    }, [stateTokenAdmin]);
  }

  

  const data = {
    stateTokenAdmin,
    setStateTokenAdmin,
    user,
    setuser
  }

  return (
    <TokenAdminContext.Provider value={data}>{children}</TokenAdminContext.Provider>
  )
}
export { TokenAdminProvider };
export default TokenAdminContext;