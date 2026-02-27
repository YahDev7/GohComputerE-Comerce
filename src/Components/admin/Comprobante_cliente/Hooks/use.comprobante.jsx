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
  const [form, setform] = useState(formInit)
  const [selectCustomer, setselectCustomer] = useState(null);
  const [Comprobante_one, setComprobante_one] = useState({});
  const [campoPendiente, setcampoPendiente] = useState(0);


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

  //Selecion de customer
  const handleSelectCustomer = () => {
    let { nombres, dni_ruc, _id, telefono, direccion } = selectCustomer
    const { customerDetalle } = form
    setform({ ...form, customerDetalle: { ...customerDetalle, nombres, dni_ruc, _id, telefono, direccion } });
    toggleListaClientes()
  }


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
    setform(formInit)
  }


  const calcular_pendiente = async () => {

    let { total, pagado } = Comprobante_one

    total = Number(total || 0);
    pagado = Number(pagado || 0);

    console.log(total)
    if (pagado > total) return await MySwal.fire({
      title: <h2>{"El monto pagado no puede puede ser superior al total"}</h2>,
      icon: 'error'
    })

    let pendiente = total - pagado
    return setcampoPendiente(pendiente)

  }

   const handleTotalPagado = (e) => {
    const { name, value } = e.target;
    if (name === 'total') return calcular_pendiente()
    if (name === 'pagado') return calcular_pendiente()

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
    setComprobante_one(res)
    return
  }

  //Actualizar
  const resetComprobante = () => {
    setform(formInit)

  }


  //ACTUALIZAR COMPROBANTE
  const handleUpdate = async () => {

    console.log(Comprobante_one)
    const { _id, ...resto } = Comprobante_one
    let res = await comprobanteFetch.put(_id, { ...resto, pendiente: campoPendiente }, stateTokenAdmin)


    console.log(res)
    if (res.statusCode) return await MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    })
    /* if (res.status==='ok') return await MySwal.fire({
      title: <h2>{res.message}</h2>,
      icon: 'error'
    }) */
    if (res.status === 'ok') {

      getComprobante(stateTokenAdmin)
      setComprobante_one({})
      setModalComprobanteDetalle(false)
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
    calcular_pendiente,
    campoPendiente,
    handleTotalPagado,

    generarComprobante,
    Comprobante,
    formInit,
    setComprobante,
    form,
    setform,
    getComprobante,
    getEditComprobante,
    loaderComprobante,
    ModalComprobanteDetalle,
    toggleModalComprobante,
    handleChangeTableCustomerComprobante, handleSelectCustomer,
    resetComprobante, codigoComprobante

  }
}