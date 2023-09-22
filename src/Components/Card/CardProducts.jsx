
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
                <a href={"#/description/" + laptops.idcomp} className="font-bold text-blue-800 uppercase !text-[13px]">
                    {laptops.nomcomp}
                </a>

                {laptops.precio_antes ?
                    <div className="row">
                        <p className="PrecioDolar text-[#403f3f] font-semibold"><strike>S/{laptops.precio_venta&& laptops.precio_antes? Number(laptops.precio_antes):""} </strike> - <span className="text-red-600 !text-[18px] font-bold">S/{laptops.precio_venta|| laptops.precio_antes}</span></p>
                    </div>


                    :
                     <div className="row">
                        <p className="!text-4x1"><span className="font-semibold !text-4x1">S/{laptops?.precio_promoventa || laptops.precio_venta}</span></p>
                    </div>}
                <p className="stock pb-3 font-semibold text-[#403f3f] ">Stock:{laptops.stock}</p>
                <p className="Oferta d-none"> S/20</p>
            </div>
        </div>
    );
}


export default CardProducts;