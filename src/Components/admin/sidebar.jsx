import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TokenAdminContext from "../../context/tokenAdmin";



const AdminSidebar = () => {
    const { user } = useContext(TokenAdminContext)
    if (!user) return location.href = "/#/login/admin"
    let userJson = JSON.parse(user)

    const [open, setOpen] = useState(false);
    const query = useLocation();
    let initCat = query.pathname.split("/")[3];
    const [cat, setcat] = useState(initCat);

    const Menus = [
        { title: "Unidades", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100991/Dashboard/grafico-de-barras_1_1_deuuxz.svg", rol: "CUSTOMER" },
        { title: "Servicios", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100991/Dashboard/grafico-de-barras_1_1_deuuxz.svg", rol: "CUSTOMER" },
        { title: "Users", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/usuario_1_xedpvr.svg", gap: true, rol: "ADMIN" },
        { title: "Customers", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/grupo_1_rnbcez.svg", rol: "CUSTOMER" },
        { title: "Promociones", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/promocion_1_duczxv.svg", rol: "CUSTOMER" },
        { title: "Imagenes", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/promocion_1_duczxv.svg", rol: "CUSTOMER" },
        //{ title: "Providers", src: "User" },
        { title: "Productos", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/caja_1_ycmuvg.svg", rol: "CUSTOMER" },
        { title: "Categoria", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/categorizacion_1_mkvjxw.svg", rol: "CUSTOMER" },
        { title: "Subcategoria", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/categorizacion_1_mkvjxw.svg", rol: "CUSTOMER" },
        { title: "Documentos", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100736/Dashboard/documento_1_bnkguh.svg", rol: "CUSTOMER" },
        { title: "Compras", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100736/Dashboard/documento_1_bnkguh.svg", rol: "CUSTOMER" },
        { title: "Movimientos", src: "https://res.cloudinary.com/dq3fragzr/image/upload/v1694100735/Dashboard/flujo-de-fondos_1_qoetj8.svg", icon: "https://www.flaticon.es/iconos-gratis/base-de-datos", rol: "CUSTOMER" },
        // { title: "Caja", src: "User" },
        //{ title: "Fechas ", src: "Calendar" },
        //{ title: "Search", src: "Search" },
        /* { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true }, */
        // { title: "Setting", src: "Setting" },
    ];
    return (
        <div className="">
            <div className={` ${open ? "w-72" : "w-24"} bg-dark-purple h-100 p-4  pt-8 relative duration-300`}>
                <img
                    src="https://res.cloudinary.com/dq3fragzr/image/upload/v1694272036/Dashboard/proximo_bos1cu.svg"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                        border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)} />

                <div className="flex gap-x-4 items-center">
                    <img
                        src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683650831/GOHComputer/Public/icoon_zyvcbp.png"
                        className={`cursor-pointer duration-500 w-20 ${open && "rotate-[360deg]"
                            }`} />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}>
                        Admin
                    </h1>
                </div>
                <ul className="pt-6">


                    {userJson.rol === "ADMIN" && Menus.map((Menu, index) => (

                        <li key={index}>
                            <a href={`/#/dashadmin/gohcomputer/${Menu.title}`} title={Menu.title} className={` flex rounded-md p-2 cursor-pointer  hover:bg-light-white hover:text-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${Menu.title === cat && "bg-light-white"} `}>
                                <img src={`${Menu.src}`} width="20px" />

                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </a>
                        </li>
                    ))}

                    {userJson.rol === "COMUN" && Menus.map((Menu) => (

Menu.rol==="CUSTOMER"&&
                        <li >
                            <a href={`/#/dashadmin/gohcomputer/${Menu.title}`} title={Menu.title} className={` flex rounded-md p-2 cursor-pointer  hover:bg-light-white hover:text-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${Menu.title === cat && "bg-light-white"} `}>
                                <img src={`${Menu.src}`} width="20px" />

                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </a>
                        </li>
                    ))}


                </ul>
            </div>
            {/*  <div className="h-screen flex-1 p-7">
                    <h1 className="text-2xl font-semibold ">Home Page</h1>
                </div> */}
        </div>
    );
}

export default AdminSidebar;