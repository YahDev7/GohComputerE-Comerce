

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
                    <button className="minusBtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>minuscarr(itemsCarr.id) } data-idminus="6" >-</button>
                    <input type="number" className="inputcarrcantidad" value={itemsCarr.unidad}  /* defaultValue={itemsCarr.unidad} se necesita para evitar la advertencia *//>
                    <button className="plusBtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>pluscarr(itemsCarr.id)} data-idplus="6" >+</button>
                </div>
                <div className="precio p-0 col-2 col-md-3 text-center align-self-center">
                   S/{itemsCarr.precio}
                </div>
                <div className="total p-0 col-2 col-md-3 text-center align-self-center">
                   {itemsCarr.unidad}
                </div>
                <div className="accion p-0 col-2 col-md-3 text-center align-self-center">

                    <button type="button" onClick={()=>btnremovepro(itemsCarr.id)} className="removeBtn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"> <i data-id="6" className="fas fa-trash-alt removeBtn"></i></button>
                </div>
            </div>
        </div> 
    );
}

export default ItemsCarr;