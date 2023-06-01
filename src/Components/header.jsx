import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import CarrContext from "../context/carr";
import { useHeader } from "./Hooks/UseHeader";


const Header = () => {

    const navigate = useNavigate()
    const { tokensession, tokensessionset, itemsCarr, statesidebarCarr, statesetSidebarCarr, stateCategorias, pluscarr, minuscarr, btnremovepro, subtotal, login } = useContext(CarrContext);
    const { searchnav, boxsCat, procarr } = useHeader(navigate, itemsCarr, stateCategorias, pluscarr, minuscarr, btnremovepro, subtotal);

    const logout = () => {
        /*   console.log(tokensession)
         */
        localStorage.removeItem("tokensession")
        tokensessionset(null)
    }

    return (
        <>
            <header id="Header" style={{ height: "150px", transition: "300ms all" }}>

                <div id="HMain">
                    <div className="container" style={{ width: "100%", textAlign: "center", paddingTop: "20px" }}>
                        <a className="navbar-brand me-5" href="#/gohcomputer"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683210226/GOHComputer/Public/Group_324_1_vdhts9.png" width="505px" className="logoGoh d-inline" alt="" /> </a>
                    </div>

                    <div id="fi" className="" >
                        <div className="grid grid-cols-7  gap-4 mt-4  m-auto container">

                        <div class="..."> <button className="navbar-toggler btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasNavbar">
                                    <i className="fas fa-bars"></i>
                                </button>
                        </div>
                        <div class="max-sm:col-start-2 max-sm:col-end-6  col-start-3 col-end-6">
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    searchnav(e)
                                }} className="d-flex" id="frmSearch">
                                    <div className="input-group mb-3">
                                        <input className="form-control w-50" name="search" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-search" > <i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                        </div>
                        <div class=" col-start-7 grid grid-cols-2 justify-items-end  gap-4">

                                 <li className="  nav-item dropdown  btnUser p-0" style={{ listStyle: "none" }}>
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i>
                                    </a>
                                    <ul className="dropdown-menu mt-2 menuDesktop" aria-labelledby="navbarScrollingDropdown" >
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Ajustes</a></li>
                                        <li><a className="dropdown-item" href="#/pedidos">Mis pedidos</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            {!tokensession ?
                                                <a className="nav-link iconCarr text-white" href="#/login" > Iniciar Sesion</a> : <a className="dropdown-item" onClick={(e) => logout()}>Cerrar Sesión</a>}
                                        </li>
                                    </ul>
                                </li>

                                <li className="" style={{ listStyle: "none" }}>
                                    <a className="nav-link iconCarr text-white" onClick={() => statesetSidebarCarr(true)} data-bs-toggle="" data-bs-target="" >
                                        <i style={{ cursor: "pointer" }} className="fas fa-car iconCarr"></i>
                                    </a>
                                </li>
                        </div>
                       
                         {/*    <div className="">

                                <button className="navbar-toggler btn text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="offcanvasNavbar">
                                    <i className="fas fa-bars"></i>
                                </button>

                            </div>

                            <div className="col-span-2 contentSearch w-50"  >
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    searchnav(e)
                                }} className="d-flex" id="frmSearch">
                                    <div className="input-group mb-3">
                                        <input className="form-control w-50" name="search" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-search" > <i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>

                            <div className="d-grid grid-cols-2 p-0">

                                <li className="nav-item dropdown w-25 btnUser col p-0" style={{ listStyle: "none" }}>
                                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i>
                                    </a>
                                    <ul className="dropdown-menu mt-2 menuDesktop" aria-labelledby="navbarScrollingDropdown" >
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Ajustes</a></li>
                                        <li><a className="dropdown-item" href="#/pedidos">Mis pedidos</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            {!tokensession ?
                                                <a className="nav-link iconCarr text-white" href="#/login" > Iniciar Sesion</a> : <a className="dropdown-item" onClick={(e) => logout()}>Cerrar Sesión</a>}
                                        </li>
                                    </ul>
                                </li>

                                <li className="col-3 p-0" style={{ listStyle: "none" }}>
                                    <a className="nav-link iconCarr text-white" onClick={() => statesetSidebarCarr(true)} data-bs-toggle="" data-bs-target="" >
                                        <i style={{ cursor: "pointer" }} className="fas fa-car iconCarr"></i>
                                    </a>
                                </li>
                            </div> */}


                        </div>
                    </div>

                </div>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="menuLateral" aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header menuLateralHeader" >
                        <h5 className="offcanvas-title menuLateraltitle pt-3 pb-3 text-center" style={{ fontSize: "20px !important", textDecoration: "none" }}><a style={{ textDecoration: "none" }} href="#/categorias"  >Categorias</a></h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="menuLateralBody offcanvas-body">
                        <ul className="navbar-nav accordion accordion-flush menuLateralUl " id="MenuLateralAccordionDnone">

                            {boxsCat()}

                        </ul>
                    </div>


                </div>

                {statesidebarCarr &&
                    <div className="contentcarrito">
                        <div className="offcanvas offcanvas-end" style={{ right: "400px", visibility: "visible", opacity: "1" }} data-bs-scroll="true" id="" aria-labelledby="">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title !text-3xl text-[#03449d] font-semibold" id="offcanvasWithBothOptionsLabel" >Carrito</h5>
                                <button type="button" className=" !text-3xl btn-close  !text-black" onClick={() => statesetSidebarCarr(false)} data-bs-dismiss="offcanvas" aria-label="Close">x</button>
                            </div>
                            <div className="offcanvas-body">

                                <div className="sidebarCarr">
                                    {
                                        procarr()
                                    }
                                </div>


                                <div className="sidebarTpagar text-center" style={{ background: "#f5f5f5 padding: 10px" }}>

                                </div>


                                <div className="text-center pt-2">
                                    <a href="#/carrito"  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Ver detalle de mi carrito
                                     <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
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