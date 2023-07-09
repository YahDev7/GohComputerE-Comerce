import { useContext, useEffect, useState } from "react";
import { FetchCat, Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

export const UseCatAdmin = () => {
  
  const {stateTokenAdmin } = useContext(TokenAdminContext)
  const [cat, setcat] = useState([]);

  const getCat = async () => {
    let res = await FetchCat.get(stateTokenAdmin)
    setcat(res)
  }

  useEffect(() => {
    getCat()
  }, []);
  
  return {
    cat
   }
}