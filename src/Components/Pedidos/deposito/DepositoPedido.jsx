import { CarritoProvider } from "../../../context/carrito";
import { CategoriaProvider } from "../../../context/categorias";
import { ProductProvider } from "../../../context/products";
import { SubCategoriaProvider } from "../../../context/subcategorias";
import { TokenProvider } from "../../../context/token";
import Footer from "../../public/Footer";
import Header from "../../public/header";
import Deposito from "./deposito";

const DepositoPedido = () => {
   return (
      <>

         <TokenProvider>

            <CarritoProvider>
               <ProductProvider>
                  <SubCategoriaProvider>
                     <CategoriaProvider>

                        <Header></Header>
                        <Deposito></Deposito>
                        <Footer></Footer>
                     </CategoriaProvider>
                  </SubCategoriaProvider>
               </ProductProvider>
            </CarritoProvider>
         </TokenProvider>




      </>
   );
}

export default DepositoPedido;