

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
          <div className="row">
            <div className=" mx-auto">
              <h2 className="text-white mb-4">Una solución para tu trabajo o estudio</h2>
              <div className="row justify-content-evenly">
                <a
                    href="tel:NUMERO_TELEFONO"
                    className="btn btn-primary btn-xl col-4 pt-2 pb-2"
                >
                    <i className="fa fa-phone mr-2 me-2"></i>Contacto
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=989471269&text=Hola,%20deseo%un%20producto%20de%20GOH%20Computer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xl col-4 pt-2 pb-2"
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
