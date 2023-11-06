import { CONTACTO, INFORMACION, Icons } from "./Footer/menu";


const Footer = () => {



    return (
        <>
            <div className="!bg-blue-950 text-white">
                <footer className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 sm:px-12 px-4  py-16">
                        <ul>
                            <h1 className="mb-1 font-semibold">INFORMACION</h1>
                            {
                                INFORMACION.map((el) =>
                                    <li key="s">
                                        <a className="text-gray-400 hover:text-teal-400 duration-300  text-sm cursor-pointer leading-6" href=""   >
                                            {el.name}
                                        </a>
                                    </li>)
                            }
                        </ul>

                        <ul>
                            <h1 className="mb-1 font-semibold">CONTACTO</h1>
                            {
                                CONTACTO.map((el) =>
                                    <li key="s">
                                        <a className="text-gray-400 hover:text-teal-400 duration-300  text-sm cursor-pointer leading-6" href=""   >
                                            {el.name}
                                        </a>
                                    </li>)
                            }
                        </ul>


                    </div>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  text-center pt-2 text-gray-400 text-sm pb-8"

                    >
                        <span>© 2023 Todos los derechos reservados</span>
                        <span>Privacidad de Politica</span>
                        <div className="text-teal-500">

                            {
                                Icons.map((el) =>
                                    <span className="p-2 cursor-pointer inline-flex items-center
                                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
                                    duration-300 " >
                                        <a href={el.link} target="_blank">
                                            <img src={el.href} alt="" />
                                        </a>
                                    </span>)
                            }

                        </div>
                    </div>
                </footer>
            </div>

            {/* <div className="footer pt-5">
            <footer className=" pt-4 container" >
                <div className="divFooter row" >
                    <div className="ubicacion col">
                        <h3 className="mb-4">Ubiquenos</h3>
                        <div className="datos">
                            <p>Teléfono:999999999</p>
                            <p>Calle #99999 calle</p>
                        </div>
                    </div>
                    <div className="contacto col">
                        <h3 className="mb-4">Comuniquese con nosotros</h3>
                        <div className="datos">
                            <p>Ventas:correo@hotmail.com</p>
                            <p>Informes:correo@hotmail.com</p>
                        </div>
                    </div>
                    <div className="redes solciales  col">
                        <h3 className="mb-4">Redes sociales</h3>
                        <div className="redSocial">
                            <i className=" ">ins</i>
                            <i className=" ">face</i>
                            <i className="">youtube</i>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
 */}

        </>
    );
}

export default Footer;