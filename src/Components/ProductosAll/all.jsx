import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import AllPro from "./all.products";

const All = () => {

    return (
        <>
            <TokenProvider>

                <CarritoProvider>
                    <ProductProvider>
                        <CategoriaProvider>

                            <Header></Header>
                            <AllPro></AllPro>
                            <Footer></Footer>
                        </CategoriaProvider>

                    </ProductProvider>
                </CarritoProvider>

            </TokenProvider>

        </>);
}

export default All;