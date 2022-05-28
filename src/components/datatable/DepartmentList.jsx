import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, depColumns , userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios';
import {Loading} from '../../pages/Loading/Loading';

const DepartmentList = () => {

  

  const [deps , setDepartments] = useState([{
    id: 1,
    departmentName: "Dental",
    createdAt:"20-02-2022",
    updatedAt: "19-02-2022"
  },
  {
    id: 2,
    departmentName: "Pyschological",
    createdAt:"20-02-2022",
    updatedAt: "19-02-2022"
  },
  {
    id: 3,
    departmentName: "Nueron",
    createdAt:"20-02-2022",
    updatedAt: "19-02-2022"
  }]);

  const [loading , setLoading] = useState(false);


  useEffect(()=>{
    // axios.get('https://hospital-5d55.restdb.io/rest/department').then(res =>{
    //   setDepartments(deps);
    //   setLoading(true);
    //   console.log(deps);
    //   console.log(loading);
    // })
    setDepartments(deps);
    console.log(deps);
  })

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
        Add New Department
        <Link to="/departments/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={deps}
        columns={depColumns.concat(actionColumns)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </>

  );
};

export default DepartmentList;
