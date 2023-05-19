
import { CarrProvider } from "../../Context/carr";
import Footer from "../Footer";
import Header from "../header";

import Login from "./Login";

const LoginIndex = () => {
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