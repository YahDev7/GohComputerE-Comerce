import { useState } from "react";
import { FetchsPedidos } from "../../../../api/pedidos";

export const useDeposito=(statePedido,setenviado)=>{

//  const [enviado, setenviado] = useState({ state: false, text: null });


    const savedepositoBilletera = async (e) => {

        let arrsavede = {
          "documento_id": statePedido._id,
          "enterprise_id": "6463b7176f62eabdc5d7329d",
          "fecha": e.target.fecha_deposito.value,
          "tipo": "INGRESO",
          "metodo_pago": statePedido.metodo_pago,
          "monto_pagar": statePedido?.total_pagar,
          "tipo_compra_venta": "VENTA",
          "estado": "PENDIENTE",
          "fileAdjunto":e.target.file[0]
        }
    
        let resdepopedi = await FetchsPedidos.depositopedido(arrsavede);
        console.log(resdepopedi)
        if (resdepopedi.err) return alert(resdepopedi.message)
    
        setenviado({ state: true, text: resdepopedi.message, data: resdepopedi.data })
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

    const savedeposito = async (e) => {

        let arrsavede = {
          "documento_id": statePedido._id,
          "enterprise_id": "6463b7176f62eabdc5d7329d",
          "fecha": e.target.fecha_deposito.value,
          "tipo": "INGRESO",
          "metodo_pago": statePedido.metodo_pago,
          "nro_operacion": e.target.nro_operacion.value,
          "monto_deposito": Number(e.target.monto_deposito.value),
          "monto_pagar": statePedido?.total_pagar,
          "vuelto": 0,
          "tipo_compra_venta": "VENTA",
          "estado": "PENDIENTE"
        }
    
        let resdepopedi = await FetchsPedidos.depositopedido(arrsavede);
        console.log(resdepopedi)
        if (resdepopedi.err) return alert(resdepopedi.message)
    
        setenviado({ state: true, text: resdepopedi.message, data: resdepopedi.data })
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
    return {
      savedeposito,
      savedepositoBilletera
      }
}