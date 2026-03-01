const Features = () => {

    return (
      <section className="features-section !bg-[#e7f4ff] !text-blue-950">
        <div className="container">
          <div className="row">
            <div className="fea col-lg col-md-6">
              <div className="feature-item text-center">
                <i className="fas fa-shipping-fast"></i>
                <h3>Envío Rápido</h3>
                <p>Entrega rápida y segura de tus productos a nivel nacional.</p>
              </div>
            </div>
            <div className="fea col-lg col-md-6">
              <div className="feature-item text-center">
                <i className="fas fa-shield-alt"></i>
                <h3>Pago Seguro</h3>
                <p className="">Opciones de pago confiables y seguras para tus compras.</p>
              </div>
            </div>
           {/*  <div className="fea col-lg col-md-6">
              <div className="feature-item">
                <i className="fas fa-sync-alt"></i>
                <h3>Cambios y Devoluciones</h3>
                <p>Política de cambios y devoluciones flexible y conveniente.</p>
              </div>
            </div> */}
            <div className="fea col-lg col-md-6">
              <div className="feature-item text-center">
                <i className="fas fa-star"></i>
                <h3>Calidad Garantizada</h3>
                <p>Productos de alta calidad y marcas reconocidas.</p>
              </div>
            </div>
            <div className="fea col-lg col-md-6">
              <div className="feature-item text-center">
                <i className="fas fa-comments"></i>
                <h3>Soporte en Línea</h3>
                <p>Equipo de soporte disponible para atender tus consultas.</p>
              </div>
            </div>
          {/*   <div className="fea col-lg col-md-6">
              <div className="feature-item">
                <i className="fas fa-thumbs-up"></i>
                <h3>Satisfacción del Cliente</h3>
                <p>Nuestra prioridad es tu satisfacción y experiencia de compra.</p>
              </div>
            </div>  */}
          </div>
        </div>
      </section>
    );
  }

export default Features;
