import { Card } from "@tremor/react";
import { useState } from "react";
import { LibroFetch } from "../../api/libro.fetch";
import Loader from "../public/Loader";

let initReclamo = {
  dni_ruc: "",
  nombres: "",
  apellidos: "",
  email: "",
  nro_pedido: "",
  reclamo: "",
  estado: "REVISION"

}

const LibroRecla = () => {
  const [stateReclamo, setstateReclamo] = useState(initReclamo)
  const [loaderLibro, setloaderLibro] = useState(false);

  let { dni_ruc,
    nombres,
    apellidos,
    email,
    nro_pedido,
    reclamo } = stateReclamo

  const handleChangeRecla = (e) => {
    const { name, value } = e.target
    setstateReclamo({ ...stateReclamo, [name]: value });
  };


  const handleSubmitRecla = async (e) => {
    //setloaderDoc(true)

    setloaderLibro(true)
    e.preventDefault();


    for (const key in stateReclamo) {
      if (stateReclamo[key].length === 0) {
        return await Swal.fire({
          icon: 'warning',
          title: `Ingresa el ${key} `,
        })
      }

    }
    let res = await LibroFetch.post(stateReclamo)
    setloaderLibro(false)

    if (res?._id) {

      let resalert = await Swal.fire({
        icon: 'success',
        title: `Tu codigo de atencion <strong className="!text-[30px]" >${res._id}</strong> `,
        text: `
          Tambien puedes ver tu codigo en la bandeja de tu correo ${res.email}
        el seguimiento se hace via Whatsapp: 932 069 271 - 936 411 677
        `,
      })
      setstateReclamo(initReclamo)

      return
    }

    await Swal.fire({
      icon: 'warning',
      title: 'Algo salio mal',
    })
    return;
  };

  return (
    
    <div>
{
  loaderLibro && <Loader />
}
      <div className="relative bg-white rounded-lg p-2 w-[80%] max-md:w-96 m-auto mt-5 ">

        <div className="flex justify-between">
          <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">RECLAMACIONES</p>
          <button type="button" className="  block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center ">Estado de mi Reclamo</button>
          <p className="text-blue-700 !text-2xl font-bold ">Fecha del Reclamo: {new Date().getDay()}-{new Date().getDate()}-{new Date().getFullYear()}</p>
        </div>

        <form action="" onSubmit={(e) => handleSubmitRecla(e)}>


          <div className="border border-[#8ec1ff] rounded-xl p-4 mb-5  bg-white shadow" >
            <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">1.-Datos del cliente</p>

            <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">

              <div className="w-full py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    DNI/RUC
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChangeRecla(e)}
                  value={dni_ruc}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="dni_ruc"
                  id="dni_ruc"
                  type="text"
                  placeholder="Ingresa tu DNI o RUC"
                />
              </div>

              <div className="w-full py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    Nombres
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChangeRecla(e)}
                  value={nombres}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="nombres"
                  id="nombres"
                  type="text"
                  placeholder="Ingresa tus nombres"
                />
              </div>

              <div className="w-full py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    Apellidos
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChangeRecla(e)}
                  value={apellidos}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="apellidos"
                  id="apellidos"
                  type="text"
                  placeholder="Ingresa tus Apellidos"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">
              <div className="w-full py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    Email
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChangeRecla(e)}
                  value={email}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Ingresa tu Email"
                />
              </div>
            </div>
          </div>


          <div className="border border-[#8ec1ff] rounded-xl p-4 mt-5  mb-5  bg-white shadow">

            <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">2.- Datos del producto</p>

            <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">
              <div className="w-full py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    Nro de Pedido
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChangeRecla(e)}
                  value={nro_pedido}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="nro_pedido"
                  id="nro_pedido"
                  type="text"
                  placeholder="Ingresa el numero de pedido"
                />
              </div>

              <div className="w-full  py-2 px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                    Reclamo
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <textarea

                  onChange={(e) => handleChangeRecla(e)}
                  value={reclamo}
                  className="h-[250px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="reclamo"
                  id="reclamo"
                  type="text"
                  placeholder="Ingresa atu Reclamo, detallado"
                />
              </div>

            </div>

          </div>

          <button type="submit" className="w-100 block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-3 text-center ">Enviar Reclamo</button>
        </form>

      </div>

    </div>

  );
}

export default LibroRecla;




{/*     <div>

          <p className="text-blue-700 max-md:!text-2xl md:!text-4xl font-bold pb-4 ">3.- Detalle de la Reclamacion</p>

          <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">

            <div className="w-full py-2 px-3">
              <div className="flex">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                  DNI/RUC
                </label>
                <span className="pl-2 ">*</span>
              </div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Codigo"
              />
            </div>

            <div className="w-full py-2 px-3">
              <div className="flex">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                  Nombres
                </label>
                <span className="pl-2 ">*</span>
              </div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Codigo"
              />
            </div>

            <div className="w-full py-2 px-3">
              <div className="flex">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                  Email
                </label>
                <span className="pl-2 ">*</span>
              </div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Codigo"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">



            <div className="w-full py-2 px-3">
              <div className="flex">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="codigo">
                  Codigo
                </label>
                <span className="pl-2 ">*</span>
              </div>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Codigo"
              />
            </div>
          </div>
        </div> */}