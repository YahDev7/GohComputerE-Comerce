
import { useContext } from "react";
import CarrContext, { CarrProvider } from "../../Context/carr";
import Footer from "../Footer";
import Header from "../header";

import Login from "./Login";

const LoginIndex = () => {

/*   const {tokensession} =useContext(CarrContext)
  console.log(tokensession) */
    return (
        <>
        <CarrProvider>
           {/*  <Header></Header> */}
            <Login></Login>
          {/*   <Footer></Footer> */}
        </CarrProvider>
        </>
    );
}

export default LoginIndex;