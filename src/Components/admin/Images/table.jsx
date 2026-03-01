import { Button, Card } from "@tremor/react";
import DataTable from "react-data-table-component";

 const TableImage = ({columns, Images,onSelectedRowsChange}) => {
return(
    <div>
                    <DataTable
                        columns={columns}
                        data={Images.length ? Images : []}
                        pagination
                        selectableRows
                        striped
                        expandOnRowClicked
                        expandableRows
                        expandableRowsHideExpander
                        onSelectedRowsChange={onSelectedRowsChange}
                    />
                </div>
    )
} 

export default TableImage;
