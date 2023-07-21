import { CarrProvider } from "../../../context/carr";
import { CarritoProvider } from "../../../context/carrito";
import { CategoriaProvider } from "../../../context/categorias";
import { ProductProvider } from "../../../context/products";
import { SubCategoriaProvider } from "../../../context/subcategorias";
import { TokenProvider } from "../../../context/token";
import Footer from "../../public/Footer";
import Header from "../../public/header";
import AllPedidos from "./PedidosAll";

const Pedidos = () => {
     return (
          <>

               <TokenProvider>

                    <CarritoProvider>
                         <ProductProvider>
                              <SubCategoriaProvider>
                                   <CategoriaProvider>
                                        <Header></Header>
                                        <AllPedidos></AllPedidos>
                                        <Footer></Footer>
                                   </CategoriaProvider>
                              </SubCategoriaProvider>
                         </ProductProvider>
                    </CarritoProvider>
               </TokenProvider>



          </>
     );
}

export default Pedidos;