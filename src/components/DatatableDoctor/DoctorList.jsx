import "./DatatableDoctor.scss";
import { DataGrid } from "@mui/x-data-grid";
import { doctorColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios';
import {Loading} from '../../pages/Loading/Loading';

const DoctortList = () => {

  

  const [doctor , setDoctor] = useState([
    {id: 1,firstName:"Mugisha",lastName:"Pacifique",departmentName:"Dental",gender:"male",age:25,email:"mugishapa@gmail.com",phoneNumber:"0783381277",startingHour:8,endingHour:9,},
    {id: 2,firstName:"Manzi",lastName:"Patrick",departmentName:"Surgery",gender:"male",age:25,email:"mugishapa@gmail.com",phoneNumber:"0783381277",startingHour:8,endingHour:9,},
    {id: 3,firstName:"Gilbert",lastName:"Tuyishime",departmentName:"Neuron",gender:"male",age:23,email:"mugishapa@gmail.com",phoneNumber:"0783381277",startingHour:8,endingHour:9,},
  ]);

  const [loading , setLoading] = useState(false);

  const [user , setUser] = useState([]);


  useEffect(()=>{
    // axios.get('https://hospital-5d55.restdb.io/rest/department').then(res =>{
    //   setDepartments(deps);
    //   setLoading(true);
    //   console.log(deps);
    //   console.log(loading);
    // })
    // setDepartments(deps);
    // console.log(deps);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    setUser(response.data);
    console.log(response.data);
    setLoading(true);
});
  })

//   const [data, setData] = useState(userRows);

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
