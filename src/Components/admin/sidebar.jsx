import { useState } from "react";
import { Link } from "react-router-dom";



const AdminSidebar = () => {

    const [open, setOpen] = useState(false);
    
    const Menus = [
        { title: "Unidades", src: "Chart_fill" },
        { title: "Servicios", src: "Chart_fill" },
        { title: "Users", src: "User", gap: true },
        { title: "Customers", src: "User" },
        { title: "Providers", src: "User" },
        { title: "Productos", src: "User" },
        { title: "Categoria", src: "User" },
        { title: "Subcategoria", src: "User" },
        { title: "Documentos", src: "User" },
        { title: "Movimientos", src: "User" },
        { title: "Caja", src: "User" },
        { title: "Fechas ", src: "Calendar" },
        { title: "Search", src: "Search" },
        /* { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true }, */
        { title: "Setting", src: "Setting" },
    ];
    return (
            <div className="">
                <div className={` ${open ? "w-72" : "w-24"} bg-dark-purple h-100 p-4  pt-8 relative duration-300`}>
                    <img
                        src="./src/components/admin/assets/control.png"
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                        border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}/>
                    <div className="flex gap-x-4 items-center">
                        <img
                            src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683650831/GOHComputer/Public/icoon_zyvcbp.png"
                            className={`cursor-pointer duration-500 w-20 ${open && "rotate-[360deg]"
                                }`}/>
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0" }`}>
                            Admin
                        </h1>
                    </div>
                    <ul className="pt-6">

                        {Menus.map((Menu, index) => (
                            <li key={index}
                                className={``}>
                                <a href={`/#/dashadmin/gohcomputer/${Menu.title}`} title={Menu.title} className={` flex rounded-md p-2 cursor-pointer  hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}>
                                    <img src={`./src/components/admin/assets/${Menu.src}.png`}  />
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