import { CarrProvider } from "../../../context/carr";
import Footer from "../../public/Footer";
import Header from "../../public/header";
import DetallePedido from "./DetallePedidos";

const DetailPedi = () => {
    return ( 
       <>
       <CarrProvider>

            <Header></Header>
            <DetallePedido></DetallePedido>
            <Footer></Footer>
       </CarrProvider>
       </>
     );
}
 
export default DetailPedi;