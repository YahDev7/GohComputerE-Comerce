import { useEffect, useState } from "react";
import { FetchsPedidos } from "../../../Fetchs/pedidos";
import { useParams} from "react-router-dom"


const Deposito = () => {
  //si el pago ya se realizo
  const [enviado, setenviado] = useState({state:false,text:null});
  //total que se debe pagar
  const [pagardeposito, setpagardeposito] = useState([]);
  //si ya se envio los datos del deposito
  const [depostiotrue, setdepostiotrue] = useState(null);
  
  let {idpedido}=useParams();

  const totalpagar=async()=>{
    let res= await FetchsPedidos.getDetallepedido(idpedido);       
    setpagardeposito(res)
 }
 const confirmDeposito=async()=>{
     let verifydep=await FetchsPedidos.verifydeposito(idpedido);
     setdepostiotrue(verifydep);
 }


 useEffect(() => {
  totalpagar();
  confirmDeposito();
 }, []);

    const savedeposito=async(e)=>{
      let arrsavede=[];
        arrsavede.push(
          {
            "monto_pagar":pagardeposito[0]?.total,
            "id_pedido":idpedido,
            "nro_operacion":e.target.nro_operacion.value,
            "metodo_pago":e.target.metodo_pago.value,
            "fecha_deposito":e.target.fecha_deposito.value,
            "monto_deposito":e.target.monto_deposito.value,
          },
        );

        let resdepopedi=await FetchsPedidos.depositopedido(arrsavede);
          if(resdepopedi.err) return alert(resdepopedi.Text)
        setenviado({state:true,text:resdepopedi.Text})
   /*    for(let ind of e.target){
        if(ind.value){
          let  na=ind.name;
           let va=ind.value;
           console.log(na);
          console.log({na:va});
         arrsavede=[
            ...arrsavede,
            {ind.name:ind.value}
          ] 
        }
      } */


    }


    return (  
        <>

        {depostiotrue?.verify?
        <div  className="containerDepositopedido pb-5 pt-5">
          <h2>
            {depostiotrue.Text} 
          </h2>

          <button className="btn btn-success" onClick={()=>location.href="#/pedidos"}>Ir a mis pedidos</button>
        </div>
        : 
        
        enviado.state  /*|| depostiotrue.verify*/
          ? 
            <div  className="containerDepositopedido pb-5 pt-5">
              <h2>
              {enviado.text}
              {/*  {depostiotrue.Text} */}
              </h2>

              <button className="btn btn-success" onClick={()=>location.href="#/pedidos"}>Ir a mis pedidos</button>
            </div>
          :
            <div className="containerDepositopedido pb-5">
                <h2 >Datos del Pedido</h2>
                <div className="pt-4">
                    <p className="mb-2"><strong>Nro pedido:</strong> {idpedido}</p>
                    <p className="mb-2"><strong>Total a pagar:</strong> s/{pagardeposito[0]?.total}</p>
                </div>

                <form action=""  onSubmit={(e)=>{
                  e.preventDefault();
                  savedeposito(e)}}
                  >
                    <div className="row">

                    <div className="form-floating  mb-3 col-4">
                        <input type="text" name="nro_operacion" className="form-control" />
                        <label htmlFor="nro_operacion" className="ps-4">Nro Operacion</label>
                        <strong className="errorcampo "></strong>
                      </div>
                      <div className="form-floating  mb-3 col-4">
                      <select className="form-select" name="metodo_pago" id="">
                      <option value="">Seleccione</option>
                        <option value="deposito">Deposito</option>
                        <option value="transferencia">Transferencia</option>
                      </select>
                        <label htmlFor="metodo_pago" className="ps-4">Metodo de Pago</label>
                        <strong className="errorcampo "></strong>
                      </div>

                    </div>

                    <div className="row">
                      <div className="form-floating  mb-3 col-4">
                        <input type="date" name="fecha_deposito" className="form-control" />
                        <label htmlFor="fecha_deposito" className="ps-4">Fecha Deposito</label>
                        <strong className="errorcampo "></strong>
                      </div>
                      <div className="form-floating  mb-3 col-4">
                        <input type="text" name="monto_deposito" className="form-control" />
                        <label htmlFor="monto_deposito" className="ps-4">Monto Deposito</label>
                        <strong className="errorcampo "></strong>
                      </div>

                    </div>
                  
                  
                  
                <button type="submit" className="btn btnpedido mt-3 mb-3" >Guardar</button>
                </form>

                
            </div> 
        
        }

        
        </>
    );
}
 
export default Deposito;

