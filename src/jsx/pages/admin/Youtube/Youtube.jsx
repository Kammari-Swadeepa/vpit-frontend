
import React,{ useEffect, useMemo, useState } from 'react';
import { getYoutubeVideo } from '../../../../services/CommonService';
import YoutubeVideoTable from './YoutubeVideoTable'

function Youtube() {
  const [data, setData] = useState([]);
	useEffect(() => {
		getYoutube();
	}, []);  

   const getYoutube =async() =>{
    const ytVideoData = await getYoutubeVideo({});
    setData(ytVideoData.data.docs);
   }
  return (
    <>
      {data.length > 0 &&
				<YoutubeVideoTable propdata={data} />
			} 
    </>
  )
}

export default Youtube