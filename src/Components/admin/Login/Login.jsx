import { useContext } from "react";
import { UseLogin } from "./Hook/UseLogin";
import TokenAdminContext from "../../../context/tokenAdmin";

const Login = () => {

    const {handleChange,send} = UseLogin()
    const{stateTokenAdmin, user}=useContext(TokenAdminContext)

    if(stateTokenAdmin) return location.href="/#/dashadmin/gohcomputer/Servicios"

    

  return (
    <>
      <div className='w-5/12 min-h-screen grid place-items-center w-sm-8/12 m-auto text-center'>
        <div className='w-full'>
          <div className='w-full flex flex-col'>
            <h3 className='!text-3xl font-semibold mb-4 text-[#0d1a44]'>Login</h3>
            <p className='text-sm mb-2'>ADMIN</p>
          </div>
          <form action="" onSubmit={(e)=>{e.preventDefault();send(e)}}>

            <div className='w-full'>
              <input type="email" placeholder='Email' id="email" name="email" onChange={(e)=>handleChange(e)}
                className='w-full text-[#0d1a44] bg-transparent border-[#0d1a44] py-4 my-2 bg-none border-b outline-none focus:outline-none' />
              <input type="password" placeholder='Password'  name="password"  id="password" onChange={(e)=>handleChange(e)}
                className='w-full text-[#0d1a44] bg-transparent border-[#0d1a44] py-4 my-2  bg-none border-b outline-none focus:outline-none' />
            </div>

            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex items-center'>
                <input type="checkbox" className='w-4 h-4 mr-2' />
                <p className='text-sm'> Recuerdalo</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>¿Olvidaste tu contraseña?</p>
            </div>
            <div className='w-full flex flex-col my-4'>
              <button className='w-full text-white my-2 font-semibold bg-[#0d1a44] rounded-md p-4 text-center flex items-center justify-center'>Log in</button>
             {/*  <a href="/#/Register/admin" className='w-full text-[#0d1a44] my-2 font-semibold bg-white border-2  focus:bg rounded-md p-4 text-center flex items-center justify-center'>Register</a>
 */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;