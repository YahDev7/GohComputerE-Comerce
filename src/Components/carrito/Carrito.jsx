
import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import CompCarr from "./CompCarr";

const Carrito = () => {
    
    return (
        <>
        <TokenProvider>

        <CarritoProvider>
        <CategoriaProvider>

            <Header></Header>
            <CompCarr></CompCarr>           
            <Footer></Footer>

        </CategoriaProvider>
        </CarritoProvider>
        </TokenProvider>
        </>
    );
}

export default Carrito;