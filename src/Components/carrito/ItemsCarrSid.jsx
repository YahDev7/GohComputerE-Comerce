
const CarrItemsSide = ({ itemsCarr, pluscarr, minuscarr, btnremovepro }) => {
    return (
        <div className=" mb-2 grid grid-cols-4	" style={{ borderBottom: "1px solid #ccc", paddingBottom: "20px" }}>
            <div className="col-start-1 ">
                <img src={itemsCarr.img} alt="" style={{ width: "80px" }} />
            </div>
            <div className="col-start-2 col-end-4 ">
                <div className="nombre">
                    <a href={`#/description/${itemsCarr._id}`} className="font-bold text-blue-800 uppercase !text-[13px]">
                        {itemsCarr.nombre}
                    </a>
                </div>
                <div className="precio grid grid-cols-5 ">
                    
                    <button className="minusBtnsidebar col-start-1  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " onClick={() => minuscarr(itemsCarr._id)} >-</button>
                    <p className="col-start-2 col-end-5 text-red-600 !text-[16px] font-semibold">S/{itemsCarr.precioUnitario + " x " + itemsCarr.cantidad} </p>
                    <button className="col-start-5  plusBtnsidebar  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => pluscarr(itemsCarr._id)}  >+</button>
                </div>
            </div>
            <div className="justify-self-center" style={{ alignSelf: "center" }} >
                <button onClick={() => btnremovepro(itemsCarr._id)} type="button" className="removeBtn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i className="fas fa-trash-alt removeBtn"></i></button>

            </div>
        </div>
    );
}

export default CarrItemsSide;