const CardProducts = ({dolar,laptops, opcion,addcarr,viewpro }) => {
    if (!opcion) {
        return (
            <div className="boxProAll">
                <div className="contentimg">

                    <img src={laptops?.imagenes[0]?.URL||'https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg'} className="imgProAll" alt="" />

                        <div onClick={(e)=>viewpro(laptops.idcomp)} className="btncomprar" style={{cursor:"pointer"}}>
                            <button onClick={(e)=>(e.stopPropagation(),addcarr(laptops.idcomp,1))} className="addCarr btn btn-danger p-2">Comprar</button>
                        </div>

                </div>
                <div className="contentBoxProAll">
                    <a href={"#/description/" +laptops.idcomp} className="AnombrePro">
                        {laptops.nomcomp}
                    </a>

                    <div className="row">
                        <p className="PrecioDolar"><strike>${Number(laptops.precio_venta)} </strike> - <span className="preciosol">S/{ laptops?.precio_promoventa|| laptops.precio_venta}</span></p>
                    </div>
                    <p className="stock pb-3">Stock:{laptops.stock}</p>
                    <p className="Oferta d-none"> $20</p>
                </div>
            </div>
        );
    }
}

export default CardProducts;