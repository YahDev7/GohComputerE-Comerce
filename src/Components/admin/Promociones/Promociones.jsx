/* import { Card, Title, } from "@tremor/react";

//import { columns } from "./data/columns";
import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";
import ModalPromociones from "./Modal";


const Promociones = () => {


  const { stateTokenAdmin } = useContext(TokenAdminContext)

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);
  return (
    <Card>
      <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Promociones</h2>

      {/* <ModalPromociones stateTokenAdmin={stateTokenAdmin}></ModalPromociones> 

    </Card>
  );
}

export default Promociones; */