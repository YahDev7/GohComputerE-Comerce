
import { useContext, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import CarritoContext from "../../../context/carrito";
import { FetchCompra } from "../../../api/fetchs";
import TokenContext from "../../../context/token";
import { FetchsPedidos } from "../../../api/pedidos";

const MySwal = withReactContent(Swal)
const initDataCustomer = {
  nombres: '',
  apellidos: '',
  dni: '',
  departamento: '',
  provincia: '',
  distrito: '',
  direccion: '',
  referencia: '',
  celular: '',
  correo: ''
}
const DatosEnvio = () => {
 
  const data = [
    {
      id: 1,
      title: 'PLIN',
      content: `Tiene que escanear el codigo QR que se le presentara en
       el paso meotodo de pago, para luego adjuntarlo en como un archivo y asi validar el pago`,
    },
    {
      id: 2,
      title: 'YAPE',
      content: 'Tiene que escanear el codigo QR que se le presentara en el paso meotodo de pago, para luego adjuntarlo en como un archivo y asi validar el pago',
    },
    {
      id: 3,
      title: 'TRANSFERENCIA BCP',
      content: 'Tiene que transferir al nro de cuenta del BPC o interbancario, para luego adjuntar el nro de operacion, la fecha y el monto depositado',
    },
    {
      id: 4,
      title: 'TRANSFERENCIA INTERBANK',
      content: 'Tiene que transferir al nro de cuenta del BPC o interbancario, para luego adjuntar el nro de operacion, la fecha y el monto depositado',
    },
    
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    if (selectedItem === id) {
      setSelectedItem(null);
    } else {
      setSelectedItem(id);
    }
  };
 
  const { itemsCarr, setItemsCarr, subtotal,tokcarr } = useContext(CarritoContext)
  const { stateToken } = useContext(TokenContext)

  const [formData, setFormData] = useState(initDataCustomer);


  const confirmPedido = async () => {
    if (!stateToken) return location.href = "#/login"
    if (!tokcarr) return location.href = "#/login"

    const residpedido = await FetchsPedidos.save(tokcarr, stateToken, subtotal,formData,data[selectedItem-1].title);
    console.log(residpedido)
     if (!residpedido.err) {
      localStorage.removeItem("tokencarr")
      return location.href = "#/confirmado/" + residpedido.data;
    } 
  }




  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleMetodoSeleccionado = (e) => {
    setMetodoSeleccionado(e.target.value);
  };

/*   const handleSubmit = (e) => {
    e.preventDefault();

    if (itemsCarr.length === 0) return MySwal.fire({
      title: <h2>Carrito vacio</h2>,
      icon: 'warning'
    })
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] === '') {
          return MySwal.fire({
            title: `<h2>Ingresa los ${key}</h2>`,
            icon: 'warning'
          });
        }
      } 

    return location.href = "/#/confirmado/64bbef0582dfab07f5585a63"

  }; */


  return (
    <>
      <div className="grid gap-4 grid-cols-2 m-4 max-md:grid-cols-1">
        <div className=" mx-auto w-100">
          <form onSubmit={(e)=>{e.preventDefault(); confirmPedido()}} >
            <h2 className="!text-4xl text-center mt-5 text-blue-800 font-bold">Facturación </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="">
                <label htmlFor="nombres" className="block mb-2 font-semibold">Nombres:</label>
                <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="apellidos" className="block mb-2 font-semibold">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="dni" className="block mb-2 font-semibold">DNI:</label>
                <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="celular" className="block mb-2 font-semibold">Celular:</label>
                <input type="text" id="celular" name="celular" value={formData.celular} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="correo" className="block mb-2 font-semibold">Correo:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>


            </div>
            <h2 className="!text-4xl text-center mt-5 text-blue-800 font-bold">Datos envio </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

              <div >
                <label htmlFor="departamento" className="block mb-2">Departamento:</label>
                <input type="text" id="departamento" name="departamento" value={formData.departamento} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="provincia" className="block mb-2">Provincia:</label>
                <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>

              <div className="">
                <label htmlFor="distrito" className="block mb-2">Distrito:</label>
                <input type="text" id="distrito" name="distrito" value={formData.distrito} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="direccion" className="block mb-2">Dirección:</label>
                <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div className="">
                <label htmlFor="referencia" className="block mb-2">Referencia:</label>
                <input type="text" id="referencia" name="referencia" value={formData.referencia} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
            </div>

            <h2 className="!text-4xl text-center mt-5 text-blue-800 font-bold">Metodos de pago</h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-1">
              <div className="">
                {data.map((item) => (
                  <div key={item.id} className="mb-4">
                    <button type="button"
                      className={`w-100 border rounded-lg p-2 text-left focus:outline-none font-semibold ${selectedItem === item.id ? 'bg-indigo-600 text-white' : 'bg-gray-200'
                        }`}
                      onClick={() => handleClick(item.id)}
                    >
                      {item.title}
                    </button>
                    {selectedItem === item.id && (
                      <div className="bg-gray-100 rounded-b-lg p-4">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button type="submit"  className="col-span-2 bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded mt-4">Confirmar Pedido</button>
          </form>
        </div>

        <div className="mx-auto p-3">
          <p className="text-blue-700 font-bold !text-3xl text-center ">RESUMEN</p>

          <div className="flex justify-between">

            <h3 className="font-bold !text-2xl text-gray-700">Producto</h3>
            <h3 className="font-bold !text-2xl text-gray-700">Sub total</h3>
          </div>
          <div>
            {
              itemsCarr.map((el) =>
                <div className="mb-2 grid grid-cols-4" style={{ borderBottom: "1px solid #ccc", paddingBottom: "20px" }}>
                  <div className="col-start-1 ">
                    <img src={el.img} alt="" style={{ width: "80px" }} />
                  </div>
                  <div className="col-start-2 col-end-4 ">
                    <div className="nombre">
                      <a href={`#/description/${el.id}`}>
                        {el.nombre}
                      </a>
                    </div>
                    <div className="precio grid grid-cols-5 ">

                      <p className="col-start-2 col-end-5 ">x{el.unidad} </p>
                    </div>
                  </div>
                  <div className="justify-self-center" style={{ alignSelf: "center" }} >
                    <p className="col-start-2 col-end-5 ">{el.precio * el.unidad} </p>
                  </div>
                </div>
              )
            }
          </div>

          <div className="flex justify-between">
            <p className="text-blue-700 font-bold !text-3xl">Total</p>
            <p className="text-blue-700 font-bold !text-3xl">S/{subtotal}</p>
          </div>
        </div>
        {/*      <div className=" mx-auto">
          <h2 className="text-6xl text-center mt-5">Método de Pago</h2>
          <div className="mt-4">
            <p className="block mb-2">Selecciona un método de pago:</p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input type="radio" name="metodoPago" value="Yape" checked={metodoSeleccionado === 'Yape'} onChange={handleMetodoSeleccionado} className="mr-2" />
                <span>Yape</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="metodoPago" value="Plin" checked={metodoSeleccionado === 'Plin'} onChange={handleMetodoSeleccionado} className="mr-2" />
                <span>Plin</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="metodoPago" value="TransferenciaBCP" checked={metodoSeleccionado === 'TransferenciaBCP'} onChange={handleMetodoSeleccionado} className="mr-2" />
                <span>Transferencia bancaria BCP</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="metodoPago" value="TransferenciaInterbank" checked={metodoSeleccionado === 'TransferenciaInterbank'} onChange={handleMetodoSeleccionado} className="mr-2" />
                <span>Transferencia bancaria Interbank</span>
              </label>
            </div>
          </div>
          {metodoSeleccionado && (
            <div className="mt-4">
              <p>Has seleccionado el método de pago: {metodoSeleccionado}</p>
            </div>
          )}
        </div> */}
      </div>


    </>


  );




}

export default DatosEnvio;