import { createContext, useState } from "react";

    const TokenContext= createContext()
    
    const TokenProvider=({children})=>{

      let tokenSession=localStorage.getItem("tokensession")

        const [stateToken, setStateToken] = useState(tokenSession===null?null:tokenSession);

          const data={
            stateToken,
            setStateToken
          }

        return(
            <TokenContext.Provider value={data}>{children}</TokenContext.Provider>
        )
    }
    export {TokenProvider};
    export default TokenContext;