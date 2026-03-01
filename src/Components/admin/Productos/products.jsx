/* import {Card,Title,} from "@tremor/react";

import ModalProduct from "./Modal";
import { UseProdAdmin } from "./Hook/use.products";
//import { columns } from "./data/columns";
import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";


const Productos = () => {

  
  const {stateTokenAdmin} =useContext(TokenAdminContext)

  useEffect(() => {
    if(!stateTokenAdmin) return location.href="/#/login/admin"
  }, [stateTokenAdmin]); 
    return (
        <Card>
          <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Productos</h2>

            <ModalProduct stateTokenAdmin={stateTokenAdmin}></ModalProduct>
                  
        </Card>
    );
}

export default Productos; */