
import React,{ useEffect, useMemo, useState } from 'react';
import { GetAllBanner } from '../../../../services/CommonService';
import BannerTable from './BannerTable';

const Banner =() =>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getBanner();
	}, []);  

   const getBanner =async() =>{
    const bannerdata = await GetAllBanner({});
    setData(bannerdata.data.docs);
   }

    return(
    <>
    {data.length > 0 &&
				<BannerTable propdata={data} />
			} 

    
    </>
    )

}
export default Banner