import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import ModalSubCategoria from "./Modal";


const Subcategoria = () => {

  const { stateTokenAdmin } = useContext(TokenAdminContext)

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);

  return (
    <div className="h-100 flex-1 p-7">
      <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Sub Cateogiras</h2>
      
      <ModalSubCategoria></ModalSubCategoria>
    </div>
  );
}

export default Subcategoria;