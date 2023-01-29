
import { CarrProvider } from "../../Context/carr";
import Footer from "../Footer";
import Header from "../header";
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