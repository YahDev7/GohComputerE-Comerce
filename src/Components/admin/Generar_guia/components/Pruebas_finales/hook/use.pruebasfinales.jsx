import { useContext, useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { GuiaFetch } from "../../../../../../api/Equipos/informacion.fetch";
import TokenAdminContext from "../../../../../../context/tokenAdmin";
import { guiaFetch } from "../../../../../../api/guia.fetch";

const MySwal = withReactContent(Swal)
let pruebasfinalInit = [{
  nombre: "",
  imagen: ""
}]


export const UsePruebasfinales = () => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const [loaderPruebas, setloaderPruebas] = useState(false);
  const [pruebas, setpruebas] = useState(pruebasfinalInit);
  const [conclusionesPrueba, setconclusionesPrueba] = useState("");
  const [equiposelectPruebas, setequiposelectPruebas] = useState(null);

  const getPruebasByEquipo = async (equipo_id) => {
    setloaderPruebas(true)
    setpruebas(pruebasfinalInit)
    let res = await guiaFetch.getOneEquipo(equipo_id, stateTokenAdmin)

    setconclusionesPrueba("")
    if (res.pruebas_finales) {
      setpruebas(res.pruebas_finales.pruebas)
      setconclusionesPrueba(res.pruebas_finales.conclusiones)
      setequiposelectPruebas(res._id)
      setloaderPruebas(false)
      return
    }
    return
  }

  const changeConclusionesPrueba = (e) => {
    const { name, value } = e.target;
    return setconclusionesPrueba(value)
  };

  const handleAddpruebas = (e, pruebas) => {
    setpruebas([
      ...pruebas,
      ...pruebasfinalInit
    ]);
  };

  const handlePruebasChange = (index, key, value, pruebas) => {
    const newpruebas = [...pruebas];
    newpruebas[index] = {
      ...newpruebas[index],
      [key]: value
    }
    setpruebas(newpruebas)
  };

  const handleDeletePrueba = (index) => {

    setpruebas((prevpruebas) => {
      const newpruebas = [...prevpruebas];
      newpruebas.splice(index, 1);
      return newpruebas;
    });
  };


  const SubmirFormPruebas = async (e, id_equipo, pruebas, conclusiones) => {
    setloaderPruebas(true)

    let res = await GuiaFetch.putPruebas_finales(stateTokenAdmin, { pruebas, conclusiones }, id_equipo)
    console.log(res)
    setloaderPruebas(false)
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
    pruebas,
    conclusionesPrueba,
    equiposelectPruebas,
    getPruebasByEquipo,
    changeConclusionesPrueba,
    handleAddpruebas,
    handlePruebasChange,
    handleDeletePrueba,
    SubmirFormPruebas,
    loaderPruebas
  };
}



