import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const New = ({ inputs, title }) => {
  
  const classes = useStyles();
  const [depName, setDepName] = useState({
    depName:""
  });


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDepName({ ...depName, [name]: value });
  };


  const output = () => {
   console.log(depName);
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>add new department</h1>
         
        </div>
        <div className="bottom">
          <div className="left">

          </div>
          <div className="right" >
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic"
             label="department name" 
             variant="outlined" 
             type="text"
             name="depName"
             onChange={handleChange}
             />
             
              <button onClick={output}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
