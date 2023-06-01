
import { CarrProvider } from "../../context/carr";
import Footer from "../Footer";
import Header from "../header";

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