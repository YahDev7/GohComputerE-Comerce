import { CarrProvider } from "../../../context/carr";
import Footer from "../../public/Footer";
import Header from "../../public/header";
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