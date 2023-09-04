import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { MovimientoFetch } from "../../../../api/movimiento.fetch";
import { DocumentoFetch } from "../../../../api/documento.fetch";
const MySwal = withReactContent(Swal)

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
    const [formMov, setformMov] = useState(formInit)
    const [ftemproral, setftemproral] = useState(formInit)


    const getdocumento = async (token) => {
        let res = await MovimientoFetch.get(token)
        setstateMovimiento(res)
    }
    const handleChangeMov = (e) => {
        const { name, value } = e.target
        setformMov({ ...formMov, [name]: value });
    };

    const handleSubmitMov = async (e) => {
        e.preventDefault();
      
        let res = await MovimientoFetch.post(stateTokenAdmin, formMov)


        if (res.statusCode) return await MySwal.fire({
            title: <h2>{res.message}</h2>,
            icon: 'error'
        })
        if (res.status) return await MySwal.fire({
            title: <h2>{res.message}</h2>,
            icon: 'error'
        })

        await MySwal.fire({
            title: <h2>{res.message}</h2>,
            icon: 'success'
        })
        setformMov(formInit)
        return;
    };



    const getdocumentoid = async (id) => {

        let res = await DocumentoFetch.getOne(id, stateTokenAdmin)
        let { _id, metodo_pago, total_pagar, tipo_compra_venta, tipo_documento, estado } = res
        setformMov({
             documento_id: _id, metodo_pago, monto_pagar: total_pagar, tipo_compra_venta, tipo: tipo_documento, estado
            })
            
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
        formMov,
        setformMov,
        getdocumento,
        handleChangeMov,
        handleSubmitMov,
        getdocumentoid
    };
}
