import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";
import Compra from "./compra";


const CompraIndex = () => {
    return (
        <>
            <CarrProvider>
                <Header/>
                <Compra/>
                <Footer/>
            </CarrProvider>
        </>
    );
}

export default CompraIndex;