import { useContext, useEffect, useState } from "react";
import { FetchCat, FetchMov, Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

export const UseUnidad = () => {
  const [loaderUnidad, setloaderUnidad] = useState(false);

  const { stateTokenAdmin } = useContext(TokenAdminContext)
  const [Tventas, setTventas] = useState(null);
  const [TCompras, setTCompras] = useState(null);
  const [TDia, setTDia] = useState(null);
  const [TDiaCompra, setTDiaCompra] = useState(null);
  const [mes, setmes] = useState(null);
  const [TMes, setTMes] = useState(null);
  const [mescompra, setmescompra] = useState(null);
  const [TMescompra, setTMescompra] = useState(null);
  const [iMensuales, setiMensuales] = useState(null);

  const getTventas = async () => {
    setloaderUnidad(true)

    let res = await FetchMov.getSumaVenta(stateTokenAdmin)
    setTventas(res.total)
    setloaderUnidad(false)
  }

  const getTCompras = async () => {
    setloaderUnidad(true)
    let res = await FetchMov.getSumaCompras(stateTokenAdmin)
    setTCompras(res.total)
    setloaderUnidad(false)
  }


  const getTotalDia = async () => {
    setloaderUnidad(true)
    let res = await FetchMov.getTotalDia(stateTokenAdmin)
    setTDia(res.total)

    let res2 = await FetchMov.getTotalDiaCompra(stateTokenAdmin)
    setTDiaCompra(res2.total)
    setloaderUnidad(false)
  }

  const getTotalMeses = async () => {

    setloaderUnidad(true)
    let res = await FetchMov.getTotalMes(stateTokenAdmin)
    let mes = res.map(el => el._id)
    const result = res.reduce((acc, x) => {
      acc[x._id] = x.Totalmes;
      return acc;
    }, {});
    setmes(mes)
    setTMes(result)


    let res2 = await FetchMov.getTotalMesCompra(stateTokenAdmin)
    let mescompra = res2.map(el => el._id)
    const resultcompra = res2.reduce((acc, x) => {
      acc[x._id] = x.Totalmes;
      return acc;
    }, {});
    setmescompra(mescompra)
    setTMescompra(resultcompra)
    setloaderUnidad(false)
  
  }
  

  const getIngresosMensuales = async () => {
    setloaderUnidad(true)
    let res = await FetchMov.getIngresosMensuales(stateTokenAdmin)
    const result = res.reduce((acc, x) => {
      acc[x._id] = x.Total;
      return acc;
    }, {});
    setiMensuales(result)
    setloaderUnidad(false)

  }

  useEffect(() => {
    getTCompras()
    getTventas()
    getTotalDia()
    getTotalMeses()
    getIngresosMensuales()
  }, []);

  return {
    Tventas,
    TCompras,
    TDia, TMes, mes,
    mescompra,
    TMescompra,
    TDiaCompra,
    iMensuales, loaderUnidad
  }
}