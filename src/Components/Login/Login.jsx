import { useContext, useState } from "react";
import { fetchLogin } from "../../api/fetchs";
import withReactContent from "sweetalert2-react-content";
import CarrContext from "../../context/carr";
const MySwal = withReactContent(Swal) 
let frmlogin = {
  email: '',
  pass: ''
}
const Login = () => {

  const [form, setform] = useState(frmlogin);

  const {tokensession} =useContext(CarrContext)

  console.log(tokensession)
  if(tokensession)return location.href="/#/gohcomputer"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value
    })

  }

  const send = async (e) => {
   let res=await fetchLogin.login(form)

    console.log(res)
    if(res.statusCode) return MySwal.fire({
        title: <h2>{res.message[0]}</h2>,
        icon: 'error'
      }) 

      MySwal.fire({
        title: <h2>Bienvenido {res.user.nombres}</h2>,
        icon: 'success'
      })           
     // document.cookie=`token=${res.token}`
      localStorage.setItem("tokensession",res.token)

      location.href="/#/gohcomputer";   
  }


  return (
    <>

      <div className='w-5/12 min-h-screen grid place-items-center w-sm-8/12 m-auto text-center'>
        <div className='w-full'>
          <div className='w-full flex flex-col'>
            <h3 className='!text-3xl font-semibold mb-4 text-[#0d1a44]'>Login</h3>
            <p className='text-sm mb-2'>GOH Computer</p>
          </div>
          <form action="" onSubmit={(e)=>{e.preventDefault();send(e)}}>

            <div className='w-full'>
              <input type="email" placeholder='Email' id="email" name="email" onChange={(e)=>handleChange(e)}
                className='w-full text-[#0d1a44] bg-transparent border-[#0d1a44] py-4 my-2 bg-none border-b outline-none focus:outline-none' />
              <input type="password" placeholder='Password'  name="pass"  id="pass" onChange={(e)=>handleChange(e)}
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
              <a href="/#/Register" className='w-full text-[#0d1a44] my-2 font-semibold bg-white border-2  focus:bg rounded-md p-4 text-center flex items-center justify-center'>Register</a>

            </div>
          </form>
        </div>
      </div>


      {/* <div className="loginweb">

<h3>Login</h3> 
<form action="" onSubmit={(e)=>{e.preventDefault();send(e)}}>
    <div className="form-floating  mb-3 ">
        <input type="text" name="email" id="email" className="form-control" onChange={(e)=>handleChange(e)} />
        <label htmlFor="email">Email</label>
    </div>
    <div className="form-floating  mb-3 ">
        <input type="password" name="password" id="password" onChange={(e)=>handleChange(e)} className="form-control" />
        <label htmlFor="password">Contraseña</label>
    </div>
<div className="text-center">
    <button className="btn-login btn" type="submit">Login</button>
</div>
</form>
<div className="row optionslogin text-center" >
    <a className="col-12 pt-3" href="/#/login">Olvide mi contraseña</a>
    <a className="col-12 p-2" href="/#/login">Registrar</a>
</div>


</div>  */}

      {/*  
      <form >
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
        
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
       
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="rememberMe"
            name="rememberMe"
         
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Sign in
        </button>
      </form> */}






      {/* 
<div id="main-wrapper" >
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card border-0">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="mb-5">
                                    <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                </div>

                                <h6 className="h5 mb-0">Welcome back!</h6>
                                <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>

                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"/>
                                    </div>
                                    <div className="form-group mb-5">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <button type="submit" className="btn btn-theme">Login</button>
                                    <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className="account-block rounded-right">
                                <div className="overlay rounded-right"></div>
                                <div className="account-testimonial">
                                    <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
                                    <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                    <p>- Admin User</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" className="text-primary ml-1">register</a></p>


        </div>
    </div>
</div> */}


      {/* <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>

<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      <div className="form-outline mb-4">
        <input type="email" id="loginName" className="form-control" />
        <label className="form-label" htmlFor="loginName">Email or username</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="form-control" />
        <label className="form-label" htmlFor="loginPassword">Password</label>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" value="" id="loginCheck"  />
            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div className="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>

      <p className="text-center">or:</p>

      <div className="form-outline mb-4">
        <input type="text" id="registerName" className="form-control" />
        <label className="form-label" htmlFor="registerName">Name</label>
      </div>

      <div className="form-outline mb-4">
        <input type="text" id="registerUsername" className="form-control" />
        <label className="form-label" htmlFor="registerUsername">Username</label>
      </div>

      <div className="form-outline mb-4">
        <input type="email" id="registerEmail" className="form-control" />
        <label className="form-label" htmlFor="registerEmail">Email</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="registerPassword" className="form-control" />
        <label className="form-label" htmlFor="registerPassword">Password</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" className="form-control" />
        <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
      </div>

      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
          aria-describedby="registerCheckHelpText" />
        <label className="form-check-label" htmlFor="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div> */}




    </>
  );
}

export default Login;