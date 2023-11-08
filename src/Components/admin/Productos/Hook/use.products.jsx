import { useContext, useEffect, useState } from "react";
import { Fetchs, uploadFilesFetch } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import withReactContent from "sweetalert2-react-content";
import { ProductosFetch } from "../../../../api/productos";
import Swal from "sweetalert2";
import { CloudinaryFetch } from "../../../../api/productos copy";
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
    //    unidad: '',
    url_fab: '',
    url_pro: '',
    valor_dolar: 0,
    ventas: 0,
    especificaciones: [
      { Descripcion: "", Nombre: "" }
    ],
  }


  let formInitService = {
    descripcion: '',
    enterprise_id: '',
    usuario_id: '',
    subcategoria_id: '',
    estado: 'A',
    garantia: '',
    nombre: '',
    precio_venta: 0,
    stock: 0,

  }

  //  let initfiles = null

  let initfiles = [
    { nombre: "", URL: "" }
  ]

  const [loaderProd, setloaderProd] = useState(false);
  const [unidadServicio, setunidadServicio] = useState("UNIDAD");

  const [form, setform] = useState(formInit)
  const [formService, setformService] = useState(formInitService)
  const [uploadfiles, setuploadfiles] = useState(initfiles);
  const [imgsView, setimgsView] = useState([]);

  const [imgs, setimgs] = useState([]);
  const { user, stateTokenAdmin } = useContext(TokenAdminContext)
  if (!user) return location.href = "/#/login/admin"
  let datauser = user
  const { usuario_id, enterprise_id } = datauser

  const handleUnidadService = (e) => {
    setunidadServicio(e.target.value)
  }
  const getproductEdit = async (id) => {
    setloaderProd(true)
    let res = await ProductosFetch.getOne(id, stateTokenAdmin)
    if (res.unidad === "SERVICIO") {
      setunidadServicio(res.unidad)
      setloaderProd(false)
      setformService(res)
      return
    }
    setunidadServicio(res.unidad)

    setform(res)
    setimgsView(res?.imagenes)
    setloaderProd(false)
  }

  /*   const getproductEditService = async (id) => {
      setloaderProd(true)
      let res = await ProductosFetch.getOne(id, stateTokenAdmin)
      setform(res)
      setimgsView(res?.imagenes)
      setloaderProd(false)
    } */

  const getprod = async () => {
    setloaderProd(true)
    let res = await ProductosFetch.getwithstock(stateTokenAdmin)
    setProdc(res)
    setloaderProd(false)
  }

  const getprodAll = async () => {
    setloaderProd(true)
    let res = await ProductosFetch.getAll(stateTokenAdmin)
    setProdAll(res)
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
  const [prodAll, setProdAll] = useState([]);
  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");

  const SubmirFormService = async (e) => {


    setloaderProd(true)
    if (formService._id) {
      const { __v, _id, imagenes,especificaciones, ...form2 } = formService
      form2.stock=Number(form2.stock)
      console.log(formService)
      let res3 = await ProductosFetch.putService(_id, form2, stateTokenAdmin)

      setloaderProd(false)
      if (res3.statusCode === 400 || res3.statusCode === 500) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      if (res3.status) return MySwal.fire({
        title: `${res3.message}`,
        icon: 'warning'
      });

      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })
      setformService(formInit)
      return;
    }


    let newform = { ...formService, usuario_id, enterprise_id, unidad: unidadServicio }
    newform = { ...newform, stock: Number(newform.stock), precio_venta: Number(newform.precio_venta) }
    console.log(newform)
    let res = await ProductosFetch.postService(newform, stateTokenAdmin)

    setloaderProd(false)
    if (res.statusCode === 400 || res.statusCode === 500) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    if (res.status) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })

    setformService(formInitService)
    getprod(stateTokenAdmin)
    return;
  }


  const SubmirForm = async (e) => {
    console.log("profucto")
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
      if (imgs.length) {
        //  let res4 = await uploadFilesFetch.saveProducto(uploadfiles, stateTokenAdmin, _id)
        let res4 = imgs.map(async (el) => await uploadFilesFetch.saveProducto(el, stateTokenAdmin, _id))

      }

      await Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
      })
      setform(formInit)
      return;
    }

    //ENVIAR EL TOKEN PARA LAS APIS
    let newform = { ...form, usuario_id, enterprise_id, unidad: unidadServicio }
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


    if (imgs.length) {

      let resupload = imgs.map(async (el) => await uploadFilesFetch.saveProducto(el, stateTokenAdmin, res._id))
      //let res3 = await uploadFilesFetch.saveProducto(uploadfiles, stateTokenAdmin, res._id)
    }

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    setform(formInit)
    setuploadfiles(initfiles)
    setimgs([])
    getprod(stateTokenAdmin)
    return;
  }

  const toggleModal = () => {
    if (StateModal) return setStateModal(false)
    if (!StateModal) return setStateModal(true)
    setform(formInit)
  }



  const handleChangeService = (e) => {

    const { name, value } = e.target;

    return setformService({
      ...formService,
      [name]: value
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numberProperties = [];
    for (const key in formInit) {
      if (typeof formInit[key] === 'number') {
        numberProperties.push(key);
      }
    }


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

  const handleAgregarImg = () => {
    if (uploadfiles.length === 3) return MySwal.fire({
      title: <h2>No se puede agregar mas imagenes</h2>,
      icon: 'warning'
    })
    if (uploadfiles.length + imgsView.length === 3) return MySwal.fire({
      title: <h2>No se puede agregar mas imagenes</h2>,
      icon: 'warning'
    })

    setuploadfiles([
      ...uploadfiles,
      { nombre: '', URL: '' },

    ]);
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

  const handleEliminarImg = (index) => {
    /* let imgsall= uploadfiles;
    
    
    imgsall.splice(index, 1);
    
    console.log(imgsall)
        return setuploadfiles(imgsall)
     */
    setuploadfiles((prevForm) => {
      const newEspecificaciones = [...prevForm];
      newEspecificaciones.splice(index, 1);
      return newEspecificaciones
    });
  };

  const EliminarImg = async (public_id) => {
    let res = await MySwal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "Se eliminara de manera permanente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    })

    if (res.isConfirmed) {
      setloaderProd(true)
      let deleteOneImg = await ProductosFetch.deleteOneImg({ public_id }, stateTokenAdmin)
      setloaderProd(false)

      if (deleteOneImg.statusCode === 404 || deleteOneImg.status === 404) return MySwal.fire({
        title: `${deleteOneImg.message}`,
        icon: 'warning'
      });

      setloaderProd(true)
      let deleteOneImgCloudinary = await CloudinaryFetch.deleteOneImgCloudinary({ public_id }, stateTokenAdmin)
      console.log(deleteOneImgCloudinary)
      setloaderProd(false)

      if (deleteOneImgCloudinary.result !== "ok") return MySwal.fire({
        title: "No s epudo eliminar esta img",
        icon: 'warning'
      });


      getprod(stateTokenAdmin)
      getprod()
      if (!res.err) return Swal.fire(
        'Eliminado!',
        'El registro fue eliminado con exito',
        'success'
      )

      return
    }


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
    if (imgs.length >= 3) return MySwal.fire({
      title: <h2>No se puede agregar mas imagenes</h2>,
      icon: 'warning'
    })
    setimgs([...imgs, files[0]])

    // const imagenesArray = Array.from(files).map((file) => file);
    // const imagenesArray = Array.from(files).map((file) => URL.createObjectURL(file));
    /*   setform((prevForm) => ({
        ...prevForm,
        imagenes: imagenesArray,
      })); */

    //    setuploadfiles(imagenesArray)
    //setuploadfiles(files[0])
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

  const resetForm = () => {
    setformService(formInitService)
    setform(formInit);
    toggleModal();
    setuploadfiles(initfiles)
    setimgsView([])
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
      valor_dolar: Number(value),
      precio_compra_soles: res,
      precio_venta: res2
    });
    //}
    //return 0;
  };

  useEffect(() => {
    getprod()
    getprodAll()
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
    calcularValorTotalSoles_singanacia, StateModal, toggleModal, showCard, cardProd, prodc, setcardProd, handleChange, SubmirForm, form, setform, handleAgregarEspecificacion, handleAgregarImg, handleEliminarEspecificacion, handleEspecificacionChange
    , loaderProd, uploadfiles, handleEliminarImg, imgsView, EliminarImg, resetForm, getprod, handleUnidadService, unidadServicio, formService, handleChangeService, SubmirFormService,prodAll
  }
}