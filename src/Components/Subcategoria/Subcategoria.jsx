
import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";
import CompSubCat from "./CompSubCat";

const Subcategoria = () => {

    return (
        <>
        <CarrProvider>
            <Header></Header>
            <CompSubCat></CompSubCat>
            <Footer></Footer>
        </CarrProvider>
        </>

    );
}

export default Subcategoria;