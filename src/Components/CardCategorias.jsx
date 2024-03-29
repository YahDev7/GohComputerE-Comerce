
const CardCategorias = ({cat,handleCatActive,btnactive,opcion}) => {
    if(!opcion){
        return (  
            <button className={ Number(btnactive)===Number(cat.id)?"boxCat acti":"boxCat"} onClick={handleCatActive} value={cat.id} >{cat.nombre}</button>
        );
    }
    
    return <div className="card m-3" >
        <a href={"#/subcategorias/"+cat.id} >

            <img src={cat.url_imagen} className="card-img-top" alt="..." />

            <div className="card-body">
                <p className="card-text">{cat.nombre}</p>
            </div>
        </a>
    </div>
   
   
}
 
export default CardCategorias;