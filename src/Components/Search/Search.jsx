
import { CarrProvider } from "../../context/carr";
import Footer from "../public/Footer";
import Header from "../public/header";

import CompSearch from "./CompSearch";

const Search = () => {
    return (
        <>
        <CarrProvider>
            <Header></Header>
            <CompSearch></CompSearch>
            <Footer></Footer>
        </CarrProvider>
        </>
    );
}

export default Search;