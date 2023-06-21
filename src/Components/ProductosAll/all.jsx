import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";
import AllPro from "./all.products";

const All = () => {
    
    return (
        <>
        <CarrProvider>
            <Header></Header>
            <AllPro></AllPro>
            <Footer></Footer>
        </CarrProvider>
        </>);
}

export default All;