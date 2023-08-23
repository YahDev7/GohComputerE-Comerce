import { useState } from "react";
import { FetchsPedidos } from "../../../../api/pedidos";
import { uploadFilesFetch } from "../../../../api/fetchs";
import withReactContent from "sweetalert2-react-content";

export const useDeposito=(statePedido,setenviado,tokencustomer)=>{

  const MySwal = withReactContent(Swal) 
  //  const [enviado, setenviado] = useState({ state: false, text: null });
const [uploadfile, setuploadfile] = useState(null);

 const handleImagenChange = (e) => {

  const { files } = e.target;
//  const imagenesArray = Array.from(files).map((file) => file);
  setuploadfile(files[0]) 
}; 

    const savedepositoBilletera = async (e) => {

      if(!statePedido._id) return MySwal.fire({
        title: <h2>Error</h2>,
        icon: 'warning'
      })

      if(!e.target.fecha_deposito.value) return MySwal.fire({
        title: <h2>Ingrese fecha de depostio</h2>,
        icon: 'warning'
      })
      if(!uploadfile)return MySwal.fire({
        title: <h2>Ingrese la foto del deposito</h2>,
        icon: 'warning'
      })

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
        if (resdepopedi.err) return alert(resdepopedi.message)
        setenviado({ state: true, text: resdepopedi.message, data: resdepopedi.data })

      let res2= await uploadFilesFetch.saveBilleteraVirtual(uploadfile,tokencustomer, resdepopedi.data );

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

      if(!e.target.fecha_deposito.value) return MySwal.fire({
        title: <h2>Ingrese fecha de depostio</h2>,
        icon: 'warning'
      })

      if(!e.target.nro_operacion.value) return MySwal.fire({
        title: <h2>Ingrese fecha de depostio</h2>,
        icon: 'warning'
      })

      if(!e.target.monto_deposito.value) return MySwal.fire({
        title: <h2>Ingrese fecha de depostio</h2>,
        icon: 'warning'
      })

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