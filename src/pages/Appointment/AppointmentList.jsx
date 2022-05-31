import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AppointList from "../../components/datatable/AppointList"

const AppointmentList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <AppointList/> 
      </div>
    </div>
  )
}

export default AppointmentList