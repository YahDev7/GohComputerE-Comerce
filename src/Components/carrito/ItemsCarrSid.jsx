
const CarrItemsSide = ({itemsCarr, pluscarr,minuscarr,btnremovepro}) => {
    return (  
        <div className="row mb-2 " style={{borderBottom:"1px solid #ccc",paddingBottom:"20px"}}>
        <div className="col-4">
            <img src={itemsCarr.img} alt="" style={{width:"80px"}}/>
        </div>
        <div className="col row">
            <div className="nombre">
                <a href={`#/description/${itemsCarr.id}`}>
                {itemsCarr.nombre}
                </a>
              
            </div>
            <div className="precio row ">
                <button className="minusBtnsidebar btn btn-success col-2" onClick={ ()=>minuscarr(itemsCarr.id)} >-</button>
                <p className=" col-8">S/{itemsCarr.precio+" x "+itemsCarr.unidad} </p>
                <button className="plusBtnsidebar btn btn-success col-2" onClick={ ()=>pluscarr(itemsCarr.id)}  >+</button>
            </div>
        </div>
        <div className="col-2" style={{alignSelf: "center"}} >
            <button type="button" onClick={()=>btnremovepro(itemsCarr.id)}  className="btn btn-danger removeBtn"> <i  className="fas fa-trash-alt removeBtn"></i></button>
        </div>
    </div>
    );
}
 
export default CarrItemsSide;