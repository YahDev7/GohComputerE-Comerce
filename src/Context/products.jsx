import { createContext, useEffect, useState } from "react";
import { Fetchs } from "../api/fetchs";
import { PromocionesFetch } from "../api/Promociones";


const ProductContext = createContext()


const ProductProvider = ({ children }) => {
    const [stateProducts, setStateProducts] = useState([]);
    const [loaderprod, setloaderprod] = useState(false);

    const loadProducts = async () => {
        setloaderprod(true)
        const res = await PromocionesFetch.getWeb()
        setStateProducts(res)
        setloaderprod(false)
    }

    const viewpro = (id) => {
        location.href = "#/description/" + id;
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const data = {
        setStateProducts,
        stateProducts,
        viewpro,
        setloaderprod,
        loaderprod

    }

    return (
        <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    )
}


export { ProductProvider };
export default ProductContext;