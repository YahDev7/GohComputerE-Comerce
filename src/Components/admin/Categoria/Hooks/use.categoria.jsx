import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { CategoriaFetch } from "../../../../api/categoria.fetch";

const MySwal = withReactContent(Swal)
let formInit = {
  nombre: '',
  estado: 'A'
}

export const UseCatAdmin = (stateTokenAdmin) => {

  const [categoria, setcategoria] = useState([]);
  const [form, setform] = useState(formInit)

  const getcategoria = async (token) => {
    let res = await CategoriaFetch.get(token);
    setcategoria(res)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    let res = await CategoriaFetch.post(stateTokenAdmin, form)
    if (res.statusCode) return alert(res.message.map((el) => el))
    if (res.status) return alert(res.message)

    let resalert = await Swal.fire({
      icon: 'success',
      title: 'Guardado con éxito',
    })
    setform(formInit)
    return;
  }

  useEffect(() => {
    getcategoria(stateTokenAdmin)
  }, []);

  useEffect(() => {
    if (!stateTokenAdmin) return location.href = "/#/login/admin"
  }, [stateTokenAdmin]);
  return {
    categoria,
    formInit,
    setcategoria,
    form,
    setform,
    getcategoria,
    handleChange,
    handleSubmit
  }
}