
import { CarrProvider } from "../../Context/carr";
import Footer from "../Footer";
import Header from "../header";

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