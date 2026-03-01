
import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";

import CompSearch from "./CompSearch";

const Search = () => {
    return (
        <>
            <TokenProvider>
                <CarritoProvider>
                    <CategoriaProvider>
                        <ProductProvider>
                            <Header></Header>
                            <CompSearch></CompSearch>
                            <Footer></Footer>
                        </ProductProvider>
                    </CategoriaProvider>
                </CarritoProvider>
            </TokenProvider>
        </>
    );
}

export default Search;