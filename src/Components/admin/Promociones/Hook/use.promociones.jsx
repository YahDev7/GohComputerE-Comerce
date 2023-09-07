import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import withReactContent from "sweetalert2-react-content";
import { PromocionesFetch } from "../../../../api/Promociones";
import TokenAdminContext from "../../../../context/tokenAdmin";
const MySwal = withReactContent(Swal)

export const UsePromocionesAdmin = () => {
  const [loaderPromo, setloaderPromo] = useState(false);

  let formInit = {
    producto_id: null,
    fecha_fin: "",
    precio_compra_dolar_promo: 0,
    precio_compra_dolar_igv_promo: 0,
    precio_compra_dolar_con_IGV_Promo: 0,
    precio_compra_soles_promo: 0,
    ganancia_promo: 0,
    precio_venta_promo: 0,
    estado: 'A',
    valor_dolar: 0,
  }

  const [form, setform] = useState(formInit)
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const getpromocionesEdit = async (id) => {
    setloaderPromo(true)
    let res = await PromocionesFetch.getOne(id, stateTokenAdmin)
    setform(res)
    setGanancia(res.ganancia_promo)
    setloaderPromo(false)
  }

  const deletePromociones = async (id) => {

    let res2 = await MySwal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "Se eliminara de manera permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    })/* .then((result) => {
            if (result.isConfirmed) {
              
              Swal.fire(
                'Eliminado!',
                'El registro fue eliminado con exito',
                'success'
              )
            }
          }) */

    if (res2.isConfirmed) {
      setloaderPromo(true)

      let res = await PromocionesFetch.delete(id, stateTokenAdmin)
      /*  if(res.message) return  Swal.fire(
         'Alerta!',
         res.message,
         'warning'
       ) */
      if (!res.err) return Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )
      getpromociones(stateTokenAdmin)
      setloaderPromo(false)

      return alert(res)
    }
  }

  const [StateModal, setStateModal] = useState(false);

  const [promociones, setpromociones] = useState([]);
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");


  const SubmirForm = async (e) => {
    setloaderPromo(true)

    if (form._id) {
      const { __v, _id, enterprise_id, ...form2 } = form
      let res3 = await PromocionesFetch.put(_id, form2, stateTokenAdmin)

      if (res3.statusCode === 400 || res3.statusCode === 500) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      if (res3.status) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      setloaderPromo(false)

      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })
      setform(formInit)

      return;
    }

    //ENVIAR EL TOKEN PARA LAS APIS
    let newform = { ...form }
    let res = await PromocionesFetch.post(newform, stateTokenAdmin)
    // if (res.statusCode) return alert(res.message.map((el) => el))   
    if (res.statusCode === 400 || res.statusCode === 500) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    if (res.status) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });



    setloaderPromo(false)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    setform(formInit)
    getpromociones(stateTokenAdmin)
    return;
  }

  const toggleModal = () => {
    if (StateModal) return setStateModal(false)
    if (!StateModal) return setStateModal(true)
    setform(formInit)
  }

  const getpromociones = async () => {
    setloaderPromo(true)
    let res = await PromocionesFetch.get(stateTokenAdmin)
    setpromociones(res)
    setloaderPromo(false)
  }

  const handleChange = (e) => {
    const numberProperties = [];
    for (const key in formInit) {
      if (typeof formInit[key] === 'number') {
        numberProperties.push(key);
      }
    }

    const { name, value } = e.target;

    if (name === 'precio_compra_dolar_promo') return calculosTotales(value);
    if (name === 'valor_dolar') return calcularValorTotalSoles_singanacia(value);

    let newform = {
      ...form,
      [name]: value
    }

    for (const key in numberProperties) {
      newform[numberProperties[key]] = Number(newform[numberProperties[key]])
    }
    //let res2 = numberProperties.map((el) => Number(newform[el]))
    setform(newform)
  }

  const calcularValorIncluyendoIGV = (value) => {
    //  if (fabibra) {
    const valorIGV = parseFloat(value) * 0.18;
    const valorTotal = parseFloat(value) + valorIGV;
    let res = isNaN(valorTotal) ? 0 : valorTotal.toFixed(2);
    res = Number(res)

    return setform({
      ...form,
      precio_compra_dolar_con_IGV_Promo: res
    });
    //}
    //return 0;
  };



  const calculosTotales = (value) => {
    const valorIGV = parseFloat(value) * 0.18;
    let res = isNaN(valorIGV) ? 0 : valorIGV.toFixed(2);
    res = Number(res)

    const valorIGV2 = parseFloat(value) * 0.18;
    const valorTotal2 = parseFloat(value) + valorIGV2;
    let res2 = isNaN(valorTotal2) ? 0 : valorTotal2.toFixed(2);
    res = Number(res)


    /* const valorIncluyendoIGV = parseFloat(value) * (1 + 0.18);
    const valorTotalSoles = valorIncluyendoIGV.toFixed(2) * parseFloat(dolar);
    let res3=isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    res3=Number(res3) */

    return setform({
      ...form,
      precio_compra_dolar_promo: value,
      precio_compra_dolar_igv_promo: res,
      precio_compra_dolar_con_IGV_Promo: res2,
      // precio_compra_soles:res3
    });

  }


  const calcularIGV = (value) => {
    //if (fabibra) {
    const valorIGV = parseFloat(value) * 0.18;
    let res = isNaN(valorIGV) ? 0 : valorIGV.toFixed(2);

    res = Number(res)
    return setform({
      ...form,
      precio_compra_dolar_igv_promo: res
    });
    // }
    // return 0;
  };

  const calcularValorTotalSoles = (value) => {
    if (ganancia && dolar) {
      const valorIncluyendoIGV = parseFloat(value) * (1 + 0.18);
      const valorTotalSoles =
        valorIncluyendoIGV * parseFloat(dolar) + parseFloat(ganancia);
      return isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles_singanacia = (value) => {
    // if (dolar) {

    const valorTotalSoles = form.precio_compra_dolar_con_IGV_Promo * parseFloat(value);
    let res = isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    res = Number(res)

    let res2 = res + parseFloat(ganancia);
    Number(res2)


    return setform({
      ...form,
      valor_dolar: value,
      precio_compra_soles_promo: res,
      precio_venta_promo: res2
    });
    //}
    //return 0;
  };

  useEffect(() => {
    getpromociones()
  }, []);
  return {
    fabibra,
    deletePromociones,
    formInit,
    getpromocionesEdit,
    calcularIGV,
    setFabibra,
    ganancia,
    setGanancia,
    calcularValorIncluyendoIGV,
    calcularValorTotalSoles,
    /* setformEdit, */
    calcularValorTotalSoles_singanacia, StateModal, toggleModal,
    promociones, handleChange, SubmirForm, form, setform,loaderPromo
  }
}