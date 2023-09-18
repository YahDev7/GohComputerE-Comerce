import { useEffect, useState } from "react";
import withReactContent from "sweetalert2-react-content";
import { DocumentoFetch } from "../../../../api/documento.fetch";
import { ProductosFetch } from "../../../../api/productos";
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
    nombre: '',
    precio_venta: '',
    stock: ""
}

export const UseDocumento = (stateTokenAdmin,getprod) => {

    const [loaderDoc, setloaderDoc] = useState(false);
    const [detalleTable, setdetalleTable] = useState([])

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


    const [StateModalDetalleDoc, setStateModalDetalleDoc] = useState(false);
    const toggleModalDetalleDoc = () => {
        if (StateModalDetalleDoc) return setStateModalDetalleDoc(false);
        if (!StateModalDetalleDoc) return setStateModalDetalleDoc(true)
    }

    const [StateModalMovimiento, setStateModalMovimiento] = useState(false);
    const toggleModalMovimiento = () => {
        // setloaderDoc(true)
        if (StateModalMovimiento) return setStateModalMovimiento(false)
        if (!StateModalMovimiento) return setStateModalMovimiento(true)

    }

    const getDetalleDoc = async (id) => {
        setloaderDoc(true)

        let res = await DocumentoFetch.getOne(id, stateTokenAdmin)
        setdetalleTable(res.detalle[0] || res.detalle)
        setloaderDoc(false)

    }

    const getdocumento = async (token) => {
        setloaderDoc(true)
        let res = await DocumentoFetch.get(token)
        setdocumento(res)
        setloaderDoc(false)

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
            setloaderDoc(true)

            let res = await DocumentoFetch.postAnaular(stateTokenAdmin, id)
            setloaderDoc(false)

            if (res.status) return Swal.fire(
                'Alerta!',
                res.message,
                'warning'
            )

            if (res.statusCode) return Swal.fire(
                'Alerta!',
                res.message,
                'warning'
            )


            Swal.fire(
                'Eliminado!',
                'El registro fue eliminado con exito',
                'success'
            )
            getdocumento(stateTokenAdmin)
            getprod()
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
        
        const { _id, nombre,stock } = formProducto
       
        if (!_id) return await Swal.fire({
            icon: 'warning',
            title: 'Seleccione un prod',
        })
        if (!nombre) return await Swal.fire({
            icon: 'warning',
            title: 'Seleccione un prod',
        })
        if (!cantidad) return await Swal.fire({
            icon: 'warning',
            title: 'Seleccione un prod',
        })
        if (!importe) return await Swal.fire({
            icon: 'warning',
            title: 'Seleccione un prod',
        })
        if(detalleDoc.length=== 0){
            if(stock-cantidad<0) return await Swal.fire({
                icon: 'warning',
                title: 'La cantidad supera el stock',
            })
        }

       
       

        console.log(formProducto,detalleDoc,cantidad)


        let res = detalleDoc.find(e => e._id === _id)

        if (res) {
            if(detalleDoc.cantidad-stock===0)return await Swal.fire({
                icon: 'warning',
                title: 'No hay stock con la suma de los prodcutos que ya tienens en detalle',
            })
          /*   let getstock = await ProductosFetch.postStock(stateTokenAdmin, _id, { cantidad })
            console.log(getstock)

            if (getstock.status === 404) return await Swal.fire({
                icon: 'warning',
                title: `${getstock.message}`,
            }) */
            setloaderDoc(true)
         
            let newcarr = detalleDoc.map( pro => pro.cantidad-stock===0? {err:true,message:'No hay stock con la suma de los prodcutos que ya tienens en detalle'}: pro._id === _id  ? { ...pro, cantidad: pro.cantidad + cantidad, importe: Number(pro.cantidad + cantidad) * Number(pro.precioUnitario) } : pro);
            console.log(newcarr)
            setloaderDoc(false)
            if(newcarr[0]?.err) return  await Swal.fire({
                icon: 'warning',
                title: 'No hay stock con la suma de los prodcutos que ya tienens en detalle',
            })
            setDetalleDoc(newcarr)

            setdescuento(0)
            setimporte(0)
            setformProducto(formInitProduct)
            setcantidad(0)
            setprecioUnitario(null)
            return

        }
      /*   let getstock = await ProductosFetch.postStock(stateTokenAdmin, _id, { cantidad })
        console.log(getstock)

        if (getstock.status === 404) return await Swal.fire({
            icon: 'warning',
            title: `${getstock.message}`,
        }) */

        setDetalleDoc([...detalleDoc, { _id, nombre, cantidad, descuento, importe, precioUnitario }])

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
        setloaderDoc(true)

        e.preventDefault();
        let { _id } = formCustomer
        if (!detalleDoc) return await Swal.fire({
            icon: 'success',
            title: 'Falta Detalle Productos',
        })
        let formtodo = { ...form, detalle: detalleDoc, customer_id: _id }

        let res = await DocumentoFetch.post(stateTokenAdmin, formtodo)
        setloaderDoc(false)

        if (res.statusCode) return await Swal.fire({
            icon: 'warning',
            title: `${res.message}`,
        })
        if (res.status) return await Swal.fire({
            icon: 'warning',
            title: `${res.message}`,
        })

        let resalert = await Swal.fire({
            icon: 'success',
            title: 'Guardado con éxito',
        })
        getprod()
        getdocumento(stateTokenAdmin)
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
        let res = detalleDoc.filter(e => e._id !== id)
        setDetalleDoc(res)
    };

    const handledescuento = async (value) => {
        if (!selectProduct.precio_venta) return
        if (!importe) return
        if (!cantidad) return


        setimporte((selectProduct.precio_venta * cantidad) - Number(value))

        setdescuento(Number(value))
    };


    const handleChangeTableCustomer = async ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        if (selectedRows.length > 1) return await Swal.fire({
            icon: 'success',
            title: 'Seleccione un cliente',
        })
        setselectCustomer(selectedRows[0])
    };

    const handleChangeTableProducto = async ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        if (selectedRows.length > 1) return await Swal.fire({
            icon: 'success',
            title: 'Seleccione un producto',
        })
        setselectProduct(selectedRows[0])
    };


    const handleSelect = () => {
        let { nombres, dni_ruc, _id } = selectCustomer

        setformCustomer({ ...formCustomer, nombres, dni_ruc, _id });
        toggleModalcliente()
        // setToggleClearRows(!toggledClearRows);
    }



    const handleSelectProduct = () => {

        let { nombre, precio_venta, _id, stock } = selectProduct

        setformProducto({ ...formProducto, nombre, precio_venta, stock, _id });

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
        anular,
        loaderDoc, getDetalleDoc, StateModalDetalleDoc, toggleModalDetalleDoc,
        detalleTable, setdetalleTable
        /*  getdocumentoid */
    };
}
