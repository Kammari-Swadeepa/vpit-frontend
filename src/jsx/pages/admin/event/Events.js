import { useEffect, useState } from "react";
import { GetAllEvents } from "../../../../services/CommonService";
import EventTable from "./EventTable";
import AddEvent from "./AddEvent";

const Events =()=>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getEvents();
	}, []);  

   const getEvents =async() =>{
    const eventdata = await GetAllEvents({});
    setData(eventdata.data.docs);
   }
    return(
        <>
        {console.log("events",data)}

{data.length > 0  &&
				<EventTable propdata={data}  />
			 } 

     
        </>
    )

}
export default Events;