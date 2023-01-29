const Login = () => {
    return (
        <>
        <div className="loginweb">

            <h3>Login</h3> 
            <form action="">
                <div className="form-floating  mb-3 ">
                    <input type="text" name="email" className="form-control" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating  mb-3 ">
                    <input type="password" name="password" className="form-control" />
                    <label htmlFor="password">Contraseña</label>
                </div>
            </form>

            <div className="row optionslogin" >
                <a className="col" href="">Olvide mi contraseña</a>
                <a className="col" href="">Registrar</a>
            </div>

            <div>
                <button className="btn btn-success" type="submit">Login</button>
            </div>
         </div>
        </> 
    );
}
 
export default Login;