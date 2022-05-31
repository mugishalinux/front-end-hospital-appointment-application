import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, appointColumns, depColumns , userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios';


const AppointList = () => {

  

  const [appointment , setAppointment] = useState([
//       {
//       id:1,name:"mugisha"
//   },
//   {
//     id:2,name:"pacifique"
// }
]);


  useEffect(()=>{

    axios.get("http://localhost:8080/api/v1/apt/all" ).then((response) => { 
    setAppointment(response.data)
    console.log(response.data);
});
  }, [])





  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              {/* <div className="viewButton">View</div> */}
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  const actionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
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
        List Of Appointments Requested
      </div>
      <DataGrid
        className="datagrid"
        rows={appointment}
        columns={appointColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>

  );
};

export default AppointList;
