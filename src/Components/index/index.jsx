import Banner from "../Banner/Banner";
import ProDes from "../Destacados/ProDes";
import Footer from "../Footer";
import Header from "../header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarrProvider } from "../../Context/carr";
import ProIndex from "./ProIndex";

const Index = () => {
    return (
        <>
        <CarrProvider>
            <Header></Header>
            <Banner></Banner>
            <ProDes></ProDes>
            <ProDes nuevos={true}></ProDes>
            <ProIndex></ProIndex>
            <Footer></Footer>
        </CarrProvider>
        </>

         
        );
}
 
export default Index;