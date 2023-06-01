import Footer from "../Footer";
import Header from "../header";
import { CarrProvider } from "../../context/carr";
import CompDescription from "./CompDescription";

const Description = () => {
   

    return ( 
        <>
        <CarrProvider>
            <Header></Header>
            <CompDescription></CompDescription>
            <Footer></Footer>
        </CarrProvider>
        </>
     );
}
 
export default Description;