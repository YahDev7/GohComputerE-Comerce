import { useState } from "react";


export const UseIcons = () => {
    const [iconEdit, seticonEdit] = useState("https://res.cloudinary.com/dq3fragzr/image/upload/v1694101654/Dashboard/editar_1_pu8xtc.svg");
    const [iconDelete, seticonDelete] = useState("https://res.cloudinary.com/dq3fragzr/image/upload/v1694101654/Dashboard/borrar_1_nqvepv.svg");
    const [iconsave, seticonsave] = useState("https://res.cloudinary.com/dq3fragzr/image/upload/v1694101654/Dashboard/disquete_1_neognm.svg");
    const [iconpagar, seticonpagar] = useState(" https://res.cloudinary.com/dq3fragzr/image/upload/v1694103340/Dashboard/pagar_1_czgvis.svg");
    const [iconAnular, seticonAnular] = useState("https://res.cloudinary.com/dq3fragzr/image/upload/v1694103341/Dashboard/rechazar-_1__1_1_tnddtb.svg");
   
   
  return {iconEdit,
    iconDelete,
    iconsave,
    iconpagar,
    iconAnular
};
}
