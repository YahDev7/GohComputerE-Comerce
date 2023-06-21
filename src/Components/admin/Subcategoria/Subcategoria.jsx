import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";

const Subcategoria = () => {

  const {stateTokenAdmin} =useContext(TokenAdminContext)

  useEffect(() => {
    if(!stateTokenAdmin) return location.href="/#/login/admin"
  }, [stateTokenAdmin]); 

    return (
            <div className="flex">
              hola subcategoria
            </div>
    );
}

export default Subcategoria;