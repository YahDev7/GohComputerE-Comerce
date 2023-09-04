import { createContext, useEffect, useState } from "react";
import { CustomerFetch } from "../api/customer.fetch";

    const TokenContext= createContext()
    
    const TokenProvider=({children})=>{

      let tokenSession=localStorage.getItem("tokensession")

        const [stateToken, setStateToken] = useState(tokenSession===null?null:tokenSession);
        const [stateDataUserToken, setStateDataUserToken] = useState(null);

        const getDataUser= async(stateToken)=>{
          if(!stateToken) return  setStateDataUserToken(null)
          let resDataUser=await CustomerFetch.getDataUserToken(stateToken)
          setStateDataUserToken(resDataUser)
        }
        useEffect(() => {
          getDataUser(stateToken)
        }, [stateToken]);

          const data={
            stateToken,
            setStateToken,
            stateDataUserToken
          }

        return(
            <TokenContext.Provider value={data}>{children}</TokenContext.Provider>
        )
    }
    export {TokenProvider};
    export default TokenContext;