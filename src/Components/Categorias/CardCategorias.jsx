
const CardCategorias = ({cat,handleCatActive,btnactive,opcion}) => {
    if(!opcion){
        return (  
            <button className={btnactive===cat._id?"boxCat acti":"boxCat"} onClick={handleCatActive} value={cat._id} >{cat.nombre}</button>
        );
    }
    return <div className="card m-3" >
        <a href={"#/subcategorias/"+cat._id} className="grid grid-cols-2" >
            <div className="">
                <img src={cat.url_imagen} className="w-100" alt="..." />

            </div>
            <div className="pt-3 pr-3 bottom-0 self-center pl-3 ">
                <p className="md:!text-[16px] !text-[12px] h-10 font-semibold text-center ">{cat.nombre}</p>
            </div>
        </a>
    </div>

/* return <div className="card m-3" >
<a href={"#/subcategorias/"+cat._id} className="grid grid-col-2" >
    <div className="h-56">
        <img src={cat.url_imagen} className="" alt="..." />

    </div>
    <div className="p-3 bottom-0">
        <p className="!text-[20px] font-bold text-center ">{cat.nombre}</p>
    </div>
</a>
</div> */
}
 
export default CardCategorias;