import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Appoint = (props) => {
  

    const [availableAppointment , setAvailableAppointment] = useState([
        {date:"20-02-2022" , hour:"17:00"},
        {date:"20-02-2022" , hour:"18:00"},
        {date:"20-02-2022" , hour:"19:00"},
        {date:"20-02-2022" , hour:"20:00"},
        {date:"20-02-2022" , hour:"21:00"},
        {date:"20-02-2022" , hour:"22:00"},
        {date:"20-02-2022" , hour:"23:00"},
        {date:"20-02-2022" , hour:"00:00"}
      ])
    
 
  return (
    <>
     <div className="">
     <table>
  <tr>
    <th>date</th>
    {/* <th>Lastname</th> */}
  </tr>
  
  <tr>
      {
          availableAppointment.map(app => {
            <td>{app.hour
            }</td>
          })
      }
  </tr>
</table>
         </div>
         <h1>hey {props.doctorNameFet} </h1>
    </>
  
  );
};

export default Appoint;