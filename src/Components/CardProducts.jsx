const CardProducts = ({dolar,laptops, opcion,addcarr,viewpro }) => {
    //console.log((laptops.precio_venta*Number(dolar)).toFixed(2));
    if (!opcion) {
        return (
            <div className="boxProAll">
                <div className="contentimg">

                    <img src={laptops.url_imagencom} className="imgProAll" alt="" />

                    {/* <a href={"#/description/" + laptops.id}> */}
                        <div onClick={(e)=>viewpro( laptops.idcomp)} className="btncomprar" style={{cursor:"pointer"}}>
                            <button onClick={(e)=>(e.stopPropagation(),addcarr(laptops.idcomp,1))} className="addCarr btn btn-danger p-2">Comprar</button>
                        </div>
                   {/*  </a> */}

                </div>
                <div className="contentBoxProAll">
                    <a href={"#/description/" + laptops.idcomp} className="AnombrePro">
                        {laptops.nomcomp}
                    </a>

                    <div className="row">
                        <p className="PrecioDolar">${Number(laptops.precio_venta)}- <span className="preciosol">S/{(laptops.precio_venta*Number(dolar)).toFixed(2)}</span></p>
                    </div>
                    <p className="stock pb-3">Stock:{laptops.stock}</p>
                    <p className="Oferta d-none"> $20</p>

                    {/*  <div className="divBtnComprar">
                      <button className="addCarr btn btn-danger p-2" data-id="<%=allcomp[i].id%>" data-nomcomp="<%=allcomp[i].nombre%>" data-nomimg="<%=allcomp[i].url_imagencom%>" data-precio="<%=(allcomp[i].precio *dolar).toFixed(2)%>" >Comprar</button>
                  </div> */}

                </div>
            </div>
        );
    }

   /*  return <div className="box" key={laptops.id}>
        <div className="contentimg" >

            <img src={laptops.link} className="imgProAll" alt="" />

          
            <div onClick={(e)=>viewpro(e)} className="btncomprar" style={{cursor:"pointer"}}>
                <button onClick={(e)=>addcarr(laptops.id)} className="addCarr btn btn-danger p-2">Comprar</button>
            </div>
        

        </div>
        <div className="contentBox">
            <a href={"/#/description/" + laptops.id} className="AnombrePro">
               {laptops.nombre}
            </a>

            <div className="row">
                <p className="PrecioDolar">$300- <span className="preciosol">S/700</span></p>
            </div>
            <p className="stock pb-3">Stock:20</p>
            <p className="Oferta d-none"> $20</p>



        </div>

    </div> */
}

export default CardProducts;