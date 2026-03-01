import { useDeposito } from "../deposito/hook/useDeposito";

const Plin = ({ statePedido,setenviado,stateToken }) => {
    const {savedepositoBilletera,handleImagenChange } = useDeposito(statePedido,setenviado,stateToken)


    return (
        <>

<div className="containerDepositopedido pb-5">
          <h2 className="text-blue-900 font-semibold">Datos del Pedido</h2>
          <div className="pt-4">
            <p className="mb-2"><strong>Nro pedido:</strong> {statePedido._id}</p>
            <p className="mb-2"><strong>Total a pagar:</strong> <strong className="text-blue-800">s/{statePedido?.total_pagar}</strong>   </p>
          </div>
      

            <form action=""  onSubmit={(e) => {
              e.preventDefault();
              savedepositoBilletera(e)
            }} >
                <div>
                    <div className="grid grid-cols-2">
                        <div className="mt-4">
                            <h3 className="font-semibold text-blue-900 !text-4x1" htmlFor="">Adjunta el archivo</h3>
                            <input type="file" onChange={(e) => handleImagenChange(e)} name="file" className=" mt-3 relative col-start-1 col-end-4 m-0 block w-72 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />

                        </div>
                        <div className="mt-4 ">
                            <label htmlFor="fecha_deposito " className="font-semibold text-blue-900 !text-4x1 " >Fecha Deposito</label>
                            <input type="date" name="fecha_deposito" className="form-control w-72 mt-3" />
                        </div>
                    </div>

                    <div className="text-center font-semibold text-blue-900 !text-4x1">
                        Escanea el codigo QR PLIN

                        <div className="flex justify-center items-center">

                            <img width="200px" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1690084845/image_81_z9dwim.png" alt="" />
                        </div>

                    </div>
                    <button type="submit" className="btn !bg-blue-700 mt-3 mb-3" >Guardar</button>

                </div>

            </form>
            
        </div>

        </>
    );
}

export default Plin;
