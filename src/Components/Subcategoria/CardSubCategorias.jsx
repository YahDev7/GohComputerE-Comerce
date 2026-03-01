/* import Link from "react-router-dom" */

const SubCardCategorias = ({subcat}) => {

        console.log(subcat)
    return <div className="card m-3" >
        <a href={"/#/productos/"+subcat._id} >

            <img src={subcat.url_imagen || subcat.imagen[0]?.secure_url} className="card-img-top" alt="..." />

            <div className="card-body">
                <p className="card-text ">{subcat.nombre}</p>
            </div>
        </a>
    </div>
   
   
}
 
export default SubCardCategorias;