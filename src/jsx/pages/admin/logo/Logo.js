import { useEffect, useState } from "react";
import { GetAllLogos } from "../../../../services/CommonService";
import LogoTable from "./LogoTable";
import AddLogo from "./AddLogo";


const Logo =()=>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getlogos();
	}, []);  

   const getlogos=async() =>{
    const newsdata = await GetAllLogos({});
    setData(newsdata.data.docs);
   }
return(
    <>
    {data.length>0 && 
      <LogoTable propdata={data}/>}
      {console.log(data,"data")}
      {/* <LogoTable propdata={data}/> */}
      
    </>
)
}
export default Logo;
