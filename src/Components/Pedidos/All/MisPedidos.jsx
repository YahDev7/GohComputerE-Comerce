import { CarrProvider } from "../../../context/carr";
import Footer from "../../public/Footer";
import Header from "../../public/header";
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