import { createContext, useEffect, useState } from "react";
import { FetchCarrito, FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";
import { PromocionesFetch } from "../api/Promociones";


const CarritoContext = createContext()
let initalcarr = []

const CarritoProvider = ({ children }) => {

    let tokencarr = localStorage.getItem("tokencarr")
  
    const [loaderCarrito, setloaderCarrito] = useState(false);


    const [itemsCarr, setItemsCarr] = useState(initalcarr);
    const [CatitadTo, setCatitadTo] = useState(initalcarr);
    const [subtotal, setsubtotal] = useState(0);
    const [statesidebarCarr, statesetSidebarCarr] = useState(false);
    const [tokcarr, setTokcarr] = useState(tokencarr === null ? [] : tokencarr);

    const btnremovepro = async (id) => {
        let carrremoveitem = itemsCarr.filter(pro => pro.id !== id);
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
        let prodarr = res3.map(el => (el.precio * el.unidad));

        let totalpagar = 0;
        if (prodarr.length > 0) totalpagar = prodarr.reduce((a, b) => a + b);
        setsubtotal(totalpagar.toFixed(2))
        setItemsCarr(res3)
        setloaderCarrito(false)

    }

    const addcarr = async (id, cantidad) => {
        let res;
        const resPromo = await PromocionesFetch.getOneWeb(id);
        if (resPromo.status!==404) {
            res=resPromo;
        }else{
            const resnormal = await Fetchs.getOneGoh(id);
            if (resnormal.message) return alert(resnormal.message)
            res= resnormal
        }

        let verifypro = itemsCarr.find(pro => pro.id === res.idcomp)
        if (verifypro) {
            let newcarr = itemsCarr.map(pro => pro.id === res.idcomp ? { ...pro, unidad: pro.unidad + cantidad } : pro);
            jwtcarr(newcarr)
        }
        else {
            let firstCarr = [...itemsCarr,
            {
                id: res.idcomp,
                img: res.imagenes[0]?.URL || "https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg",
                nombre: res.nomcomp,
                unidad: cantidad,
                precio: res?.precio_promoventa || res.precio_venta
            }];
            jwtcarr(firstCarr)
        }
        statesetSidebarCarr(true)

    }

    const pluscarr = (id) => {
        let newcarrplus = itemsCarr.map(pro => pro.id === id ? { ...pro, unidad: pro.unidad + 1 } : pro);
        jwtcarr(newcarrplus)
    }
    const minuscarr = (id) => {
        let newcarrminus = itemsCarr.map(pro => pro.id === id ? { ...pro, unidad: pro.unidad - 1 } : pro);
        let sin0 = newcarrminus.filter(pro => pro.unidad !== 0);

        jwtcarr(sin0)

    }

    const CantidadTotal = (array) => {
        let cantidad = 0;
        itemsCarr.forEach((producto) => {
          cantidad += producto.unidad;
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