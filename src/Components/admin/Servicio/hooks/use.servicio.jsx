import { useContext, useEffect, useState } from "react";
import { FetchCat, Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

export const UseService = () => {
  
  const {stateTokenAdmin } = useContext(TokenAdminContext)
  const [Tventas, setTventas] = useState([]);

  const getTventas = async () => {
    let res = await FetchCat.get(stateTokenAdmin)
    setTventas(res)
  }

  useEffect(() => {
    getTventas()
  }, []);
  
  return {
    Tventas
   }
}