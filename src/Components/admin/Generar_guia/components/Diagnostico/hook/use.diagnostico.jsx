import { useContext, useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { guiaFetch } from "../../../../../../api/guia.fetch";
import TokenAdminContext from "../../../../../../context/tokenAdmin";
import { GuiaFetch } from "../../../../../../api/Equipos/informacion.fetch";

const MySwal = withReactContent(Swal)

let initComp = [
  { nombre: "", descripcion: "", estado: "" }
]

let initproblema = [
  { problema: "", img: "" }
]
export const UseDiagnostico = () => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const [loaderDiag, setloaderDiag] = useState(false);
  const [comp, setcomp] = useState(initComp);
  const [problema, setproblema] = useState(initproblema);
  const [conclusiones, setconclusiones] = useState("");
  const [equiposelectDiag, setequiposelectDiag] = useState(null);

  const getDiagByEquipo = async (equipo_id) => {
    setloaderDiag(true)
    setcomp( initComp)
    setproblema(initproblema)

    let res = await guiaFetch.getOneEquipo(equipo_id, stateTokenAdmin)

    if(res.diagnostico){
      setcomp(res.diagnostico.componentes)
      setproblema(res.diagnostico.problemas)
      setconclusiones(res.diagnostico.conclusiones)
      setequiposelectDiag(res._id)
      setloaderDiag(false)
      return
    }
    ( initComp)
    setequiposelectDiag(res._id)

    return
  }

  const changeConclusiones = (e) => {
    const { name, value } = e.target;
    console.log(value)
    return setconclusiones(value)
  };

  const handleAddcomp = (e, comp) => {
    setcomp([
      ...comp,
      { descripcion: "", fileUrl: "" }
    ]);
  };

  const handleCompChange = (index, key, value, comp) => {
    console.log(index, key, value, comp)
    const newComp = [...comp];
    newComp[index] = {
      ...newComp[index],
      [key]: value
    }
    setcomp(newComp)
  };

  const handleDeleteComp = (index) => {

    setcomp((prevcomp) => {
      const newComp = [...prevcomp];
      newComp.splice(index, 1);
      return newComp;
    });
  };

  const handleAddproblema = (problema) => {
    setproblema([
      ...problema,
      { problema: "", img: "" }
    ]);
  };


  const handleImgChange = (index, key, value, problema) => {
    console.log(index, key, value, problema)
    const newproblema = [...problema];
    newproblema[index] = {
      ...newproblema[index],
      [key]: value
    }
    setproblema(newproblema)
  };


  const handleDeleteproblema = (index) => {

    setproblema((prevImg) => {
      const newImg = [...prevImg];
      newImg.splice(index, 1);
      return newImg;
    });
  };



  const SubmirFormDiag = async (e, id_equipo,componentes ,problemas,conclusiones) => {
    setloaderDiag(true)
    console.log(id_equipo,componentes,problemas,conclusiones)

    let res = await GuiaFetch.putDiagnostico(stateTokenAdmin, {componentes,problemas, conclusiones }, id_equipo)
    console.log(res)
    setloaderDiag(false)
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
    comp,
    handleAddcomp,
    problema,
    handleAddproblema,
    SubmirFormDiag, equiposelectDiag,
    changeConclusiones, conclusiones,
    handleDeleteComp, handleDeleteproblema, handleCompChange,
    handleImgChange,getDiagByEquipo,loaderDiag
  };
}



