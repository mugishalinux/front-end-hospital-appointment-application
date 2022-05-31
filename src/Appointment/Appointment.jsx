import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/DatatableDoctor/DoctorList"
import AppList from "../../components/Appointments/AppLits"

const Appointment = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <Datatable/> 
      </div>
    </div>
  )
}

export default Appointment