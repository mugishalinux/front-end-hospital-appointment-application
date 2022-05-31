import "./DatatableDoctor.scss";
import { DataGrid } from "@mui/x-data-grid";
import { doctorColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios';
import {Loading} from '../../pages/Loading/Loading';

const DoctortList = () => {


  const [loading , setLoading] = useState(false);

  const [user , setUser] = useState([]);

  useEffect(()=>{
    http://localhost:8080/api/v1/department
    // axios.get('https://hospital-5d55.restdb.io/rest/department').then(res =>{
    //   setDepartments(deps);
    //   setLoading(true);
    //   console.log(deps);
    //   console.log(loading);
    // })
    // setDepartments(deps);
    // console.log(deps);
    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {

  
    axios.get("https://hospital-appointment-com.herokuapp.com/api/v1/doctor" ).then((response) => { 
       
    setUser(response.data);
    console.log(response.data);
    setLoading(true);
});
  }, [])



//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/users/test" style={{ textDecoration: "none" }}>
//               {/* <div className="viewButton">View</div> */}
//             </Link>
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];


//   const actionColumns = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link> */}
//             <div
//               className="deleteButton"
//               onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];

  return (
    <>
 {/* {loading ? (<div>

 </div>)}; */}
    {/* <div className="datatable">
     <div className="datatableTitle">
        Add New Department
        <Link to="/departments/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div> */}

    <div className="datatable">
     <div className="datatableTitle">
        Add New Doctor
        <Link to="/doctor/newDoctor" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={user}
        columns={doctorColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
    </>

  );
};

export default DoctortList;
