
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import InformacionGuia from "./components/Informacion/Informacion";
import Diagnostico from "./components/Diagnostico/Diagnostico";
import PruebasFinales from "./components/Pruebas_finales/Prubeas_finales";
import Cotizacion from "./components/Cotizacion/Cotizacion";
import { useState } from "react";

const ModalGuia = ({deleteEquipo,
    addEquipo, stateTokenAdmin,
    customer_now,
    loaderCoti, loaderPruebas, loaderDiag,
    loaderInfo, Loader,
    pruebas_finales, informacion,
    cotizacion,
    diagnostico,
    getDiagByEquipo, getCotiByEquipo, getinfoByEquipo, getPruebasByEquipo,
    toggleModalGuia, resetGuia, ListEquipos, codigoGuia

}) => {


    const data = [
        {
            label: "Informacion Guia",
            value: "Informacion_Guia",
        },
        {
            label: "Diagnostico",
            value: "Diagnostico",

        },

        {
            label: "Cotizacion",
            value: "Cotizacion",
        },
        {
            label: "Pruebas finales",
            value: "Pruebas_finales",
        }
    ]

    return (

        <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)] max-h-full">
            {loaderCoti && <Loader></Loader>}
            {loaderInfo && <Loader></Loader>}
            {loaderPruebas && <Loader></Loader>}
            {loaderDiag && <Loader></Loader>}

            <input type="hidden" name="_id" id="_id" />
            <div className="relative p-4 bg-white rounded-lg w-[90%] lg:top-[-130px] max-md:w-[80%] ">
                <button onClick={() => { toggleModalGuia(); resetGuia() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>

                <div className=" pb-2">
                    <h2 className="!text-4xl font-medium text-[#0C1D79] ">Numero de Guia</h2>

                    <div className="flex pt-4">
                        <img width="20px" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1709315286/Dashboard/fecha_azul_nshnkk.svg" alt="" />
                        <span className="pl-4 !text-[20px] text-[#19191C] font-semibold">{codigoGuia} </span>
                        <button onClick={() => addEquipo(codigoGuia, stateTokenAdmin)} className=" text-white !text-[12px] bg-[#0C1D79] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 ml-3 py-1.5 text-center " type="submit">
                            Agregar Equipo
                        </button>

                    </div>
                </div>
                <div className="mt-2">
                    <div className="text-center mb-1">

                        <span className="text-[#0C1D79] font-bold">
                            Cliente: <span>{customer_now}</span>
                        </span>
                    </div>
                    {ListEquipos?.length>0&&
                    <Tabs value={0}>
                        <TabsHeader className="   "
                       >
                            {
                                ListEquipos.map((el, i) => (
                                    <Tab  key={i} value={i} onClick={() => { getinfoByEquipo(el._id); getDiagByEquipo(el._id); getCotiByEquipo(el._id); getPruebasByEquipo(el._id) }}>
                                        <div className={`font-bold flex items-center gap-2` }>
                                            <span>
                                                {el.nombre}
                                            </span>
                                            <button onClick={(e)=>{e.stopPropagation();deleteEquipo(codigoGuia,el._id,stateTokenAdmin)}} className="absolute  right-0 font-bold text-gray-[#0C1D79] focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-1.5  ">X</button>
                                        </div>
                                    </Tab>
                                )
                                )
                            }

                        </TabsHeader>
                        <TabsBody>

                            <Tabs value="Informacion_Guia">
                                <TabsHeader  className=" rounded-none  border-blue-gray-50 p-0"
                        >
                                    {data.map(({ label, value }) => (
                                        <Tab key={value} value={value}>
                                            <div className="font-bold flex items-center gap-2">
                                                {label}
                                            </div>
                                        </Tab>
                                    ))}
                                </TabsHeader>

                                <TabsBody>
                                    <TabPanel key="Informacion_Guia" value="Informacion_Guia">

                                        <InformacionGuia informacion={informacion} />
                                    </TabPanel>

                                    <TabPanel key="Diagnostico" value="Diagnostico">
                                        <Diagnostico diagnostico={diagnostico} />
                                    </TabPanel>


                                    <TabPanel key="Cotizacion" value="Cotizacion">
                                        <Cotizacion cotizacion={cotizacion} />
                                    </TabPanel>

                                    <TabPanel key="Pruebas_finales" value="Pruebas_finales">
                                        <PruebasFinales pruebas_finales={pruebas_finales} />
                                    </TabPanel>

                                </TabsBody>
                            </Tabs>

                        </TabsBody>
                    </Tabs>
                    }

                </div>
            </div>


        </div>




    );
}

export default ModalGuia;

