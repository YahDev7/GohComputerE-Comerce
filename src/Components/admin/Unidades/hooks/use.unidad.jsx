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
    let meses=new Date().getMonth()+1;
    let arrventasmes=[]
    let arrComprames=[]
    for (let i = 1; i <= meses; i++) {
      let res = await FetchMov.getTotalMes(stateTokenAdmin,i)
      arrventasmes.push(res)
      let res2 = await FetchMov.getTotalMesCompra(stateTokenAdmin,i)
      arrComprames.push(res2)
      
    }

    //let mes = arrventasmes.map(el => el.mes)
 // setmes(mes)
    const resultventa = arrventasmes.reduce((acc, x) => {
      acc[x.mes] = x.total;
      return acc;
    }, {});
  
    setTMes(resultventa)

    const resultcompra = arrComprames.reduce((acc, x) => {
      acc[x.mes] = x.total;
      return acc;
    }, {});
    setTMescompra(resultcompra)

//    { 9: 32.16 }


  /*   let mes = res.map(el => el._id)
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
    setTMescompra(resultcompra) */

   

    setloaderUnidad(false)
  
  }
 /*  const getTotalMeses = async () => {

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
  
  } */
  

  const getIngresosMensuales = async () => {
    setloaderUnidad(true)
    console.log(TMes,TMescompra)
    let resventas={...TMes};
    let resCompras={...TMescompra};
   

  for (const key in resventas) {
   // if (resventas[key] !== resCompras[key]) {
      resventas[key] = resventas[key] - resCompras[key];
    //} else {
     // resventas[key] = 0;
   // }
  }
  setiMensuales(resventas)
  
  setloaderUnidad(false) 
   /*  setloaderUnidad(true)
    let res = await FetchMov.getIngresosMensuales(stateTokenAdmin)
    console.log(res)
    const result = res.reduce((acc, x) => {
      acc[x._id] = x.Total;
      return acc;
    }, {});
    setiMensuales(result)
    setloaderUnidad(false) */

  }
  useEffect(() => {
    getIngresosMensuales()
  }, [TMes,TMescompra]);
  
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