import { useContext, useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import TokenAdminContext from "../../../../../../context/tokenAdmin";
import { GuiaFetch } from "../../../../../../api/Equipos/informacion.fetch";
import { guiaFetch } from "../../../../../../api/guia.fetch";

const MySwal = withReactContent(Swal)
let initProd_Servi_necesario = [
  { nombre: "", cantidad: "", precio: "" }
]

let initProd_Servi_recome = [
  { nombre: "", cantidad: "", precio: "" }
]

export const UseCotizacion = () => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const [loaderCoti, setloaderCoti] = useState(false);
  const [pro_ser_necesarios, setpro_ser_necesarios] = useState(initProd_Servi_necesario);
  const [pro_ser_recomendados, setpro_ser_recomendados] = useState(initProd_Servi_recome);
  const [nota, setnota] = useState("");
  const [equiposelectCotizacion, setequiposelectCotizacion] = useState(null);

  const getCotiByEquipo = async (equipo_id) => {
    setloaderCoti(true)
    setpro_ser_necesarios(initProd_Servi_necesario)
    setpro_ser_recomendados(initProd_Servi_recome)
    let res = await guiaFetch.getOneEquipo(equipo_id, stateTokenAdmin)
    
    if (res.cotizacion) {
      setpro_ser_necesarios(res.cotizacion.pro_ser_necesarios)
      setpro_ser_recomendados(res.cotizacion.pro_ser_recomendados)
      setnota(res.cotizacion.nota)
      setequiposelectCotizacion(res._id)
      setloaderCoti(false)
      return
    }
  }

  const changeNota = (e) => {
    const { name, value } = e.target;
    console.log(value)
    return setnota(value)
  };

  const handleAddpro_ser_necesarios = ( pro_ser_necesarios) => {
    console.log(pro_ser_necesarios)
    setpro_ser_necesarios([
      ...pro_ser_necesarios,
      ...initProd_Servi_necesario
    ]);
  };

  const handlepro_ser_necesariosChange = (index, key, value, pro_ser_necesarios) => {
    const newpro_ser_necesarios = [...pro_ser_necesarios];
    newpro_ser_necesarios[index] = {
      ...newpro_ser_necesarios[index],
      [key]: value
    }
    setpro_ser_necesarios(newpro_ser_necesarios)
  };

  const handleDeletepro_ser_necesarios = (index) => {

    setpro_ser_necesarios((prevpro_ser_necesarios) => {
      const newpro_ser_necesarios = [...prevpro_ser_necesarios];
      newpro_ser_necesarios.splice(index, 1);
      return newpro_ser_necesarios;
    });
  };

  const handleAddpro_ser_recomendados = (pro_ser_recomendados) => {
    setpro_ser_recomendados([
      ...pro_ser_recomendados,
      ...initProd_Servi_recome
    ]);
  };

  const handleProServRecomendadosChange = (index, key, value, pro_ser_recomendados) => {
    console.log(index, key, value, pro_ser_recomendados)
    const newpro_ser_recomendados = [...pro_ser_recomendados];
    newpro_ser_recomendados[index] = {
      ...newpro_ser_recomendados[index],
      [key]: value
    }
    setpro_ser_recomendados(newpro_ser_recomendados)
  };

  const handleDeletepro_ser_recomendados = (index) => {

    setpro_ser_recomendados((prevImg) => {
      const newImg = [...prevImg];
      newImg.splice(index, 1);
      return newImg;
    });
  };

  const SubmirFormCoti = async (e, id_equipo, pro_ser_necesarios, pro_ser_recomendados, nota) => {
    setloaderCoti(true)
    console.log(id_equipo, pro_ser_necesarios, pro_ser_recomendados, nota)

    let res = await GuiaFetch.putCotizacion(stateTokenAdmin, { pro_ser_necesarios, pro_ser_recomendados, nota }, id_equipo)
    console.log(res)
    setloaderCoti(false)
    if (res.statusCode === 400 || res.statusCode === 500) return MySwal.fire({
      title: `${res.message}`,
      icon: 'warning'
    });

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })

    return;
  }


  return {
    getCotiByEquipo,
    changeNota,
    handleAddpro_ser_necesarios,
    handlepro_ser_necesariosChange,
    handleDeletepro_ser_necesarios,
    handleAddpro_ser_recomendados,
    handleProServRecomendadosChange,
    handleDeletepro_ser_recomendados,
    SubmirFormCoti,
    pro_ser_necesarios,
    pro_ser_recomendados,
    nota,
    equiposelectCotizacion,
    loaderCoti
  };
}



