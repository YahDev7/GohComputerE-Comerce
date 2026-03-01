

const Contact=()=> {

    const sectionStyle = {
    background:'#e6f0ff',
      backgroundImage: 'url("https://res.cloudinary.com/dfsflp11q/image/upload/v1665883615/Gohcomputer/setup_k3r5ip.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <section id="contact" className="contact-section" style={sectionStyle}>
        <div className="grupocontact">
          <div className="">
            <div className=" mx-auto">
              <h2 className="text-white text-center mb-6">Una solución para tu trabajo o estudio</h2>
              <div className="grid grid-cols-4 text-center gap-4">
                <a
                    href="tel:NUMERO_TELEFONO"
                    className="  col-start-2 max-sm:col-start-2 max-sm:text-1xl max-sm:col-end-4 btn-xl text-white !bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    <i className=" place-self-center fa fa-phone mr-2 me-2"></i>Contacto
                </a>
                <a
                    href="https://wa.link/k7gk2x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  btn-xl text-white max-sm:col-start-2 max-sm:col-end-4 !bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    <i className="fab fa-whatsapp mr-2 me-2"></i>WhatsApp
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Contact;
