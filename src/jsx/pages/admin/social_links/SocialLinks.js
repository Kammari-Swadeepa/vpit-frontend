
import React,{ useEffect, useMemo, useState } from 'react';
import { GetAllSocialLinks } from '../../../../services/CommonService';
import SocialLinksTable from './SocialLinksTable';

const SocialLinks =() =>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getSocialLinks();
	}, []);  

   const getSocialLinks =async() =>{
    const sociallinksdata = await GetAllSocialLinks({});
    setData(sociallinksdata.data.docs);
   }

    return(
    <>
    {data.length > 0 &&
				<SocialLinksTable propdata={data} />
			} 

    
    </>
    )

}
export default SocialLinks