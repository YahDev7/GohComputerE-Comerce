import { CarrProvider } from "../../context/carr";
import Footer from "../Footer";
import Header from "../header";
import CompProAll from "./CompProAll";

const ProductosAll = () => {
    
    return (
        <>
        <CarrProvider>

            <Header></Header>
           <CompProAll></CompProAll>
            <Footer></Footer>
        </CarrProvider>
        </>);
}

export default ProductosAll;