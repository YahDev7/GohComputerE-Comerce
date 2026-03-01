import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { comprobanteFetch } from "../../../../api/comprobante.fetch";

const MySwal = withReactContent(Swal)
let formInit = {
  customerDetalle: {
    dni_ruc: '',
    telefono: "",
    direccion: "",
  },
  estado: 'A'
}

let initEquipo = {
  equipo: '',
  comentario: '',
  gama_equipo: '',
}

export const UseComprobanteAdmin = (stateTokenAdmin) => {

  const [loaderComprobante, setloaderComprobante] = useState(false);
  const [customer_now, setcustomer_now] = useState("");
  const [codigoComprobante, setcodigoComprobante] = useState(null);
  const [Comprobante, setComprobante] = useState([]);
  const [ModalComprobanteDetalle, setModalComprobanteDetalle] = useState(false);
  /* const [form, setform] = useState(formInit) */
  const [selectCustomer, setselectCustomer] = useState(null);
  const [Comprobante_one, setComprobante_one] = useState({});

  const [CPendiente, setCPendiente] = useState(0);
  const [Cpagado, setCpagado] = useState(0);
  const [Ctotal, setCtotal] = useState(0);



  const generarComprobante = async (e) => {
    if (!selectCustomer) return MySwal.fire({
      title: `Seleccione un cliente`,
      icon: 'warning'
    });

    let res_Comprobante_generada = await comprobanteFetch.post(stateTokenAdmin, { customer_id: selectCustomer._id })
    getComprobante(stateTokenAdmin)

    MySwal.fire({
      title: `Comprobante generada`,
      icon: 'success'
    });
    console.log(res_Comprobante_generada)
    setModalComprobanteDetalle(true)
    getEditComprobante(res_Comprobante_generada._id, stateTokenAdmin)
    /* get_customer_Comprobante_id(res_Comprobante_generada.Comprobante_id, stateTokenAdmin) */
  }


  //selecion de un solo customer
  const handleChangeTableCustomerComprobante = async ({ selectedRows }) => {
    if (selectedRows.length > 1) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione solo un cliente',
    })
    setselectCustomer(selectedRows[0])
  };

  /*   const handleSelectCustomer = () => {
      let { nombres, dni_ruc, _id, telefono, direccion } = selectCustomer
      const { customerDetalle } = form
      setform({ ...form, customerDetalle: { ...customerDetalle, nombres, dni_ruc, _id, telefono, direccion } });
      toggleListaClientes()
    } */


  const deleteComprobante = async (Comprobante_id, token) => {

    let res2 = await MySwal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "Se eliminara de manera permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    })

    if (res2.isConfirmed) {
      setloaderComprobante(true)
      let resequipoDelete = await comprobanteFetch.deleteComprobante(Comprobante_id, token)
      if (resequipoDelete?.status === "ok") MySwal.fire({
        title: `Comprobante eliminado`,
        icon: 'success'
      });
      getComprobante(token)
      setloaderComprobante(false)

      return
    }



  }


  //abrir o cerrar modal
  const toggleModalComprobante = () => {
    if (ModalComprobanteDetalle) return setModalComprobanteDetalle(false)
    if (!ModalComprobanteDetalle) return setModalComprobanteDetalle(true)
    /*  setform(formInit) */
  }


  const handlepagado = async (v) => {


    if (v > Ctotal) return await MySwal.fire({
      title: <h2>{"El monto pagado no puede puede ser superior al total"}</h2>,
      icon: 'error'
    })
    setCpagado(v)
    let res = Ctotal - v
    return setCPendiente(res)
  }

  const handleTotal = async (v) => {

    console.log(v)

    if (Cpagado > v) return await MySwal.fire({
      title: <h2>{"El monto pagado no puede puede ser superior al total"}</h2>,
      icon: 'error'
    })
    setCtotal(v)
    let res = v - Cpagado
    return setCPendiente(res)
    /* let { total, pagado } = Comprobante_one

    total = Number(total || 0);
    pagado = Number(pagado || 0);

    console.log(total)
    if (pagado > total) return await MySwal.fire({
      title: <h2>{"El monto pagado no puede puede ser superior al total"}</h2>,
      icon: 'error'
    })

    let pendiente = total - pagado
    return setCPendiente(pendiente) */

  }

  const handleRestar = (e) => {
    const { name, value } = e.target;
    if (name === 'total') return handleTotal(Number(value))
    if (name === 'pagado') return handlepagado(Number(value))

  }


  //Obtener todos los comprobantes
  const getComprobante = async (token) => {
    setloaderComprobante(true)

    let res = await comprobanteFetch.get(token);
    setComprobante(res)
    setloaderComprobante(false)
  }

  //Modificar un solo comprobante
  const changeComprobante = (e) => {

    const { name, value } = e.target;

    return setComprobante_one({
      ...Comprobante_one,
      [name]: value
    })

  };





  //Obtener un solo comprobante
  const getEditComprobante = async (id) => {
    setcodigoComprobante(id)
    /*  get_customer_Comprobante_id(id, stateTokenAdmin) */
    let res = await comprobanteFetch.getOne(id, stateTokenAdmin)
    let { pagado, pendiente, total } = res
    console.log(res)
    setCPendiente(pendiente)
    setCpagado(pagado)
    setCtotal(total)
    setComprobante_one(res)
    return
  }

  //Actualizar
  const resetComprobante = () => {
    /*   setform(formInit) */
     setComprobante_one({})
      setCtotal(0)
      setCPendiente(0)
      setCpagado(0)

  }
  const handleEstado = async(_id,e)=>{
    console.log(_id)
    const {  value } = e.target;


    let res = await comprobanteFetch.put(_id, {estado:value}, stateTokenAdmin)

    if (res.statusCode) return await MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    })

    if (res.status === 'ok') {
      getComprobante(stateTokenAdmin)
      await MySwal.fire({
        title: <h2>{'Guardado'}</h2>,
        icon: 'success'
      })

      return;
    }

  }


  //ACTUALIZAR COMPROBANTE
  const handleUpdate = async () => {
    const { _id, ...resto } = Comprobante_one

    let updateCompro = {
      ...resto,
      pendiente: CPendiente,
      total: Ctotal,
      pagado: Cpagado
    }

    if (Comprobante_one.estado === "PAGADO") {
      updateCompro.fecha_retiro = new Date()
    }

    let res = await comprobanteFetch.put(_id, updateCompro, stateTokenAdmin)

    if (res.statusCode) return await MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    })

    if (res.status === 'ok') {

      getComprobante(stateTokenAdmin)
      setModalComprobanteDetalle(false)
      setComprobante_one({})
      setCtotal(0)
      setCPendiente(0)
      setCpagado(0)
      await MySwal.fire({
        title: <h2>{'Guardado'}</h2>,
        icon: 'success'
      })

      return;
    }


  }

  useEffect(() => {
    getComprobante(stateTokenAdmin)

  }, []);



  return {
    customer_now, changeComprobante,
    Comprobante_one,
    handleUpdate,
    setComprobante_one,
    CPendiente,

    handleRestar,
    Cpagado,
    Ctotal,

    generarComprobante,
    Comprobante,
    formInit,
    setComprobante,
    /*    form,
       setform, */
    getComprobante,
    getEditComprobante,
    loaderComprobante,
    ModalComprobanteDetalle,
    toggleModalComprobante,
    handleChangeTableCustomerComprobante, /* handleSelectCustomer, */
    resetComprobante, codigoComprobante,handleEstado

  }
}