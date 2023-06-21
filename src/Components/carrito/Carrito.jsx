
import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";
import CompCarr from "./CompCarr";

const Carrito = () => {
    
    return (
        <>
        <CarrProvider>
            <Header></Header>
            <CompCarr></CompCarr>           
            <Footer></Footer>
        </CarrProvider>
        </>
    );
}

export default Carrito;