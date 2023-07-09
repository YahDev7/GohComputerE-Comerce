import { useContext, useEffect, useState } from "react";
import { FetchSubCat } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";

export const UseSubCatAdmin = () => {
   
  const {stateTokenAdmin} =useContext(TokenAdminContext)
  const [subcats, setSubcats] = useState([]);
   
   const getSubCats= async()=>{
    let res = await FetchSubCat.get(stateTokenAdmin)
    setSubcats(res)
   }

   useEffect(() => {
    getSubCats()
   }, []);

    return {
      getSubCats,
      subcats,
  }
} 


