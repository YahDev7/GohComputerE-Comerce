import { useContext, useEffect, useState } from "react";
import { FetchCat, FetchMov, Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

export const UseUnidad = () => {
  
  const {stateTokenAdmin } = useContext(TokenAdminContext)
  const [Tventas, setTventas] = useState(null);
  const [TCompras, setTCompras] = useState(null);

  const getTventas = async () => {
    let res = await FetchMov.getSumaVenta(stateTokenAdmin)
    setTventas(res[0])
  }

  const getTCompras = async () => {
    let res = await FetchMov.getSumaCompras(stateTokenAdmin)
    setTCompras(res[0])
  }

  useEffect(() => {
    getTCompras()
    getTventas()
  }, []);
  
  return {
    Tventas,
    TCompras
   }
}