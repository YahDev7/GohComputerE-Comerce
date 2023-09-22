import { createContext, useEffect, useState } from "react";
import { FetchCarrito, FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";
import { PromocionesFetch } from "../api/Promociones";
import withReactContent from "sweetalert2-react-content";


const CarritoContext = createContext()
let initalcarr = []
const MySwal = withReactContent(Swal)

const CarritoProvider = ({ children }) => {

    let tokencarr = localStorage.getItem("tokencarr")

    const [loaderCarrito, setloaderCarrito] = useState(false);


    const [itemsCarr, setItemsCarr] = useState(initalcarr);
    const [CatitadTo, setCatitadTo] = useState(initalcarr);
    const [subtotal, setsubtotal] = useState(0);
    const [statesidebarCarr, statesetSidebarCarr] = useState(false);
    const [tokcarr, setTokcarr] = useState(tokencarr === null ? [] : tokencarr);

    const btnremovepro = async (_id) => {
        let carrremoveitem = itemsCarr.filter(pro => pro._id !== _id);
        jwtcarr(carrremoveitem)

    }
    const jwtcarr = async (carr) => {
        const res1 = await FetchCarrito.save(carr);
        localStorage.setItem("tokencarr", res1.tokencarr)
        setTokcarr(res1.tokencarr);
    }
    const itemscarrtoken = async (tok) => {
        setloaderCarrito(true)
        const res3 = await FetchCarrito.get(tok)
        if (res3.statusCode) {
            localStorage.removeItem("tokencarr")
            return [];
        }
        let prodarr = res3.map(el => (el.importe));

        let totalpagar = 0;
        if (prodarr.length > 0) totalpagar = prodarr.reduce((a, b) => a + b);
        setsubtotal(totalpagar.toFixed(2))
        setItemsCarr(res3)
        setloaderCarrito(false)

    }

    const addcarr = async (id, cantidad) => {
        cantidad=Number(cantidad)
        let res;
        const resPromo = await PromocionesFetch.getOneWeb(id);
        if (resPromo.status !== 404) {
            res = resPromo;
        } else {
            const resnormal = await Fetchs.getOneGoh(id);
            if (resnormal.message) return alert(resnormal.message)
            res = resnormal
        }
        if(cantidad>res.stock)  return await MySwal.fire({
            title: <h2>Cantidad superior al stock</h2>,
            icon: 'warning'
          })

        let verifypro = itemsCarr.find(pro => pro._id === res.idcomp)
        if (verifypro) {
            if(cantidad>res.stock)  return await MySwal.fire({
                title: <h2>Cantidad superior al stock</h2>,
                icon: 'warning'
              })

              let newcarr = itemsCarr.map(pro => {
                if (pro._id === res.idcomp) {
                  // Validar que la cantidad no sea mayor que cero
                  if (pro.cantidad + cantidad >res.stock) {
                    return  MySwal.fire({
                        title: <h2>Cantidad superior al stock</h2>,
                        icon: 'warning'
                      })
                  } else {
                    return { ...pro, cantidad: pro.cantidad + cantidad,importe:Number(pro.precioUnitario)*(Number(pro.cantidad) + cantidad) };
                  }
                } else {
                  return pro;
                }
              });


           // let newcarr = itemsCarr.map(pro => pro._id === res.idcomp ? { ...pro, cantidad: pro.cantidad + cantidad,importe:Number(pro.precioUnitario)*(Number(pro.cantidad) + cantidad) } : pro);
            jwtcarr(newcarr)
        }
        else {
            let firstCarr = [...itemsCarr,
            {
                _id: res.idcomp,
                img: res.imagenes[0]?.URL || "https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg",
                nombre: res.nomcomp,
                cantidad,
                descuento:0,
                precioUnitario: res?.precio_promoventa || res.precio_venta,
                importe: Number(res?.precio_promoventa)* Number(cantidad) || Number(res.precio_venta)*Number(cantidad)
            }];
            jwtcarr(firstCarr)
        }
        statesetSidebarCarr(true)

    }

    const pluscarr =async (_id) => {
      //  let newcarrplus = itemsCarr.map(pro => pro._id === _id ? { ...pro, cantidad: pro.cantidad + 1,importe:Number(pro.precioUnitario)*(Number(pro.cantidad) + 1) } : pro);
      let res;
      const resPromo = await PromocionesFetch.getOneWeb(_id);
      if (resPromo.status !== 404) {
          res = resPromo;
      } else {
          const resnormal = await Fetchs.getOneGoh(_id);
          if (resnormal.message) return alert(resnormal.message)
          res = resnormal
      }
      //NECESITO HACVER UN IF DENTRO Y DEVOLVER UN ERROR VARA VALIDARLO Y ARROJAR LA ALERTA
        let newcarrplus = itemsCarr.map(pro => {
            if (pro._id === _id) {
              // Validar que la cantidad no sea mayor que cero
              if (pro.cantidad + 1 >res.stock) {
                return  MySwal.fire({
                    title: <h2>Cantidad superior al stock</h2>,
                    icon: 'warning'
                  })
              } else {
                return { ...pro, cantidad: pro.cantidad + 1,importe:Number(pro.precioUnitario)*(Number(pro.cantidad) + 1) };
              }
            } else {
              return pro;
            }
          });

        jwtcarr(newcarrplus)
    }
    const minuscarr = (_id) => {
        let newcarrminus = itemsCarr.map(pro => pro._id === _id ? { ...pro, cantidad: pro.cantidad - 1,importe:Number(pro.precioUnitario)*(Number(pro.cantidad) - 1) } : pro);
        
        let sin0 = newcarrminus.filter(pro => pro.cantidad !== 0);

        jwtcarr(sin0)

    }

    const CantidadTotal = (array) => {
        let cantidad = 0;
        itemsCarr.forEach((producto) => {
            cantidad += producto.cantidad;
        });
        setCatitadTo(cantidad);
    };


    useEffect(() => {
        if (tokcarr.length !== 0) itemscarrtoken(tokcarr)
    }, [tokcarr]);

    const data = {
        itemsCarr,
        setItemsCarr,
        addcarr,
        statesidebarCarr,
        statesetSidebarCarr,
        pluscarr,
        minuscarr,
        subtotal,
        btnremovepro,
        tokcarr,
        CantidadTotal,
        CatitadTo,
        loaderCarrito
    }

    return (
        <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
    )
}


export { CarritoProvider };
export default CarritoContext;