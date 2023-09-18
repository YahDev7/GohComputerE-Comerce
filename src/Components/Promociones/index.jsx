import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import Promociones from "./Promociones";

const IndexPromociones = () => {

    return (
        <>
            <TokenProvider>

                <CarritoProvider>
                    <ProductProvider>
                        <CategoriaProvider>

                            <Header></Header>
                            <Promociones></Promociones>
                            <Footer></Footer>
                        </CategoriaProvider>

                    </ProductProvider>
                </CarritoProvider>

            </TokenProvider>

        </>);
}

export default IndexPromociones;