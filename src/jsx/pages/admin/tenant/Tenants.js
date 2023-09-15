
import React,{ useEffect, useMemo, useState } from 'react';
import { GetAllTenants } from '../../../../services/CommonService';
import TenantTable from './TenantTable';

const Tenants =() =>{
    const [data, setData] = useState([]);
	useEffect(() => {
		getTenants();
	}, []);  

   const getTenants =async() =>{
    const tenantdata = await GetAllTenants({});
    console.log(tenantdata,"tenentData")
    setData(tenantdata.data.docs);
   }

    return(
    <>
    {data.length > 0 &&
				<TenantTable propdata={data} />
			} 

    
    </>
    )

}
export default Tenants