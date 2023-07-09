import { useState } from "react";



const Compra = () => {

    const [metodoSeleccionado, setMetodoSeleccionado] = useState('');

    const [formData, setFormData] = useState({
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
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleMetodoSeleccionado = (e) => {
        setMetodoSeleccionado(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica de envío del formulario
        console.log(formData);
    };

    return (
        <>
           <div className="flex justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-6xl text-center mt-5">Facturación y Envío</h2>
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="nombres" className="block mb-2">Nombres:</label>
            <input type="text" id="nombres" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="apellidos" className="block mb-2">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="dni" className="block mb-2">DNI:</label>
            <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="departamento" className="block mb-2">Departamento:</label>
            <input type="text" id="departamento" name="departamento" value={formData.departamento} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="provincia" className="block mb-2">Provincia:</label>
            <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="distrito" className="block mb-2">Distrito:</label>
            <input type="text" id="distrito" name="distrito" value={formData.distrito} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="direccion" className="block mb-2">Dirección:</label>
            <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="referencia" className="block mb-2">Referencia:</label>
            <input type="text" id="referencia" name="referencia" value={formData.referencia} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="celular" className="block mb-2">Celular:</label>
            <input type="text" id="celular" name="celular" value={formData.celular} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block mb-2">Correo:</label>
            <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Enviar</button>
        </form>
      </div>
      <div className="max-w-md mx-auto">
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
            {/* Aquí puedes mostrar detalles adicionales del método de pago seleccionado */}
          </div>
        )}
      </div>
    </div>

        </>


    );




}

export default Compra;