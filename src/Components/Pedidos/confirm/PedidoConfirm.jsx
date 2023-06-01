import { CarrProvider } from "../../../context/carr";
import Footer from "../../Footer";
import Header from "../../header";
import Confirm from "./Confirm";

const Confirmado = () => {
    return ( 
       <>
       <CarrProvider>

            <Header></Header>
            <Confirm></Confirm>
            <Footer></Footer>
       </CarrProvider>
       </>
     );
}
 
export default Confirmado;