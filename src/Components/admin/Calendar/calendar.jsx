import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs';
import { useContext } from "react";
import { Card } from "@tremor/react";


import TokenAdminContext from "../../../context/tokenAdmin";
import { UseIcons } from "../hook/icons";

const CalendarComp = () => {
    const localizer = dayjsLocalizer(dayjs)
    const events=[
        {
            start:dayjs('2024-01-10T12:00:00').toDate(),
            end:dayjs('2024-01-10T13:00:00').toDate(),
            title:"Cita odontologica"
        },
        {
            start:dayjs('2024-01-12T12:00:00').toDate(),
            end:dayjs('2024-01-12T13:00:00').toDate(),
            title:"Cita odontologica"
        }
    ]

    const { stateTokenAdmin } = useContext(TokenAdminContext)

    const { iconEdit, iconDelete, iconDetalle, iconNew, iconLoad } = UseIcons()

    return (

        <div className="w-100 max-md:!w-[80%]">
            {/*       {loaderGuia && <Loader />} */}
            <Card>
                <h2 className="!text-3xl text-blue-900 pb-4 font-bold">Calendario</h2>
                <button /* onClick={() => { getguia(stateTokenAdmin) }} */ className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button">
                    <div className="flex">
                        <img src={iconLoad} width="20px" alt="" />
                    </div>
                </button>
                <button /* onClick={() => { toggleModal(); setform(formInit);reset()  }}  */ className="block mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center " type="button">
                    <div className="flex">
                        <p className="pr-2">Nuevo</p>
                        <img src={iconNew} width="20px" alt="" />
                    </div>
                </button>


                <div className='w-[100%] h-[100vh]'>
                    <Calendar
                        events={events}
                        localizer={localizer}
                    

                    />
                </div>
            </Card>



        </div>

    );
}

export default CalendarComp;