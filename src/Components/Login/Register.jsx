import { useState } from "react";
import { fetchLogin } from "../../Fetchs/fetchs";
 import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal) 

let frmRegister = {
    nombres:'',
    email: '',
    pass: ''
}
const Register = () => {

    const [form, setform] = useState(frmRegister);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })

    }

    const send = async (e) => {
       let res = await fetchLogin.register(form)
        console.log(res)
        if(res.statusCode) return MySwal.fire({
            title: <h2>{res.message[0]}</h2>,
            icon: 'error'
          }) 

          MySwal.fire({
            title: <h2>Se guardo con éxito</h2>,
            icon: 'success'
          })           
          location.href="/#/login";    

    }


    return (
        <>

            <div className='w-5/12 min-h-screen grid place-items-center w-sm-8/12 m-auto text-center'>
                <div className='w-full'>
                    <div className='w-full flex flex-col'>
                        <h3 className='!text-3xl font-semibold mb-4 text-[#0d1a44]'>Register</h3>
                        <p className='text-sm mb-2'>GOH Computer</p>
                    </div>
                    <form action="" onSubmit={(e) => { e.preventDefault(); send(e) }}>

                        <div className='w-full'>
                            <input type="text" placeholder='Nombres' id="nombres" name="nombres" onChange={(e) => handleChange(e)}
                                className='w-full text-[#0d1a44] bg-transparent border-[#0d1a44] py-4 my-2 bg-none border-b outline-none focus:outline-none' />
                            <input type="email" placeholder='Email' id="email" name="email" onChange={(e) => handleChange(e)}
                                className='w-full text-[#0d1a44] bg-transparent border-[#0d1a44] py-4 my-2 bg-none border-b outline-none focus:outline-none' />
                            <input type="password" placeholder='Password' name="pass" id="pass" onChange={(e) => handleChange(e)}
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
                            <button className='w-full text-white my-2 font-semibold bg-[#0d1a44] rounded-md p-4 text-center flex items-center justify-center'>Enviar</button>


                        </div>
                    </form>
                </div>
            </div>


        </>
    );
}

export default Register;