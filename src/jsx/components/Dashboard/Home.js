


import { Modal } from "react-bootstrap"
import Patients from "../../pages/patient/Patients"
import CountReport from "./Svasthaa/CountReport"
import DoctorDetails from "./Svasthaa/DoctorDetails"
import PatientActions from "../../pages/patient/PatientActions"



const Home = () => {

    return(
        <>
		 <CountReport/>
        <DoctorDetails/>
       
        <Patients/>

      
        </>
    )



}
export default Home