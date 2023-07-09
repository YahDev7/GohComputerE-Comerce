import Footer from "../public/Footer";
import Header from "../public/header";
import CompDescription from "./CompDescription";
import { CarritoProvider } from "../../context/carrito";
import { ProductProvider } from "../../context/products";
import { CategoriaProvider } from "../../context/categorias";
import { TokenProvider } from "../../context/token";

const Description = () => {
   
    return ( 
        <>
        <TokenProvider>

        <CarritoProvider>
            <ProductProvider>

            <CategoriaProvider>

            <Header></Header>
            <CompDescription></CompDescription>
            <Footer></Footer>
            </CategoriaProvider>
            </ProductProvider>
        </CarritoProvider>
        </TokenProvider>
        </>
     );
}
 
export default Description;