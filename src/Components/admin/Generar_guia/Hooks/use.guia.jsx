import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { guiaFetch } from "../../../../api/guia.fetch";

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

export const UseGuiaAdmin = (stateTokenAdmin, getinfoByEquipo, getDiagByEquipo, getCotiByEquipo, getPruebasByEquipo) => {

  const [loaderGuia, setloaderGuia] = useState(false);
  const [customer_now, setcustomer_now] = useState("");
  const [codigoGuia, setcodigoGuia] = useState(null);
  const [guia, setguia] = useState([]);
  const [equipos, setequipos] = useState(initEquipo);
  const [ListEquipos, setListEquipos] = useState([]);
  const [ModalGuiaDetalle, setModalGuiaDetalle] = useState(false);
  const [stateModalListClientes, setstateModalListClientes] = useState(false);
  const [form, setform] = useState(formInit)
  const [selectCustomer, setselectCustomer] = useState(null);


  const generarGuia = async (e) => {
    if (!selectCustomer) return MySwal.fire({
      title: `Seleccione un cliente`,
      icon: 'warning'
    });

    let res_guia_generada = await guiaFetch.post(stateTokenAdmin, { customer_id: selectCustomer._id })
    getguia(stateTokenAdmin)

    MySwal.fire({
      title: `Guia generada`,
      icon: 'success'
    });

    setModalGuiaDetalle(true)
    getEditGuia(res_guia_generada.guia_id, stateTokenAdmin)
    get_customer_Guia_id(res_guia_generada.guia_id, stateTokenAdmin)
  }

  const get_customer_Guia_id = async (guia_id, stateTokenAdmin) => {
    let rescustomerGuia = await guiaFetch.getOneGuia(guia_id, stateTokenAdmin)
    setcustomer_now(rescustomerGuia.cliente)
  }
  const handleChangeTableCustomerGuia = async ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    if (selectedRows.length > 1) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione solo un cliente',
    })
    setselectCustomer(selectedRows[0])
  };

  const handleSelectCustomer = () => {
    let { nombres, dni_ruc, _id, telefono, direccion } = selectCustomer
    const { customerDetalle } = form
    setform({ ...form, customerDetalle: { ...customerDetalle, nombres, dni_ruc, _id, telefono, direccion } });
    toggleListaClientes()
  }

  const addEquipo = async (id, token) => {
    let resequipo = await guiaFetch.postEquipo(token, id)
    getEditGuia(id)
  }

  const deleteEquipo = async (guia_id,id_equipo, token) => {
    let resequipoDelete = await guiaFetch.deleteEquipo(id_equipo, token)
    if (resequipoDelete?.status === "ok") MySwal.fire({
      title: `Equipo eliminado`,
      icon: 'success'
    });
    if(ListEquipos.length>0) getEditGuia(guia_id)

  }

  const deleteGuia = async (guia_id, token) => {

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
      setloaderGuia(true)
      let resequipoDelete = await guiaFetch.deleteGuia(guia_id, token)
      if (resequipoDelete?.status === "ok") MySwal.fire({
        title: `Guia eliminado`,
        icon: 'success'
      });
      getguia(token)
      setloaderGuia(false)
     
      return
    }

   

  }



  const toggleModalGuia = () => {
    if (ModalGuiaDetalle) return setModalGuiaDetalle(false)
    if (!ModalGuiaDetalle) return setModalGuiaDetalle(true)
    setform(formInit)
  }

  /*  const toggleListaClientes = () => {
     if (stateModalListClientes) return setstateModalListClientes(false)
     if (!stateModalListClientes) return setstateModalListClientes(true)
     setform(formInit)
   } */

  const getguia = async (token) => {
    setloaderGuia(true)
    let res = await guiaFetch.get(token);
    setguia(res)
    setloaderGuia(false)
  }

  const getEditGuia = async (id) => {
    setcodigoGuia(id)
    get_customer_Guia_id(id, stateTokenAdmin)


    let res = await guiaFetch.getOne(id, stateTokenAdmin)
    if(res.length>0){

      //let {equipos,...resto}= res
      setListEquipos(res)
      getinfoByEquipo(res[0]._id)
      getDiagByEquipo(res[0]._id)
      getCotiByEquipo(res[0]._id)
      getPruebasByEquipo(res[0]._id)
    }
    //setform(resto)
    /*  setloaderGuia(true)
     let { __v, enterprise_id, usuario_id, ...res2 } = res
     setform(res2)
     setloaderGuia(false)  */
  }

  const handleChangeEquipos = (e) => {
    const { name, value } = e.target;
    setequipos({ ...equipos, [name]: value })
  }



  const resetGuia = () => {
    setequipos(initEquipo)
    setListEquipos([])
    setform(formInit)
  }

  useEffect(() => {
    getguia(stateTokenAdmin)
  }, []);



  return {
    customer_now,
    generarGuia,
    guia,
    formInit,
    setguia,
    form,
    setform,
    getguia,
    // handleChange,
    // handleSubmit,
    getEditGuia,
    loaderGuia,
    ModalGuiaDetalle,
    toggleModalGuia,
    stateModalListClientes,
    //toggleListaClientes,
    handleChangeTableCustomerGuia, handleSelectCustomer, addEquipo, handleChangeEquipos, equipos,
    ListEquipos, resetGuia, codigoGuia, deleteEquipo,deleteGuia

  }
}