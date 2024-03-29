import { useNavigate} from "react-router-dom"
import { useContext } from "react";
import CarrContext from "../Context/carr";
import { useHeader } from "./Hooks/UseHeader";


const Header = () => {
    
    const navigate=useNavigate()
    const {itemsCarr,statesidebarCarr, statesetSidebarCarr,stateCategorias, pluscarr,minuscarr,btnremovepro,subtotal,login} =useContext(CarrContext);
    const{searchnav,boxsCat,procarr}=useHeader(navigate, itemsCarr, stateCategorias, pluscarr,minuscarr,btnremovepro,subtotal);
   
    return (
        <>
            <header id="Header" style={{height: "150px", transition: "300ms all"}}>

                <div id="HMain">
                    <div className="container" style={{width: "100%", textAlign:"center", paddingTop: "20px"}}>
                        <a className="navbar-brand me-5" href="#/gohcomputer"><img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1664857271/Gohcomputer/GOHComputer_qdtw9r.png" width="125px" className="logoGoh" alt="" /> </a>
                    </div>

                    <div id="fi" className="" >
                        <div className="row mt-4 p-0 m-auto container">
 
                            <div className="col-2 col-md-1">

                                <button className="navbar-toggler btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasNavbar">
                                    <i className="fas fa-bars"></i>
                                </button>

                            </div>

                            <div className="col-7 col-md-9 contentSearch w-50"  >
                                 <form onSubmit={(e)=>{
                                    e.preventDefault()
                                   searchnav(e)
                                 } } className="d-flex" id="frmSearch"> 
                                    <div className="input-group mb-3">
                                        <input className="form-control w-50" name="search" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-search" > <i className="fas fa-search"></i></button>
                                    </div>
                                </form> 
                            </div>

                            <div className="col-4 col-md-2 row">
                                {  
                                login?<li className="nav-item dropdown w-25 btnUser col" style={{listStyle:"none"}}>
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"></i>
                                </a>
                                <ul className="dropdown-menu mt-2 menuDesktop" aria-labelledby="navbarScrollingDropdown" >
                                    <li><a className="dropdown-item" href="#">Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Ajustes</a></li>
                                    <li><a className="dropdown-item" href="#/pedidos">Mis pedidos</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                                </ul>
                            </li>:
                                 <li className="col" style={{listStyle: "none",fontWeight:'bold' }}>
                                 <a className="nav-link iconCarr text-white" href="#/login" >
                                    Iniciar Sesion
                                 </a>
                             </li>

                                }
                              

                                <li className="col-3" style={{listStyle: "none" }}>
                                    <a className="nav-link iconCarr text-white" onClick={()=>statesetSidebarCarr(true)} data-bs-toggle="" data-bs-target="" >
                                        <i style={{cursor:"pointer"}} className="fas fa-car iconCarr"></i>
                                    </a>
                                </li>
                            </div>


                        </div>
                    </div>

                </div>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="menuLateral" aria-labelledby="offcanvasNavbarLabel">         

                        <div className="offcanvas-header menuLateralHeader" >
                        <h5 className="offcanvas-title menuLateraltitle pt-3 pb-3 text-center" style={{fontSize: "20px !important", textDecoration:"none"}}><a  style={{textDecoration:"none"}} href="#/categorias"  >Categorias</a></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    
                        <div className="menuLateralBody offcanvas-body">
                            <ul className="navbar-nav accordion accordion-flush menuLateralUl " id="MenuLateralAccordionDnone">
                    
                                {boxsCat()}

                            </ul>
                        </div>
                        

                </div>

               { statesidebarCarr&& 
               <div className="contentcarrito">
                    <div className="offcanvas offcanvas-end" style={{right:"400px",visibility:"visible",opacity:"1"}} data-bs-scroll="true" id="" aria-labelledby="">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel" style={{fontSize:"22px !important"}}>Carrito</h5>
                            <button type="button" className="btn-close text-reset" onClick={()=>statesetSidebarCarr(false)} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className="sidebarCarr">
                                {
                                    procarr()
                                }
                            </div>


                            <div className="sidebarTpagar text-center" style={{background: "#f5f5f5 padding: 10px"}}>

                            </div>


                            <div className="text-center pt-2">
                                <a href="#/carrito" type="button" className="btn btn-outline-warning"> Ver detalle de mi carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
}

            </header>
        </>
    );
}

export default Header;