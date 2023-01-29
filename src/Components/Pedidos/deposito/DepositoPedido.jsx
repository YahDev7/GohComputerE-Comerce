import { CarrProvider } from "../../../Context/carr";
import Footer from "../../Footer";
import Header from "../../header";
import Deposito from "./deposito";

const DepositoPedido = () => {
    return ( 
       <>
       <CarrProvider>
            <Header></Header>
            <Deposito></Deposito>
            <Footer></Footer>
       </CarrProvider>
       </>
     );
}
 
export default DepositoPedido;