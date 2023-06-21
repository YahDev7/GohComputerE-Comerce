

import { useContext, useEffect, useState } from "react";
import { Fetchs } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";

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
    imagenes: [
      { Nombre: "", URL: "" }
    ],
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
  const {user} =useContext(TokenAdminContext)
  let datauser=JSON.parse(user)
  const{usuario_id,enterprise_id}=datauser

  const [showCard, setShowCard] = useState(true);
  const [cardProd, setcardProd] = useState(true);
  const [StateModal, setStateModal] = useState(false);
  const [form, setform] = useState(formInit)
  const [prodc, setProdc] = useState([]);

  const [fabibra, setFabibra] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [dolar, setDolar] = useState("");

  const SubmirForm = async (e) => {
    return console.log(form)
    //ENVIAR EL TOKEN PARA LAS APIS
    let newform={...form,usuario_id,enterprise_id}
    let res = await Fetchs.save(newform)
    console.log(res)
    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    //return res
    alert("Se a guardado con exito")
    setform(formInit)
  }

  const toggleModal = () => {
    if (StateModal) return setStateModal(false)
    if (!StateModal) return setStateModal(true)
    setform(formInit)
  }

  const getprod = async () => {
    let res = await Fetchs.get()
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


  const calcularValorIncluyendoIGV = () => {
    if (fabibra) {
      const valorIGV = parseFloat(fabibra) * 0.18;
      const valorTotal = parseFloat(fabibra) + valorIGV;
      return isNaN(valorTotal) ? 0 : valorTotal.toFixed(2);
    }
    return 0;
  };

  const calcularIGV = () => {
    if (fabibra) {
      const valorIGV = parseFloat(fabibra) * 0.18;
   
      return isNaN(valorIGV) ? 0 : valorIGV.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles = () => {
    if (fabibra && ganancia && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles =
        valorIncluyendoIGV * parseFloat(dolar) + parseFloat(ganancia);
      return isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    }
    return 0;
  };

  const calcularValorTotalSoles_singanacia = () => {
    if (fabibra && dolar) {
      const valorIncluyendoIGV = parseFloat(fabibra) * (1 + 0.18);
      const valorTotalSoles = valorIncluyendoIGV * parseFloat(dolar);
      return isNaN(valorTotalSoles) ? 0 : valorTotalSoles.toFixed(2);
    }
    return 0;
  };

  useEffect(() => {
    getprod()
  }, []);
  return {fabibra,
    calcularIGV,
    setFabibra,
    ganancia,
    setGanancia,
    dolar,
    setDolar,
    calcularValorIncluyendoIGV,
    calcularValorTotalSoles,
    calcularValorTotalSoles_singanacia, StateModal, toggleModal, showCard, cardProd, prodc, setcardProd, handleChange, SubmirForm, form, setform, handleAgregarEspecificacion, handleEliminarEspecificacion, handleEspecificacionChange }

}