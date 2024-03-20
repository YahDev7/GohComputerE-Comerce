import { Card } from "@tremor/react";

const ModalCustomer = ({ form, handleChange, setform, formInit, toggleModal,
  handleSubmit, }) => {


  let {
    nombres,
    ap_paterno,
    ap_materno,
    dni_ruc,
    email,
    password,
    departamento,
    provincia,
    distrito,
    direccion,
    telefono,
    estado,
    tipo_doc } = form;

  return (
    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
      <input type="hidden" name="_id" id="_id" />
      <div className="relative bg-white rounded-lg p-2 w-[70%]">
        <button onClick={() => { setform(formInit); toggleModal() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>
        <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit(e) }}>

          <button type="submit" className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Enviar</button>

          {/* 
cardProd === true ?{ */}
          <Card>
            {/*  <Title className="pb-3 font-bold ">Detalle Produto</Title> */}
            <div className="grid md:grid-cols-3 gap-4 -mx-3 mb-6">
              <div className="w-full px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                    nombres
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input onChange={(e) => handleChange(e)}
                  value={nombres}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="nombres"
                  id="nombres"
                  type="text"
                  placeholder="nombres"
                />
              </div>
              <div className="w-full px-3 mb-6 md:mb-0">
                <div className="flex">

                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_paterno">
                    ap_paterno
                  </label>
                  <span className="pl-2 text-red-700">*</span>
                </div>
                <input
                  value={ap_paterno}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  onChange={(e) => handleChange(e)}
                  name="ap_paterno"
                  id="ap_paterno"
                  type="text"
                  placeholder="ap_paterno"
                />
              </div>

              <div className="w-full px-3">
                <div className="flex">

                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ap_materno">
                    ap_materno
                  </label>
                  <span className="pl-2 text-red-700">*</span>
                </div>
                <input
                  onChange={(e) => handleChange(e)}
                  value={ap_materno}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="ap_materno"
                  id="ap_materno"
                  type="text"
                  placeholder="ap_materno"
                />

              </div>

              <div className="w-full px-3">

                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="telefono">
                    telefono
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <input
                  onChange={(e) => handleChange(e)}
                  value={telefono}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="telefono"
                  id="telefono"
                  type="text"
                  placeholder="telefono"
                />


              </div>

              <div className="w-full px-3">

                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tipo_doc">
                    Tipo_doc
                  </label>
                  <span className="pl-2 ">*</span>
                </div>
                <select
                  value={tipo_doc}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-lg focus:!ring-blue-500 focus:!border-blue-500 block w-full p-2.5 py-3 px-4 "
                  name="tipo_doc"
                  id="tipo_doc"
                >
                  <option value="">Seleccione</option>
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>

                  {/* Agrega más opciones aquí */}
                </select>

              </div>


              <div className="w-full px-3">
                <div className="flex">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">
                    dni_ruc
                  </label>
                  <span className="pl-2 text-red-700">*</span>
                </div>
                <input
                  value={dni_ruc}
                  onChange={(e) => handleChange(e)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="dni_ruc"
                  id="dni_ruc"
                  type="text"
                  placeholder="URL del Fabricante"
                />
              </div>


            </div>


          </Card>
        </form>
      </div>
    </div>
  );
}

export default ModalCustomer;

