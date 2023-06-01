import { CarrProvider } from "../../context/carr";
import Footer from "../Footer";
import Header from "../header";
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