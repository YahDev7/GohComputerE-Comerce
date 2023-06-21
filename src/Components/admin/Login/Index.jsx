
import { TokenAdminProvider } from "../../../context/tokenAdmin";
import Login from "./Login";
const Index = () => {
    return (
        <>
        <TokenAdminProvider>
            <Login></Login>
        </TokenAdminProvider>
        </>
    );
}

export default Index;