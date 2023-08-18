import { createContext, useEffect, useState } from "react";
import { FetchCarrito, FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";


const CarritoContext = createContext()
let initalcarr = []

const CarritoProvider = ({ children }) => {

    let tokencarr = localStorage.getItem("tokencarr")
  
    const [itemsCarr, setItemsCarr] = useState(initalcarr);
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
        const res3 = await FetchCarrito.get(tok)
        if (res3.statusCode) {
            localStorage.removeItem("tokencarr")
            return [];
        }
        let prodarr = res3.map(el => (el.precio * el.unidad));

        let totalpagar = 0;
        if (prodarr.length > 0) totalpagar = prodarr.reduce((a, b) => a + b);
        setsubtotal(totalpagar)
        setItemsCarr(res3)
    }
    const addcarr = async (id, cantidad) => {

        const res = await Fetchs.getOneGoh(id);
        if (res.message) return alert(res.message)

        let verifypro = itemsCarr.find(pro => pro.id === res._id)
        if (verifypro) {
            let newcarr = itemsCarr.map(pro => pro.id === res._id ? { ...pro, unidad: pro.unidad + cantidad } : pro);
            jwtcarr(newcarr)
        }
        else {
            let firstCarr = [...itemsCarr,
            {
                id: res._id,
                img: res.imagenes[0]?.URL || "https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg",
                nombre: res.nombre,
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
        tokcarr
    }

    return (
        <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
    )
}


export { CarritoProvider };
export default CarritoContext;