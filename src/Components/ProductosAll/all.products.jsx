import { useContext } from "react";
import CarrContext from "../../context/carr";
import { useParams } from "react-router-dom";

import Loader from "../Loader";
import { UseProPromo } from "./Hooks/all.products.hook";
const AllPro = () => {
    const {id}=useParams()
    const { addcarr,stateDolar,viewpro,loader}=useContext(CarrContext)
    const {stateProductsPromo,ProdBysubcat}=  UseProPromo(id,addcarr,stateDolar,viewpro)
    
    
    return ( 
        <div className="pt-0 pt-sm-4">
        <div id="mainComponentes" className=" ">

            {/* <div className="navegacion mb-4 m-sm-0 ">
                <nav aria-label="breadcrumb" className="ps-3 container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#/gohcomputer">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/categorias">Categorias</a></li>
                        <li className="breadcrumb-item"><a href={`#/subcategorias/${proAll.length!==0&&proAll[0]?.idcat}`}>{proAll.length!==0&&proAll[0]?.nomcat}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{proAll.length!==0&&proAll[0]?.subcatnombre}</li>
                    </ol>
                </nav>
            </div> */}

            <div className="produts pb-5 container">
                <h2 className="text-center pb-3 text-4x1 !font-bold" >Promociones</h2>
                <div className="mt-3  d-lg-none filter-btn">
                    <button className="btn btn-warning navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarNavBarCali" aria-controls="offcanvasNavbar">
                        <span className="">Filtrar</span>
                    </button>
                </div>

                <div className="text-center pt-3">

                 {/*    <div className="row divfilter">
                        <div className="col row">
                            <label htmlFor="" className=" col">ordenar por:</label>
                            <select className="form-select col" id="selectOrder" aria-label="Default select example">
                                <option value="">Selecciona</option>
                                <option value="#priceMaMe/<%=CompByCat[0].subcategoria_id%>">Precio Mayor a menor</option>
                                <option value="#nombreAsc/<%=CompByCat[0].subcategoria_id%>">Nombre</option>
                                <option value="#priceMeMa/<%=CompByCat[0].subcategoria_id%>">Precio menor a mayor</option>

                            </select>
                        </div>

                        <div className="col row" >
                            <label htmlFor="" className=" col">mostrar:</label>
                            <select className="form-select col" id="selectLimit" aria-label="Default select example">
                                <option defaultValue>Selecciona</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="all">Todos</option>
                            </select>
                        </div>
                    </div> */}

                  {/*   <div className="mt-4">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center mt-3">
                                <li className="page-item ">
                                    <a className="page-link" href="#">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div> */}

                </div>

                <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
                <section className="sectionProductosAll ">

                    <div className="grid grid-cols-5 max-xl:grid-cols-4  max-sm:grid-cols-1 max-md:grid-cols-3">

                        {ProdBysubcat()}

                    </div>



                </section>

                </div>

            {/*     <div className="mt-4" >
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center mt-3">
                            <li className="page-item ">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </div>


        </div>        

    </div>
     );
}
 
export default AllPro;