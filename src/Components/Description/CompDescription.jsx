
import { UseDesc } from "./Hooks/UseDesc";
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import Loader from "../public/Loader";
import CarritoContext from "../../context/carrito";
import ProductContext from "../../context/products";
import { PromocionesFetch } from "../../api/Promociones";
import { Fetchs } from "../../api/fetchs";

let initalProd = {
    id: "",
    nombre: "",
    preciodolares: null,
    preciosoles: null,
    link: "",
    categoria_id: null,
    subcategoria_id: null,
    imagenes: []
}

const CompDescription = () => {
    const { id } = useParams()
    const {  loaderprod, setloaderprod } = useContext(ProductContext)
   const { stateonepro, setcantProd, cantProd } = UseDesc(id, setloaderprod)
    const { addcarr } = useContext(CarritoContext)

    let metodosPago=[
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/plin-logo-967A4AF583-seeklogo.com_gb3evx.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/yape-logo-3E473EE7E5-seeklogo.com_ypnk28.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/interbank_uqsza8.png",
        "https://res.cloudinary.com/dq3fragzr/image/upload/v1688850926/GOHComputer/Public/unnamed_mkb6bd.png",
    ]
    const espec = () => {
        let box = [];
        if (!stateonepro?.especificaciones) return <h2>No hay especificaciones que mostrar</h2>
        if (stateonepro.especificaciones.length === 0) return <h2>No hay especificaciones que mostrar</h2>

        for (let i = 0; i < stateonepro.especificaciones.length; i++) {

            box.push(
                <div className="pb-2">
                    <h3 className="!text-2xl font-semibold text-[#191919]">{stateonepro.especificaciones[i].Nombre}</h3>
                    <p className="font-semibold text-[#03449d]">{stateonepro.especificaciones[i].Descripcion}</p>
                </div>
            )
        }

        return box
    }

    return (<div>

        {stateonepro.err ? <h2>{stateonepro.statusText}</h2> :
            <div className="pt-0 pt-sm-4">

                <div className="navegacion m-sm-0 ">
                    <nav aria-label="breadcrumb" className="ps-3 ps-sm-0 containerDes">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#/gohcomputer">Home</a></li>
                            <li className="breadcrumb-item"><a href="#/categorias">Categorias</a></li>
                            <li className="breadcrumb-item"><a href={"#/subcategorias/" + stateonepro.idcat}>{stateonepro.nomcat}</a></li>
                            <li className="breadcrumb-item"><a href={"#/productos/" + stateonepro.subcategoria_id}>{stateonepro.subcatnombre}</a></li>
                            <li className="breadcrumb-item active" aria-current="page"><a >product</a> </li>
                        </ol>
                    </nav>
                </div>
                <div style={{ position: "relative" }}>
                    {loaderprod && <Loader></Loader>}
                    <div id="mainDescription" className="pt-5  containerDes pb-4 pt-ms-5 "/* pt-md-0  */>


                        <div className="row imgAndDescri">
                            <div className="imgDescripSlider  col-lg-7 col-12 col-md-7 " >
                                <div className="boxDescrip">
                                    {
                                        stateonepro?.imagenes.length>0&& 
                                    <img src={stateonepro?.imagenes[0]?.URL||stateonepro?.imagenes[0][0]?.URL || 'https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg'} className="imgProDescrip" alt="" />

                                    }
 
                                    {/*  <img src={stateonepro.url_imagencom} className="imgProDescrip" alt="" /> */}
                                </div>
                            </div>

                            <div className="comDescrip m-auto  col-lg-7 col-10 col-md-7  mt-md-0 ps-0" >
                                <h2 className=" pb-3 h2Des font-bold !text-3xl max-sm:!text-2x1 max-sm:mt-5" >{stateonepro.nomcomp}</h2>
                                <div className="row groupCodUrl" >
                                    <p className="col-5" >codigo: {stateonepro.codigo} </p>
                                    <p className="col-3" >URL Fab: <a href={stateonepro.url_pro} target="_blank">Link</a> </p>

                                </div>

                                <h3 className=""  >Descripcion</h3>
                                <p className="pb-3 desc"> {stateonepro.descripcomp} </p>

                                <div className="row">
                                    <p className="col-3" >Stock: {stateonepro.stock}</p>
                                    <p className="col-3" >Garantia:{stateonepro.garantia}</p>
                                </div>
                                <div className="row">
                                    <div className="col-2 divcant ">
                                        <div className="row frmcantidad">
                                            <button className="col-1" onClick={() => setcantProd(cantProd + 1)}>+</button>
                                            <input className="col-6 p-0" type="number" name="" id="" onChange={(e) => setcantProd(e.target.value)} value={cantProd} />
                                            <button className="col-1" onClick={() => {
                                                if (cantProd === 1) return;
                                                setcantProd(cantProd - 1)
                                            }
                                            }>-</button>
                                        </div>

                                    </div>

                                </div>
                                <p className="pb-3 pt-3 precioVentaPro col font-bold !text-4xl max-sm:!text-2x1"> S/{stateonepro?.precio_promoventa || stateonepro.precio_venta}</p>

                                <div className="divbtndesc">
                                    <button type="button" className="addCarr btn-description btn p-2" onClick={() => addcarr(stateonepro.idcomp, cantProd)} > Agregar al carrito o comprar</button>
                                </div>

                                <div className="flex space-x-4 mb-4 mt-4">
                                            {metodosPago.map((el)=> <img src={el} className="w-12 h-12 rounded-full" alt="" /> )}


                                </div>
                                <div className="flex items-center mb-3">
                                    <i className="fas fa-shipping-fast !text-4xl"></i>
                                    <p className="ml-2">Envío a domicilio</p>
                                </div>

                                <div className="flex items-center">
                                    <i className="fas fa-store !text-4xl"></i>
                                    <p className="ml-2">Recojo en almacen</p>
                                </div>



                            </div>
                        </div>

                        <div className="m-5 ">
                            <h2 className="pb-4 espec font-bold !text-3xl" >Especificaciones</h2>

                            {espec()}

                        </div>
                    </div>
                </div>
            </div>
        }
    </div>


    );
}

export default CompDescription;