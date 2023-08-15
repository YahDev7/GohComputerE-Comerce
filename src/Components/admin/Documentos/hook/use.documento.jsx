import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { DocumentoFetch } from "../../../../api/documento.fetch";

let formInit = {

    customer_id: '',
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
    estado: 'PENDIENTE',
    tipo_compra_venta: 'VENTA',
    detalle: [],
    dataCustomer: [],
    metodo_pago: '',
}

let formInitCustomer = {
    _id: null,
    nombres: '',
    dni_ruc: ''
}

let formInitProduct = {
    _id: null,
    nomcomp: '',
    precio_venta: '',
    stock: ""
}

export const UseDocumento = (stateTokenAdmin, selectProduct) => {

    const [importe, setimporte] = useState(null);
    const [cantidad, setcantidad] = useState(0);
    const [descuento, setdescuento] = useState(0);
    const [documento, setdocumento] = useState([]);
    const [form, setform] = useState(formInit)
    const [formCustomer, setformCustomer] = useState(formInitCustomer)
    const [formProducto, setformProducto] = useState(formInitProduct)
    const [precioUnitario, setprecioUnitario] = useState(null)
    const [detalleDoc, setDetalleDoc] = useState([])


    const getdocumento = async (token) => {
        let res = await DocumentoFetch.get(token)
        setdocumento(res)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    };
    /* const handleChangeCustomer = (e) => {
        const { name, value } = e.target;
        setformCustomer({ ...form, [name]: value });
    }; */

    const addDetalle = async (e) => {
        const { idcomp, nomcomp } = formProducto
        if (!idcomp) return alert("falta una wea")
        if (!nomcomp) return alert("falta una wea")
        if (!cantidad) return alert("falta una wea")
        if (!importe) return alert("falta una wea")
        let res = detalleDoc.find(e => e.idcomp === idcomp)
        console.log(detalleDoc, res)

        if (res) {
            let newcarr = detalleDoc.map(pro => pro.idcomp === idcomp ? { ...pro, cantidad: pro.cantidad + cantidad, importe: Number(pro.cantidad + cantidad) * Number(pro.precioUnitario) } : pro);
            console.log(newcarr)
            setDetalleDoc(newcarr)

            setdescuento(0)
            setimporte(0)
            setformProducto(formInitProduct)
            setcantidad(0)
            setprecioUnitario(null)
            return

        }


        setDetalleDoc([...detalleDoc, { idcomp, nomcomp, cantidad, descuento, importe, precioUnitario }])

        // const sumAges = detalleDoc.map(obj => obj.importe).reduce((a, b) => a + b);


        setdescuento(0)
        setimporte(0)
        setformProducto(formInitProduct)
        setprecioUnitario(null)
        setcantidad(0)


    };
    const reload = async (e) => {
        return
       /*  e.preventDefault();
        let res = await DocumentoFetch.post(stateTokenAdmin, form) */
    };
    const calcularextra = async (e) => {
        console.log(cantidad,detalleDoc)
        const sub_total = detalleDoc.reduce((acc, obj) => Number(acc) + Number(obj.precioUnitario)*obj.cantidad, 0);
        const descuento_total = detalleDoc.reduce((acc, obj) => Number(acc) + Number(obj.descuento), 0);

        // let total_pagar = (sub_total).toFixed(2)
        let total_pagar = sub_total - descuento_total.toFixed(2)
        Number(total_pagar)
        console.log(detalleDoc)
       return setform({ ...form, sub_total, descuento_total, total_pagar })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let {_id}=formCustomer
        if(!detalleDoc) return alert("falta detalle ")
        let formtodo= {...form,detalle:detalleDoc,customer_id:_id}

        //console.log(formtodo)
        let res = await DocumentoFetch.post(stateTokenAdmin, formtodo)
        console.log(res)
    };

    const handle = async (e) => {
        const { name, value } = e.target;
        if (name === 'cantidad') return handleImporte(Number(value));
        //  if (name === 'precio_venta') return handleImporte(value);
        if (name === 'descuento') return handledescuento(Number(value));
    };

    const handleImporte = async (value) => {
        if (!selectProduct.precio_venta) return
        setimporte((Number(value) * selectProduct.precio_venta).toFixed(2))
        setcantidad(Number(value))
        setprecioUnitario(Number(selectProduct.precio_venta))
    };
    
    const removedetalle = async (id) => {
       let res= detalleDoc.filter(e=>e.idcomp!==id)
       setDetalleDoc(res)
    };

    const handledescuento = async (value) => {
        if (!selectProduct.precio_venta) return
        if (!importe) return
        if (!cantidad) return


        setimporte((selectProduct.precio_venta * cantidad) - Number(value))

        setdescuento(Number(value))
    };

    useEffect(() => {
        calcularextra()
    }, [detalleDoc]);

    /*   useEffect(() => {
          setcantidad(cantidad + cantidad)
      }, [cantidad]); */

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
        handleSubmit,
        formCustomer,
        setformCustomer,
        formProducto,
        setformProducto,
        importe,
        handle,
        descuento,
        cantidad,
        addDetalle, detalleDoc,reload,calcularextra,
        removedetalle,
        setDetalleDoc

    };
}
