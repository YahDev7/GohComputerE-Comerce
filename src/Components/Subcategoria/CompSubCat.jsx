import { useContext } from "react";
import { useParams } from "react-router-dom";
import CarrContext from "../../context/carr";
import Loader from "../public/Loader";
import { UseSubCats } from "./Hooks/UseSubCat";

const CompSubCat = () => {
    const{id}=useParams();
    const {loader} =useContext(CarrContext)
    const{boxsubcatsBycat,onesubcat}=UseSubCats(id);
    
    return (  
        <div  className="pt-0 pt-sm-4">
                <div className="">

                <div className="navegacion mb-4 m-sm-0 ">
                        <nav aria-label="breadcrumb" className="ps-3 container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#/gohcomputer">Home</a></li>
                                <li className="breadcrumb-item"><a href="#/categorias">Categorias</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{onesubcat.nombre}</li>
                            </ol>
                        </nav>
                    </div>
                    <div id="subCategorias" className="mb-5 container" >
                        <div id="titleSubCategorias" className=" ms-4 mb-5">
                            <h2 className="text-center text-4x1 !font-bold">{onesubcat.nombre}</h2>
                        </div>
                        <div style={{position:"relative"}}>
                            {loader&& <Loader></Loader>}
                            <div /* id="MainSubCategorias" */ className="grid grid-cols-6 max-xl:grid-cols-5  max-sm:grid-cols-2 max-md:grid-cols-4">
                                {boxsubcatsBycat()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
}
 
export default CompSubCat;