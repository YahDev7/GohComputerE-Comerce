import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

export const UseProdAdmin = () => {
  let formInit = {
    codfabricante: '',
    codigo: '',
    descripcion: '',
    enterprise_id: '',
    usuario_id: '',
    subcategoria_id: '',
    estado: '',
    /* fechafinpromo: '', */
    garantia: '',
    /*  igv: 0,
     igvpromo: 0, */
    /*   imagenes: [
        { Nombre: "", URL: "" }
      ], */
    marca: '',
    nombre: '',
    palabra_clave: '',
    precio_compra_dolar: 0,
    precio_compra_dolar_igv: 0,
    precio_compra_dolar_con_IGV: 0,
    precio_compra_soles: 0,
    /*   precio_promocompra_dolar: 0,
      precio_promocompra_dolar_igv: 0,
      precio_promocompra_dolar_con_igv: 0,
      precio_promocompra_soles: 0, */
    ganancia: 0,
    /* ganancia_promo: 0,
    precio_promoventa: 0, */
    precio_venta: 0,
    /*  promocion: '', */
    stock: 0,
    unidad: '',
    url_fab: '',
    url_pro: '',
    valor_dolar: 0,
    ventas: 0,
    especificaciones: [
      { Despcripcion: "", Nombre: "" }
    ],
  }

  let initfiles = [
    { Nombre: "", URL: "" }
  ]

  const [form, setform] = useState(formInit)
  //const [formEdit, setformEdit] = useState(null);


  const [uploadfiles, setuploadfiles] = useState(initfiles);
  const { user, stateTokenAdmin } = useContext(TokenAdminContext)
  let datauser = JSON.parse(user)
  const { usuario_id, enterprise_id } = datauser


  const getproductEdit = async (id) => {
    let res = await Fetchs.getOne(id, stateTokenAdmin)
    setform(res)
  }

  const deleteProd = async (id) => {

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
      let res = await Fetchs.delete(id, stateTokenAdmin)
     /*  if(res.message) return  Swal.fire(
        'Alerta!',
        res.message,
        'warning'
      ) */

      return   Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )
    }
  }

  /*   useEffect(() => {
     // if (formEdit) getproductEdit(formEdit)
  
      console.log(formEdit)
  
    }, [formEdit]); */


  const [showCard, setShowCard] = useState(true);
  const [cardProd, setcardProd] = useState(true);
  const [StateModal, setStateModal] = useState(false);

  const [prodc, setProdc] = useState([]);
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");


  const SubmirForm = async (e) => {

    if (form?._id) {
      const { _id, ...form2 } = form
      let res3 = await Fetchs.update(_id, form2, stateTokenAdmin)
      if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)
      alert(res3)
      setform(formInit)
      return;
    }

    //ENVIAR EL TOKEN PARA LAS APIS
    /*  let newform = { ...form, usuario_id, enterprise_id }
     let res = await Fetchs.save(newform,stateTokenAdmin)
     console.log(res)
     if (res.statusCode) return alert(res.message.map((el) => el))
     if (res.status) return alert(res.message)
      */
    if (uploadfiles[0].URL !== "") uploadFilesFetch.save(uploadfiles, stateTokenAdmin)
    /*  alert(res)
     setform(formInit) */
    return;
  }

  const toggleModal = () => {
    if (StateModal) return setStateModal(false)
    if (!StateModal) return setStateModal(true)
    setform(formInit)
  }

  const getprod = async () => {
    let res = await Fetchs.get(stateTokenAdmin)
    setProdc(res)
  }

  const handleChange = (e) => {
    const numberProperties = [];
    for (const key in formInit) {
      if (typeof formInit[key] === 'number') {
        numberProperties.push(key);
      }
    }

    const { name, value } = e.target;

    if (name === 'precio_compra_dolar') return calculosTotales(value);
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
      precio_compra_dolar_con_IGV: res
    });
    //}
    //return 0;
  };


  const handleAgregarEspecificacion = () => {
    setform({
      ...form,
      especificaciones: [
        ...form.especificaciones,
        { Despcripcion: '', Nombre: '' },
      ],
    });
  };

  const handleEliminarEspecificacion = (index) => {
    setform((prevForm) => {
      const newEspecificaciones = [...prevForm.especificaciones];
      newEspecificaciones.splice(index, 1);
      return {
        ...prevForm,
        especificaciones: newEspecificaciones,
      };
    });
  };

  const handleEspecificacionChange = (index, field, value) => {
    const newEspecificaciones = [...form.especificaciones];
    newEspecificaciones[index] = {
      ...newEspecificaciones[index],
      [field]: value,
    };
    setform({
      ...form,
      especificaciones: newEspecificaciones,
    }
    );
  };

  const handleImagenChange = (e) => {

    const { files } = e.target;
    const imagenesArray = Array.from(files).map((file) => file);
    // const imagenesArray = Array.from(files).map((file) => URL.createObjectURL(file));
    /*   setform((prevForm) => ({
        ...prevForm,
        imagenes: imagenesArray,
      })); */

    setuploadfiles(imagenesArray)
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
      precio_compra_dolar: value,
      precio_compra_dolar_igv: res,
      precio_compra_dolar_con_IGV: res2,
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
      precio_compra_dolar_igv: res
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

    const valorTotalSoles = form.precio_compra_dolar_con_IGV * parseFloat(value);
    let res = isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    res = Number(res)

    let res2 = res + parseFloat(ganancia);
    Number(res2)


    return setform({
      ...form,
      valor_dolar: value,
      precio_compra_soles: res,
      precio_venta: res2
    });
    //}
    //return 0;
  };

  useEffect(() => {
    getprod()
  }, []);
  return {
    fabibra,
    deleteProd,
    formInit,
    getproductEdit,
    handleImagenChange,
    calcularIGV,
    setFabibra,
    ganancia,
    setGanancia,
    dolar,
    setDolar,
    calcularValorIncluyendoIGV,
    calcularValorTotalSoles,
    /* setformEdit, */
    calcularValorTotalSoles_singanacia, StateModal, toggleModal, showCard, cardProd, prodc, setcardProd, handleChange, SubmirForm, form, setform, handleAgregarEspecificacion, handleEliminarEspecificacion, handleEspecificacionChange
  }
}