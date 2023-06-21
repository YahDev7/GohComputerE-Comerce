import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";
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