import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { MovimientoFetch } from "../../../../api/movimiento.fetch";

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
export const UseDocumento = (stateTokenAdmin) => {
    const [stateMovimiento, setstateMovimiento] = useState([]);
    const [form, setform] = useState(formInit)


    const getdocumento = async (token) => {
        let res = await MovimientoFetch.get(token)
        console.log(res)
        setstateMovimiento(res)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await MovimientoFetch.post(stateTokenAdmin, form)
        // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites.
        console.log(res);
    };

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
        handleSubmit
    };
}
