import React,{ useEffect, useMemo, useState } from 'react';
import {getAllArea  } from "../../../../services/CommonService";
import AreaTable from './AreaTable';

const Area =() =>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getArea();
	}, []);  

   const getArea =async() =>{
    const areadata = await getAllArea({});
    setData(areadata.data.docs);
   }

    return(
    <>
    
    {data.length > 0 &&
				<AreaTable propdata={data} />
			} 

    
    </>
    )

}
export default Area