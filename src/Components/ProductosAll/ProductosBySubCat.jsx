import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import ProdAllBySubCat from "./ProdAllBySubCat";

const ProductosBySubCat = () => {

    return (
        <>
            <TokenProvider>

                <CarritoProvider>
                    <ProductProvider>
                        <CategoriaProvider>

                            <Header></Header>
                            <ProdAllBySubCat></ProdAllBySubCat>
                            <Footer></Footer>
                        </CategoriaProvider>
                    </ProductProvider>
                </CarritoProvider>
            </TokenProvider>

        </>);
}

export default ProductosBySubCat;