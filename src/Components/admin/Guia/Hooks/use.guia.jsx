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

export const UseGuiaAdmin = (stateTokenAdmin) => {

  const [loaderGuia, setloaderGuia] = useState(false);
  const [guia, setguia] = useState([]);
  const [equipos, setequipos] = useState(initEquipo);
  const [ListEquipos, setListEquipos] = useState([]);
  const [ModalGuiaDetalle, setModalGuiaDetalle] = useState(false);
  const [stateModalListClientes, setstateModalListClientes] = useState(false);
  const [form, setform] = useState(formInit)
  const [selectCustomer, setselectCustomer] = useState(null);

  const handleSelectCustomer = () => {
    let { nombres, dni_ruc, _id, telefono, direccion } = selectCustomer
    const { customerDetalle } = form
    setform({ ...form, customerDetalle: { ...customerDetalle, nombres, dni_ruc, _id, telefono, direccion } });
    toggleListaClientes()
  }

  const addEquipo = (e) => {
    setListEquipos([...ListEquipos, equipos])
    setequipos(initEquipo)
  }

  const handleChangeTableCustomer = async ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    if (selectedRows.length > 1) return await Swal.fire({
      icon: 'warning',
      title: 'Seleccione solo un cliente',
    })
    setselectCustomer(selectedRows[0])
  };

  const toggleModalGuia = () => {
    if (ModalGuiaDetalle) return setModalGuiaDetalle(false)
    if (!ModalGuiaDetalle) return setModalGuiaDetalle(true)
    setform(formInit)
  }

  const toggleListaClientes = () => {
    if (stateModalListClientes) return setstateModalListClientes(false)
    if (!stateModalListClientes) return setstateModalListClientes(true)
    setform(formInit)
  }

  const getguia = async (token) => {
    setloaderGuia(true)
    let res = await guiaFetch.get(token);
    setguia(res)
    setloaderGuia(false) 
  }

  const getEdit = async (id) => {
     let res = await guiaFetch.getOne(id, stateTokenAdmin)
    console.log(res)
    let {equipos,...resto}= res
    setListEquipos(equipos)
    setform(resto)
    return
   /*  setloaderGuia(true)
    let { __v, enterprise_id, usuario_id, ...res2 } = res
    setform(res2)
    setloaderGuia(false)  */
  }

  const handleChangeEquipos = (e) => {
    const { name, value } = e.target;
    setequipos({ ...equipos, [name]: value })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    setloaderGuia(true)
    
    if (ListEquipos.length === 0) {
      setloaderGuia(false)

     return await Swal.fire({
        icon: 'warning',
        title: 'Llene los campos',
      })

    }
    /*     if (form?._id) {
          const { _id, ...form2 } = form
          let res3 = await guiaFetch.put(_id, {...form2}, stateTokenAdmin)
          setloaderGuia(false)
    
          if (res3.statusCode) return await MySwal.fire({
            title: <h2>{res3.message}</h2>,
            icon: 'error'
          })
          if (res3.status) return await MySwal.fire({
            title: <h2>{res3.message}</h2>,
            icon: 'error'
          })
          getguia(stateTokenAdmin)
          setform(formInit)
          await MySwal.fire({
            title: <h2>{res3.message}</h2>,
            icon: 'success'
          })
    
          return;
        }
     */
    const { customerDetalle, ...form2 } = form
    const { _id } = customerDetalle

    let res = await guiaFetch.post(stateTokenAdmin, { ...form2, customer_id: _id, equipos: ListEquipos })

    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    setform(formInit)
    getguia(stateTokenAdmin)
    setloaderGuia(false)
    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    reset()
    return;
  }

  const reset = () => {
    setequipos(initEquipo)
    setListEquipos([])
    setform(formInit)
  }

  useEffect(() => {
    getguia(stateTokenAdmin)
  }, []);



  return {
    guia,
    formInit,
    setguia,
    form,
    setform,
    getguia,
    handleChange,
    handleSubmit,
    getEdit,
    loaderGuia,
    ModalGuiaDetalle,
    toggleModalGuia,
    stateModalListClientes,
    toggleListaClientes,
    handleChangeTableCustomer, handleSelectCustomer, addEquipo, handleChangeEquipos, equipos,
    ListEquipos, reset

  }
}