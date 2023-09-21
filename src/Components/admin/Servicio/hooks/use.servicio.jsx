import { useContext, useEffect, useState } from "react";
import { FetchCat, Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
import { MovimientoFetch } from "../../../../api/movimiento.fetch";
const MySwal = withReactContent(Swal)

export const UseService = () => {
  
  const {stateTokenAdmin } = useContext(TokenAdminContext)
  const [TServicio, setTServicio] = useState([]);
  const [TServicioDia, setTServicioDia] = useState([]);
  const [TServicioMes, setTServicioMes] = useState([]);

  const getTServicio = async () => {
    let res = await MovimientoFetch.getTotalServicios(stateTokenAdmin)
    setTServicio(res.total)

    let res2 = await MovimientoFetch.getTotalServiciosDia(stateTokenAdmin)
    setTServicioDia(res2.total)

    let meses=new Date().getMonth()+1;
    let arrmes=[]

    for (let i = 1; i <= meses; i++) {
      let res3 = await MovimientoFetch.getTotalServiciosMes(stateTokenAdmin,i)
      arrmes.push(res3)
      
    }

    const result = arrmes.reduce((acc, x) => {
      acc[x.mes] = x.total;
      return acc;
    }, {});
    console.log(result)
    setTServicioMes(result)

  }

  useEffect(() => {
    getTServicio()
  }, []);
  
  return {
    TServicio,
    TServicioDia,
    TServicioMes
   }
}