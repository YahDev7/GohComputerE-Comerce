
import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { SubCategoriaProvider } from "../../context/subcategorias";
import { TokenProvider } from "../../context/token";
import Footer from "../public/Footer";
import Header from "../public/header";
import CompSubCat from "./CompSubCat";

const Subcategoria = () => {

    return (
        <>
            <TokenProvider>
                <CarritoProvider>
                    <SubCategoriaProvider>
                        <CategoriaProvider>


                            <Header></Header>
                            <CompSubCat></CompSubCat>
                            <Footer></Footer>
                        </CategoriaProvider>
                    </SubCategoriaProvider>
                </CarritoProvider>
            </TokenProvider>
        </>

    );
}

export default Subcategoria;