import {Card,Title,} from "@tremor/react";
import DataTable from "react-data-table-component";

import ModalProduct from "./Modal";
import { UseProdAdmin } from "./Hook/use.products";
import { columns } from "./data/columns";
import { useContext, useEffect } from "react";
import TokenAdminContext from "../../../context/tokenAdmin";

const Productos = () => {
    const {prodc}=  UseProdAdmin()
   const {stateTokenAdmin} =useContext(TokenAdminContext)

  useEffect(() => {
    if(!stateTokenAdmin) return location.href="/#/login/admin"
  }, [stateTokenAdmin]); 
    return (
        <Card>
            <Title className="!text-4x1">Productos</Title>
            <ModalProduct ></ModalProduct>
                   <div>
                    <DataTable 
                    columns={columns}
                    data={prodc}
                    pagination
                    selectableRows
                    striped
                    expandOnRowClicked
                    expandableRows
                    expandableRowsHideExpander
                    />
                   </div> 
        </Card>
    );
}

export default Productos;