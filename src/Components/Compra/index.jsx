import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import Compra from "./compra";


const CompraIndex = () => {
    return (
        <>
            <TokenProvider>

                <CarritoProvider>
                    <CategoriaProvider>
                        <ProductProvider>
 
                            <Header />
                            <Compra />
                            <Footer />
                        </ProductProvider>
                    </CategoriaProvider>
                </CarritoProvider>
            </TokenProvider>
        </>
    );
}

export default CompraIndex;