import { useState } from "react";
import { FetchsPedidos } from "../../../../api/pedidos";
import { uploadFilesFetch } from "../../../../api/fetchs";

export const useDeposito=(statePedido,setenviado,tokencustomer)=>{

//  const [enviado, setenviado] = useState({ state: false, text: null });
const [uploadfile, setuploadfile] = useState(null);

 const handleImagenChange = (e) => {

  const { files } = e.target;
//  const imagenesArray = Array.from(files).map((file) => file);
  setuploadfile(files[0]) 
}; 

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
        }
     
        let resdepopedi = await FetchsPedidos.depositopedido(arrsavede);
        console.log(resdepopedi)
        if (resdepopedi.err) return alert(resdepopedi.message)
        setenviado({ state: true, text: resdepopedi.message, data: resdepopedi.data })

      let res2= await uploadFilesFetch.saveBilleteraVirtual(uploadfile,tokencustomer, resdepopedi.data );

       console.log(res2)
        if(!res2) return alert("no se consigui subir el archivo")

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
      savedepositoBilletera,
      handleImagenChange
      }
}