import { CarrProvider } from "../../../context/carr";
import Footer from "../../Footer";
import Header from "../../header";
import AllPedidos from "./PedidosAll";

const Pedidos = () => {
    return ( 
       <>
       <CarrProvider>

            <Header></Header>
            <AllPedidos></AllPedidos>
            <Footer></Footer>
       </CarrProvider>
       </>
     );
}
 
export default Pedidos;