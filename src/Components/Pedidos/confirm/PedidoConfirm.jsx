import { CarritoProvider } from "../../../context/carrito";
import { CategoriaProvider } from "../../../context/categorias";
import { ProductProvider } from "../../../context/products";
import Footer from "../../public/Footer";
import Header from "../../public/header";
import Confirm from "./Confirm";

const Confirmado = () => {
    return ( 
       <>
       <CarritoProvider>
          <ProductProvider>
               <CategoriaProvider>

            <Header></Header>
            <Confirm></Confirm>
            <Footer></Footer>
               </CategoriaProvider>
          </ProductProvider>
       </CarritoProvider>
       </>
     );
}
 
export default Confirmado;