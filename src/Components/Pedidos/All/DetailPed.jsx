import { CarrProvider } from "../../../Context/carr";
import Footer from "../../Footer";
import Header from "../../header";
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