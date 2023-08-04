import { useContext, useEffect, useState } from "react";
import { FetchSubCat } from "../../../../api/fetchs";
import TokenAdminContext from "../../../../context/tokenAdmin";
import { SubCategoriaFetch } from "../../../../api/subcategoria.fetch";



let formInit = {
  nombre: '',
  categoria_id: null,    //url_imagen: '',
  estado: 'A'
}


export const UseSubCatAdmin = (stateTokenAdmin) => {

  const [subcategoria, setsubcategoria] = useState([]);
  const [form, setform] = useState(formInit)

  const getsubcategoria = async () => {
    let res = await SubCategoriaFetch.get(stateTokenAdmin);
    console.log(res)
    setsubcategoria(res)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(form)

    let res = await SubCategoriaFetch.post(stateTokenAdmin, form)

    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    
  }

  useEffect(() => {
    getsubcategoria(stateTokenAdmin)
  }, []);

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);

  return {
    subcategoria,
    formInit,
    form,
    handleSubmit,
    setform,
    handleChange
  }
}


