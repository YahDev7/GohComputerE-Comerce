
import { UseDesc } from "./Hooks/UseDesc";
import { useParams} from "react-router-dom"
import { useContext } from "react";
import CarrContext from "../../Context/carr";
import Loader from "../Loader";

const CompDescription = () => {
    const {id} =useParams()
    const {addcarr,stateDolar,loader,setloader} = useContext(CarrContext)
    const {stateonepro,porespec,setcantProd,cantProd} =UseDesc(id,setloader)

    const espec = () => {
        let box=[];
        if(!stateonepro?.especificaciones)return <h2>No hay especificaciones que mostrar</h2>
        if(stateonepro.especificaciones.length===0 )return <h2>No hay especificaciones que mostrar</h2>

        for (let i = 0; i < stateonepro.especificaciones.length; i++) {
           
           box.push( 
                <div >
                    <h3>{stateonepro.especificaciones[i].Nombre}</h3>
                    <p>{stateonepro.especificaciones[i].Descripcion}</p>
                </div>
               )
       }

       return box
   }

    return (  <div>

        {stateonepro.err?<h2>{stateonepro.statusText}</h2>:
        <div className="pt-0 pt-sm-4">
            
            <div className="navegacion m-sm-0 ">
                <nav aria-label="breadcrumb" className="ps-3 ps-sm-0 containerDes">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#/gohcomputer">Home</a></li>
                        <li className="breadcrumb-item"><a href="#/categorias">Categorias</a></li>
                        <li className="breadcrumb-item"><a href={"#/subcategorias/" +stateonepro.idcat}>{stateonepro.nomcat}</a></li>
                        <li className="breadcrumb-item"><a href={"#/productos/"+ stateonepro.subcategoria_id }>{stateonepro.subcatnombre}</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><a >product</a> </li>
                    </ol>
                </nav>
            </div>
            <div style={{position:"relative"}}>
                    {loader&& <Loader></Loader>}
                        <div id="mainDescription" className="pt-5  containerDes pb-4 pt-ms-5 "/* pt-md-0  */>

                    
                            <div className="row imgAndDescri">
                                <div className="imgDescripSlider  col-lg-7 col-12 col-md-7 " >
                                    <div className="boxDescrip">
                     <img src={stateonepro?.imagenes[0]?.URL||'https://res.cloudinary.com/dq3fragzr/image/upload/v1663966406/cld-sample.jpg'} className="imgProDescrip" alt="" />
 
                                       {/*  <img src={stateonepro.url_imagencom} className="imgProDescrip" alt="" /> */}
                                    </div>
                                </div>

                                <div className="comDescrip m-auto  col-lg-7 col-10 col-md-7  mt-md-0 ps-0" >
                                    <h2 className="pb-0 pb-3 h2Des" >{stateonepro.nomcomp}</h2>
                                    <div className="row groupCodUrl" >
                                        <p className="col-5" >codigo: {stateonepro.idcomp} </p>
                                        <p className="col-3" >URL Fab: <a href={stateonepro.url_fab} target="_blank">Link</a> </p>

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
                                        <button className="col-1" onClick={()=>setcantProd(cantProd+1)}>+</button>
                                        <input className="col-6 p-0" type="number" name="" id="" onChange={(e)=>setcantProd(e.target.value)} value={cantProd} />
                                        <button className="col-1" onClick={()=>{
                                            if(cantProd===1) return ;
                                            setcantProd(cantProd-1)}
                                        }>-</button>
                                        </div>

                                        </div>

                                    </div>
                                    <p className="pb-3 pt-3 precioVentaPro col"> S/{ stateonepro?.precio_promoventa|| stateonepro.precio_venta}</p>

                                    <div className="divbtndesc">
                                        <button type="button" className="addCarr btn-description btn p-2" onClick={()=>addcarr(stateonepro.idcomp,cantProd)} > Agregar al carrito o comprar</button>
                                    </div>
                                </div>
                            </div>

                            <div className="m-5 ">
                                <h2 className="pb-4 espec" >Especificaciones</h2>

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