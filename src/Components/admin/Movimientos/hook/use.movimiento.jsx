import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { MovimientoFetch } from "../../../../api/movimiento.fetch";
import { DocumentoFetch } from "../../../../api/documento.fetch";
import { CompraFetch } from "../../../../api/compra.fetch";
import { uploadFilesFetch } from "../../../../api/fetchs";
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
let initfiles = [
    { nombre: "", URL: "" }
]
export const UseMovimiento = (stateTokenAdmin) => {
    const [loaderMov, setloaderMov] = useState(false);

    const [stateMovimiento, setstateMovimiento] = useState([]);
    const [formMov, setformMov] = useState(formInit)
    const [uploadfileMovAd, setuploadfileMovAd] = useState(null)
    const [detalle, setdetalle] = useState(formInit)


    const handleFileChange = (e) => {
        const { files } = e.target;
        setuploadfileMovAd([files[0]])
    };

    const getMovimiento = async (token) => {
        setloaderMov(true)
        let res = await MovimientoFetch.get(token)
        setstateMovimiento(res)
        setloaderMov(false)
    }
    const handleChangeMov = (e) => {
        const { name, value } = e.target
        if (name === "monto_deposito") return vuelto(value)
        setformMov({ ...formMov, [name]: value });
    };

    const handleSubmitMov = async (e) => {
        e.preventDefault();

        setloaderMov(true)
        if (formMov.vuelto < 0) {
            setloaderMov(false)

            await MySwal.fire({
                title: <h2>Falta el resto</h2>,
                icon: 'warning'
            })
            return
        }
        let res = await MovimientoFetch.post(stateTokenAdmin, { ...formMov, vuelto: Number(formMov.vuelto), monto_deposito: Number(formMov.monto_deposito) })
        setloaderMov(false)
        if (uploadfileMovAd) {
            setloaderMov(true)

            let res2 = await uploadFilesFetch.saveBilleteraVirtualAdmin(uploadfileMovAd, stateTokenAdmin, res.data);
            setloaderMov(false)

            if (res2.statusCode === 500) return MySwal.fire({
                title: <h2>Error de servidor</h2>,
                icon: 'warning'
            })
            if (!res2) return alert("no se consigui subir el archivo")
        }



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
        setloaderMov(true)

        let res = await DocumentoFetch.getOne(id, stateTokenAdmin)
        let { _id, metodo_pago, total_pagar, tipo_compra_venta, tipo_documento, estado } = res
        setformMov({
            documento_id: _id, metodo_pago, monto_pagar: total_pagar, tipo_compra_venta, tipo: tipo_documento, estado
        })
        setloaderMov(false)
    }

    const getdocumentoCompraid = async (id) => {
        setloaderMov(true)

        let res = await CompraFetch.getOne(id, stateTokenAdmin)
        let { _id, metodo_pago, total_pagar, tipo_compra_venta, tipo_documento, estado } = res
        setformMov({
            documento_id: _id, metodo_pago, monto_pagar: total_pagar, tipo_compra_venta, tipo: tipo_documento, estado
        })
        setloaderMov(false)
    }


    const vuelto = async (value) => {
        let valueNumber = Number(value).toFixed(2)
        let newvuelto = Number(valueNumber - Number(formMov.monto_pagar).toFixed(2)).toFixed(2)

        setformMov({ ...formMov, monto_deposito: Number(valueNumber), vuelto: Number(newvuelto) })

    }
    const getDetalle = async (id) => {
        setloaderMov(true)

        let res = await MovimientoFetch.getOne(id, stateTokenAdmin)
        console.log(res)
        setdetalle(res)
        setloaderMov(false)
    }

    useEffect(() => {
        getMovimiento(stateTokenAdmin)
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
        getMovimiento,
        handleChangeMov,
        handleSubmitMov,
        getdocumentoid,
        loaderMov, getDetalle,
        getdocumentoCompraid,
        handleFileChange
    };
}
