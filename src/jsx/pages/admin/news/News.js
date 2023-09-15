import { useEffect, useState } from "react";
import { GetAllLatestNews } from "../../../../services/CommonService";
import NewsTable from "./NewsTable";
import AddNews from "./AddNews";

const News=()=>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getNews();
	}, []);  

   const getNews =async() =>{
    const newsdata = await GetAllLatestNews({});
    setData(newsdata.data.docs);
   }
 return(
    <>
   
    {data.length > 0  &&
                <NewsTable  propdata={data}/>
			 } 


          {/* {console.log(data)}

          <NewsTable  propdata={data}/> */}

    </>
 )
}
export default News;