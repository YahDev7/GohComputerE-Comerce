import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { DocumentoFetch } from "../../../../api/documento.fetch";
const MySwal = withReactContent(Swal)

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

export const UseDocumento = (stateTokenAdmin) => {

    const [importe, setimporte] = useState(null);
    const [cantidad, setcantidad] = useState(0);
    const [descuento, setdescuento] = useState(0);
    const [documento, setdocumento] = useState([]);
    const [form, setform] = useState(formInit)
    const [formCustomer, setformCustomer] = useState(formInitCustomer)
    const [formProducto, setformProducto] = useState(formInitProduct)
    const [precioUnitario, setprecioUnitario] = useState(null)
    const [detalleDoc, setDetalleDoc] = useState([])
    const [selectCustomer, setselectCustomer] = useState(null);
    const [selectProduct, setselectProduct] = useState(null);

    const [StateModalCliente, setStateModalCliente] = useState(false);
    const toggleModalcliente = () => {
        if (StateModalCliente) return setStateModalCliente(false)
        if (!StateModalCliente) return setStateModalCliente(true)
    }

    const [StateModalProducto, setStateModalProducto] = useState(false);
    const toggleModalProducto = () => {
        if (StateModalProducto) return setStateModalProducto(false)
        if (!StateModalProducto) return setStateModalProducto(true)
    }

    const [StateModalMovimiento, setStateModalMovimiento] = useState(false);
    const toggleModalMovimiento = () => {
        if (StateModalMovimiento) return setStateModalMovimiento(false)
        if (!StateModalMovimiento) return setStateModalMovimiento(true)
    }



    const getdocumento = async (token) => {
        let res = await DocumentoFetch.get(token)
        setdocumento(res)
    }

    const anular = async (id) => {

        let res2 = await MySwal.fire({
            title: '¿Estas seguro de anular este registro?',
            text: "Se anulara de manera permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Anular'
          })
      
          if (res2.isConfirmed) {
            let res= await DocumentoFetch.postAnaular(stateTokenAdmin,id)

             if(res.status) return  Swal.fire(
              'Alerta!',
              res.message,
              'warning'
            ) 
    
            if(res.statusCode) return  Swal.fire(
              'Alerta!',
              res.message,
              'warning'
            ) 
    
            return  Swal.fire(
              'Eliminado!',
              'El registro fue eliminado con exito',
              'success'
            )
      
          }


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

        if (res) {
            let newcarr = detalleDoc.map(pro => pro.idcomp === idcomp ? { ...pro, cantidad: pro.cantidad + cantidad, importe: Number(pro.cantidad + cantidad) * Number(pro.precioUnitario) } : pro);
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
        const sub_total = detalleDoc.reduce((acc, obj) => Number(acc) + Number(obj.precioUnitario) * obj.cantidad, 0);
        const descuento_total = detalleDoc.reduce((acc, obj) => Number(acc) + Number(obj.descuento), 0);

        // let total_pagar = (sub_total).toFixed(2)
        let total_pagar = sub_total - descuento_total.toFixed(2)
        Number(total_pagar)
        return setform({ ...form, sub_total, descuento_total, total_pagar })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let { _id } = formCustomer
        if (!detalleDoc) return alert("falta detalle ")
        let formtodo = { ...form, detalle: detalleDoc, customer_id: _id }

        let res = await DocumentoFetch.post(stateTokenAdmin, formtodo)
        if (res.statusCode) return alert(res.message.map((el) => el))
        if (res.status) return alert(res.message)
        let resalert = await Swal.fire({
            icon: 'success',
            title: 'Guardado con éxito',
        })
        setform(formInit)
        setformCustomer(formInitCustomer)
        setformProducto(formInitProduct)
        setDetalleDoc([])
        return;
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
        let res = detalleDoc.filter(e => e.idcomp !== id)
        setDetalleDoc(res)
    };

    const handledescuento = async (value) => {
        if (!selectProduct.precio_venta) return
        if (!importe) return
        if (!cantidad) return


        setimporte((selectProduct.precio_venta * cantidad) - Number(value))

        setdescuento(Number(value))
    };


    const handleChangeTableCustomer = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        if (selectedRows.length > 1) return alert("Solo selecciona un cliente");
        setselectCustomer(selectedRows[0])
    };

    const handleChangeTableProducto = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        if (selectedRows.length > 1) return alert("Solo selecciona un cliente");
        setselectProduct(selectedRows[0])
    };


    const handleSelect = () => {
        let { nombres, dni_ruc, _id } = selectCustomer

        setformCustomer({ ...formCustomer, nombres, dni_ruc, _id });
        toggleModalcliente()
        // setToggleClearRows(!toggledClearRows);
    }


    const handleSelectProduct = () => {

        let { nomcomp, precio_venta, idcomp, stock } = selectProduct

        setformProducto({ ...formProducto, nomcomp, precio_venta, stock, idcomp });

        toggleModalProducto()
        // setToggleClearRows(!toggledClearRows);
    }

   /*  const getdocumentoid = async(id) => {

        let res= await DocumentoFetch.getOne(id,stateTokenAdmin)
        setform(res)
    } */
    


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
        addDetalle, detalleDoc, reload, calcularextra,
        removedetalle,
        setDetalleDoc,
        toggleModalcliente,
        toggleModalProducto,
        StateModalCliente,
        StateModalProducto,
        handleChangeTableCustomer,
        handleChangeTableProducto,
        handleSelect,
        handleSelectProduct,
        StateModalMovimiento,
        toggleModalMovimiento,
        anular
       /*  getdocumentoid */
    };
}
