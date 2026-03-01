import { useContext, useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { GuiaFetch } from "../../../../../../api/Equipos/informacion.fetch";
import TokenAdminContext from "../../../../../../context/tokenAdmin";
import { guiaFetch } from "../../../../../../api/guia.fetch";

const MySwal = withReactContent(Swal)
let initformInfo = {
  tipo: "",
  modelo: "",
  comentario_cliente: "",
  observaciones: "",
  tiempo_uso: "",
}

let initfiles = []

export const UseInformacion = () => {
  const { stateTokenAdmin } = useContext(TokenAdminContext)

  const [loaderInfo, setloaderInfo] = useState(false);
  const [equiposelect, setequiposelect] = useState(null);
  const [ImgInfo, setImgInfo] = useState(initfiles);
//  const [SelectImg, setSelectImg] = useState([]);
  const [isChecked, setIsChecked] = useState(false); // State variable for checkbox
  const [Info, setInfo] = useState(initformInfo);

  const getinfoByEquipo = async (equipo_id) => {
    setloaderInfo(true)
    setInfo(initformInfo)

    let res = await guiaFetch.getOneEquipo(equipo_id, stateTokenAdmin)
    if(res.informacion_guia){
      setInfo(res.informacion_guia)
      setequiposelect(res._id)
      setloaderInfo(false)
      return
    }
    setequiposelect(res._id)

    return
  
  }


  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update state on checkbox change
  };

  const handleImgChange = (e,i) => {
    const {files}=e.target

 
    const imagenesArray = Array.from(files).map((file) =>{
      return file
    });
    setImgInfo([
      ...ImgInfo,
      ...imagenesArray
    ])
  };

  const SubmirFormImgInfo = async (e,id_equipo,Info) => {
  /*   console.log(Info)
    console.log(ImgInfo)
    console.log(isChecked) */
    
    setloaderInfo(true)
    let res = await GuiaFetch.put(stateTokenAdmin,{...Info,reparacion_otro:isChecked},id_equipo)
    console.log(res)
    setloaderInfo(false)

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


  const changeInfo = (e) => {
    const { name, value } = e.target;
    console.log(value)
    return setInfo({
      ...Info,
      [name]: value
    })
  };

   const handleDeleteImg = (index) => {
    setImgInfo((prevForm) => {
      const newEspecificaciones = [...prevForm];
      newEspecificaciones.splice(index, 1);
      return newEspecificaciones
    });
  };  





  return {
    changeInfo,
    Info,
    getinfoByEquipo,
    SubmirFormImgInfo,
//     handleAddImgInfo, 
    loaderInfo,
    ImgInfo,
    isChecked,
    handleDeleteImg,
    handleCheckboxChange,
    handleImgChange,
    equiposelect
  };
}



