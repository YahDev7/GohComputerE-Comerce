import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
import { ProductosFetch } from "../../../../api/productos";
const MySwal = withReactContent(Swal)

export const UseProdAdmin = () => {
  let formInit = {
    codfabricante: '',
    codigo: '',
    descripcion: '',
    enterprise_id: '',
    usuario_id: '',
    subcategoria_id: '',
    estado: 'A',
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
      { Descripcion: "", Nombre: "" }
    ],
  }

  let initfiles = null

  /*   let initfiles = [
      { Nombre: "", URL: "" }
    ]
   */
    const [loaderProd, setloaderProd] = useState(false);

  const [form, setform] = useState(formInit)
  const [uploadfiles, setuploadfiles] = useState(initfiles);
  const { user, stateTokenAdmin } = useContext(TokenAdminContext)
//  if(!user) return location.href="/#/login/admin"
  let datauser = JSON.parse(user)
  const { usuario_id, enterprise_id } = datauser

  const getproductEdit = async (id) => {
    setloaderProd(true)
    let res = await Fetchs.getOne(id, stateTokenAdmin)
    setform(res)
    setloaderProd(false)
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
      setloaderProd(true)
      let res = await Fetchs.delete(id, stateTokenAdmin)
      /*  if(res.message) return  Swal.fire(
         'Alerta!',
         res.message,
         'warning'
       ) */
      setloaderProd(false)

      if (!res.err) return Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )
      getprod(stateTokenAdmin)
      return 
    }
  }

  const [showCard, setShowCard] = useState(true);
  const [cardProd, setcardProd] = useState(true);
  const [StateModal, setStateModal] = useState(false);

  const [prodc, setProdc] = useState([]);
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");


  const SubmirForm = async (e) => {
    setloaderProd(true)

    if (form._id) {
      const { __v, _id, imagenes, ...form2 } = form
      let res3 = await ProductosFetch.put(_id, form2, stateTokenAdmin)
      
      setloaderProd(false)
      if (res3.statusCode === 400 || res3.statusCode === 500) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      if (res3.status) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });
      if (uploadfiles) {
        let res4 = await uploadFilesFetch.saveProducto(uploadfiles, stateTokenAdmin, _id)
      }

      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })
      setform(formInit)
      return;
    }

    //ENVIAR EL TOKEN PARA LAS APIS
    let newform = { ...form, usuario_id, enterprise_id }
    let res = await ProductosFetch.post(newform, stateTokenAdmin)
    // if (res.statusCode) return alert(res.message.map((el) => el))   
    setloaderProd(false)
    if (res.statusCode === 400 || res.statusCode === 500) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    if (res.status) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });


    if (uploadfiles) {

      let res3 = await uploadFilesFetch.saveProducto(uploadfiles, stateTokenAdmin, res._id)
    }

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    setform(formInit)
    setuploadfiles(initfiles)
    getprod(stateTokenAdmin)
    return;
  }

  const toggleModal = () => {
    if (StateModal) return setStateModal(false)
    if (!StateModal) return setStateModal(true)
    setform(formInit)
  }

  const getprod = async () => {
    setloaderProd(true)
    let res = await ProductosFetch.get(stateTokenAdmin)
    setProdc(res)
    setloaderProd(false)
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
    //const imagenesArray = Array.from(files).map((file) => file);
    // const imagenesArray = Array.from(files).map((file) => URL.createObjectURL(file));
    /*   setform((prevForm) => ({
        ...prevForm,
        imagenes: imagenesArray,
      })); */
    // setuploadfiles(imagenesArray)
    setuploadfiles(files[0])
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
  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
}, [stateTokenAdmin]);
 
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
    ,loaderProd
  }
}