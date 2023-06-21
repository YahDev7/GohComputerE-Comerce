import { TokenProvider } from "../../context/token";
import Login from "./Login";
const LoginIndex = () => {

/*   const {tokensession} =useContext(CarrContext)
  console.log(tokensession) */
    return (
        <>
        <TokenProvider>
           {/*  <Header></Header> */}
            <Login></Login>
          {/*   <Footer></Footer> */}
        </TokenProvider>
        </>
    );
}

export default LoginIndex;