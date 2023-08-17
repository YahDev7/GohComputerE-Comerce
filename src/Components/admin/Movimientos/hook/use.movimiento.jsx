import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { MovimientoFetch } from "../../../../api/movimiento.fetch";
import { DocumentoFetch } from "../../../../api/documento.fetch";

let formInit = {
    /*   documento_id: '',
      enterprise_id: '',
      caja_id: '', */
    fecha: '',
    tipo: '',
    metodo_pago: '',
    nro_operacion: '',
    monto_deposito: 0,
    monto_pagar: 0,
    vuelto: 0,
    observacion: '',
    tipo_compra_venta: '',
    estado: '',
    fileAdjunto: {},
}
export const UseMovimiento = (stateTokenAdmin) => {
    const [stateMovimiento, setstateMovimiento] = useState([]);
    const [form, setform] = useState(formInit)


    const getdocumento = async (token) => {
        let res = await MovimientoFetch.get(token)
        setstateMovimiento(res)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    };

    const handleSubmitMov = async (e) => {
        e.preventDefault();
        let res = await MovimientoFetch.post(stateTokenAdmin, form)
        // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites.
    };



    const getdocumentoid = async(id) => {

        let res= await DocumentoFetch.getOne(id,stateTokenAdmin)
        let {_id,metodo_pago,total_pagar} = res
        setform({...form,documento_id:_id,metodo_pago,monto_pagar:total_pagar})
        console.log(res)
        console.log(form)
    } 

    useEffect(() => {
        getdocumento(stateTokenAdmin)
    }, []);
    useEffect(() => {
        if (!stateTokenAdmin) return location.href = "/#/login/admin"
    }, [stateTokenAdmin]);


    return {
        formInit,
        stateMovimiento,
        setstateMovimiento,
        form,
        setform,
        getdocumento,
        handleChange,
        handleSubmitMov,
        getdocumentoid
    };
}
