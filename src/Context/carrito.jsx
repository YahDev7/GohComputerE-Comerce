import { createContext, useEffect, useState } from "react";
import { FetchCarrito, FetchCat, Fetchs } from "../api/fetchs";
import { BaseURLAPI2 } from "../config/Base_URL";


const CarritoContext = createContext()
let initalcarr = []

const CarritoProvider = ({ children }) => {

    let tokencarr = localStorage.getItem("tokencarr")
    let tokenSession = localStorage.getItem("tokensession")

    const [tokensession, tokensessionset] = useState(tokenSession === null ? null : tokenSession);
    const [itemsCarr, setItemsCarr] = useState(initalcarr);
    const [subtotal, setsubtotal] = useState(0);
    const [statesidebarCarr, statesetSidebarCarr] = useState(false);
    const [tokcarr, setTokcarr] = useState(tokencarr === null ? [] : tokencarr);

    const btnremovepro = async (id) => {
        let carrremoveitem = itemsCarr.filter(pro => pro.id !== id);
        jwtcarr(carrremoveitem)

    }
    const jwtcarr = async (carr) => {
        const res2 = await FetchCarrito.save(carr, tokensession);
        localStorage.setItem("tokencarr", res2.tokencarr)
        setTokcarr(res2.tokencarr);
    }
    const itemscarrtoken = async (tok) => {

        const res2 = await FetchCarrito.get(tok)
        if (res2.statusCode) {
            localStorage.removeItem("tokencarr")
            return [];
        }
        let prodarr = res2.map(el => (el.precio * el.unidad));

        let totalpagar = 0;
        if (prodarr.length > 0) totalpagar = prodarr.reduce((a, b) => a + b);
        setsubtotal(totalpagar)
        setItemsCarr(res2)
    }
    const addcarr = async (id, cantidad) => {

        const res = await Fetchs.getOne(id);
        if (res.message) return alert(res.statusText)

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
        tokensession,
        tokensessionset
    }

    return (
        <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
    )
}


export { CarritoProvider };
export default CarritoContext;