import Banner from "../Banner/Banner";
import Features from "../features/features";
import Footer from "../public/Footer";
import Header from "../public/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProIndex from "./ProIndex";
import Contact from "../contact/contact";
import { CarritoProvider } from "../../context/carrito";
import { CategoriaProvider } from "../../context/categorias";
import { ProductProvider } from "../../context/products";
import { LoaderProvider } from "../../context/loader";
import CompCat from "../Categorias/CompCat";
import { TokenProvider } from "../../context/token";

const Index = () => {
    return (
        <>
        <TokenProvider>
            <LoaderProvider>

                <CarritoProvider>
                    <CategoriaProvider>
                        <ProductProvider>



                            <Header></Header>
                            <Banner></Banner>
                            <CompCat></CompCat>
                            <Features></Features>
                            <Contact></Contact>
                            {/*  <ProDes></ProDes>
            <ProDes nuevos={true}></ProDes>  */}
                            <ProIndex></ProIndex>
                            <Footer></Footer>
                        </ProductProvider>
                    </CategoriaProvider>

                </CarritoProvider>
            </LoaderProvider>
        </TokenProvider>
        </>


    );
}

export default Index;