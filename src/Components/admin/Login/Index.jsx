import Login from "./Login";
const IndexAdmin = ({setStateTokenAdmin,setuser}) => {
    return (
        <>
            <Login setStateTokenAdmin={setStateTokenAdmin} setuser={setuser} ></Login>
        </>
    );
}

export default IndexAdmin;