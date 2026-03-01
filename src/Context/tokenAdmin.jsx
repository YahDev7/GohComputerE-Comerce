import { createContext, useEffect, useState } from "react";
import { UserFetch } from "../api/users.fetch";
import { useNavigate } from "react-router-dom";
const TokenAdminContext = createContext()

const TokenAdminProvider = ({ children }) => {

  let tokenAdmin = localStorage.getItem("tokenadmin")
  let infoUser = localStorage.getItem("user")
    let userJson = JSON.parse(infoUser)

  const [stateTokenAdmin, setStateTokenAdmin] = useState(tokenAdmin === null ? null : tokenAdmin);
  const [user, setuser] = useState(userJson === null ? null : userJson);


  //OBTENER EL USER A TRAVEZ DEL TOKEN
  //let navigate = useNavigate()
 /*  let getUser = async () => {
    if(!stateTokenAdmin) return
    let res = await UserFetch.getDataUserToken(stateTokenAdmin)
    if (res.status === 404){
      localStorage.removeItem("tokenadmin")
      localStorage.removeItem("user")

      setStateTokenAdmin(null)
    }
  } */
  //if (!user) return location.href = "/#/login/admin"

 /*  useEffect(() => {
    getUser()
  }, []); */

  /* useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
    if (!user) return location.href = "/#/login/admin"

  }, [user]); */


  const data = {
    stateTokenAdmin,
    setStateTokenAdmin,
    user,
    setuser,
   /*  getUser */
  }

  return (
    <TokenAdminContext.Provider value={data}>{children}</TokenAdminContext.Provider>
  )
}
export { TokenAdminProvider };
export default TokenAdminContext;