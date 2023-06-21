const Footer = () => {
    return (
        <>
        <div className="footer pt-5">
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


        </>
    );
}

export default Footer;