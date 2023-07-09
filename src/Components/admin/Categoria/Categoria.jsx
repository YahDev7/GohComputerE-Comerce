import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import ModalCategoria from "./Modal";

const Categoria = () => {

   const {stateTokenAdmin} =useContext(TokenAdminContext)

  useEffect(() => {
    if(!stateTokenAdmin) return location.href="/#/login/admin"
  }, [stateTokenAdmin]); 

    return (
          
            <div className="h-100 flex-1 p-7">
                    <h1 className="text-2xl font-semibold "> Categorias</h1>
                    <ModalCategoria/>
                </div> 
    );
}

export default Categoria;