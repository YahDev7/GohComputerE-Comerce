import Banner from "../Banner/Banner";
import ProDes from "../Destacados/ProDes";
import CompCat from "../categorias/CompCat";
import Features from "../features/features";
import Footer from "../Footer";
import Header from "../header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarrProvider } from "../../context/carr";
import ProIndex from "./ProIndex";
import Contact from "../contact/contact";

const Index = () => {
    return (
        <>
        <CarrProvider>
             <Header></Header> 
             <Banner></Banner>
             <Features></Features>
             <CompCat></CompCat>
             <Contact></Contact>
           {/*  <ProDes></ProDes>
            <ProDes nuevos={true}></ProDes>  */}
            <ProIndex></ProIndex>
            <Footer></Footer>
        </CarrProvider>
        </>

         
        );
}
 
export default Index;