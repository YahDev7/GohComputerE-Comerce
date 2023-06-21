
import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";

import CompCat from "./CompCat";

const Categorias = () => {
   

    return (
        <>
        <CarrProvider>
            <Header></Header>
            <CompCat></CompCat>
            <Footer></Footer>
        </CarrProvider>
        </>
    );
}

export default Categorias;