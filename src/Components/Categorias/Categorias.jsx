
import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";

import CompCat from "./CompCat";

const Categorias = () => {
   

    return (
        <>
        <TokenProvider>
        <CarritoProvider>
            <CategoriaProvider>

            <Header></Header>
            <CompCat></CompCat>
            <Footer></Footer>
            </CategoriaProvider>
        </CarritoProvider>
                </TokenProvider>
        </>
    );
}

export default Categorias;