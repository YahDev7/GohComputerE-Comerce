

const ItemsCarr = ({itemsCarr,pluscarr,minuscarr,btnremovepro}) => {
    return (
        <div className="row w-100 m-auto pb-1 pt-2" style={{ borderTop: "1px solid #ccc" }} >
            <div className="imgAndDes col-12 col-md-6 row">
                <div className="img col-4 col-md-5">
                    <img style={{ width: "100px" }} src={itemsCarr.img} alt="" />
                </div>
                <div className="desc col-8 col-md-7">
                    <a href={"#/description/"+itemsCarr.id}>{itemsCarr.nombre}</a>
                </div>
            </div>
            <div className="CantPreTotAcc col-12 col-md-6 row">
                <div className="d-md-none p-0 col-3">

                </div>
                <div className="cantidad p-0 col-3 col-md-3 text-center align-self-center">
                    <button className="minusBtn btn btn-success" onClick={()=>minuscarr(itemsCarr.id) } data-idminus="6" >-</button>
                    <input type="number" className="inputcarrcantidad" value={itemsCarr.unidad}  /* defaultValue={itemsCarr.unidad} se necesita para evitar la advertencia *//>
                    <button className="plusBtn btn btn-success" onClick={()=>pluscarr(itemsCarr.id)} data-idplus="6" >+</button>
                </div>
                <div className="precio p-0 col-2 col-md-3 text-center align-self-center">
                   S/{itemsCarr.precio}
                </div>
                <div className="total p-0 col-2 col-md-3 text-center align-self-center">
                   {itemsCarr.unidad}
                </div>
                <div className="accion p-0 col-2 col-md-3 text-center align-self-center">
                    <button type="button" onClick={()=>btnremovepro(itemsCarr.id)} className="btn btn-danger removeBtn"> <i data-id="6" className="fas fa-trash-alt removeBtn"></i></button>
                </div>
            </div>
        </div> 
    );
}

export default ItemsCarr;