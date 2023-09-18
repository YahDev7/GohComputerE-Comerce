
const CardProducts = ({ laptops, addcarr, viewpro }) => {
    return (
        <div className="boxProAll">
            <div className="contentimg">
                {laptops?.imagenes.length>=1&&
                <img src={laptops?.imagenes[0]?.URL || laptops?.imagenes[0][0]?.URL || 'https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg'} className="imgProAll" alt="" />
}
                <div onClick={(e) => viewpro(laptops.idcomp)} className="btncomprar" style={{ cursor: "pointer" }}>
                    <button onClick={(e) => (e.stopPropagation(), addcarr(laptops.idcomp, 1))} className="addCarr btn btn-danger p-2">Comprar</button>
                </div>

            </div>
            <div className="contentBoxProAll">
                <a href={"#/description/" + laptops.idcomp} className="AnombrePro">
                    {laptops.nomcomp}
                </a>

                {laptops.precio_antes ?
                    <div className="row">
                        <p className="PrecioDolar"><strike>${laptops.precio_venta&& laptops.precio_antes? Number(laptops.precio_antes):""} </strike> - <span className="preciosol">S/{laptops.precio_venta|| laptops.precio_antes}</span></p>
                    </div>


                    :
                     <div className="row">
                        <p className="PrecioDolar"><span className="preciosol">S/{laptops?.precio_promoventa || laptops.precio_venta}</span></p>
                    </div>}
                <p className="stock pb-3">Stock:{laptops.stock}</p>
                <p className="Oferta d-none"> $20</p>
            </div>
        </div>
    );
}


export default CardProducts;