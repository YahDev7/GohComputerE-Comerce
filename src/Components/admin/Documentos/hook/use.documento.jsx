import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { DocumentoFetch } from "../../../../api/documento.fetch";

let formInit = {

    //customer_id: '',
    //caja_id: '',
    //enterprise_id: '',
    tipo_documento: '',
    serie: '',
    nro_documento: '',
    fecha: '',
    sub_total: 0,
    descuento_total: 0,
    igv: 0,
    total_pagar: 0,
    estado: '',
    tipo_compra_venta: '',
    detalle: [],
    dataCustomer: [],
    metodo_pago: '',
}

export const UseDocumento = (stateTokenAdmin) => {
    const [documento, setdocumento] = useState([]);
    const [form, setform] = useState(formInit)

    const getdocumento = async (token) => {
        let res = await DocumentoFetch.get(token)
        setdocumento(res)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await DocumentoFetch.post(stateTokenAdmin, form)
        // Aquí puedes enviar los datos del formulario a tu API o hacer lo que necesites.
        console.log(form);
    };

    useEffect(() => {
        getdocumento(stateTokenAdmin)
    }, []);
    useEffect(() => {
        if (!stateTokenAdmin) return location.href = "/#/login/admin"
    }, [stateTokenAdmin]);
    return {
        formInit,
        documento,
        setdocumento,
        form,
        setform,
        getdocumento,
        handleChange,
        handleSubmit
    };
}
