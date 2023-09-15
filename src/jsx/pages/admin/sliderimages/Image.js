import { useEffect, useState } from "react";
import { GetAllSliderImages } from "../../../../services/CommonService";
import ImageTable from "./ImageTable";


const Image=()=>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getsliderimages();
	}, []);  

   const getsliderimages =async() =>{
    const imagesdata = await GetAllSliderImages({});
    setData(imagesdata.data.docs);

   }

return(
    <>
     {data.length > 0  &&
				<ImageTable propdata={data}/>
			 } 

    </>
)
}
export default Image;