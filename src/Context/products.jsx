import { createContext, useEffect, useState } from "react";
import { Fetchs } from "../api/fetchs";


const ProductContext = createContext()


const ProductProvider = ({ children }) => {
    const [stateProducts, setStateProducts] = useState([]);
    const loadProducts = async () => {
        setloader(true)
        const res = await Fetchs.getpromo()
        setStateProducts(res)
        setloader(false)
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

    }

    return (
        <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    )
}


export { ProductProvider };
export default ProductContext;