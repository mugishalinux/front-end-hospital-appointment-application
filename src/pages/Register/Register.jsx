import React, { useState } from "react";
import "./register.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Register = () => {
  const navigate = useNavigate()
  const auth = () => {
    navigate('/home')
  }
  const register = () => {
    navigate('/register')
  }
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};

const [ reg , setReg] = useState([{
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:""
}])

const handleInputs = (e) =>{
    const { name, value } = e.target;
    setReg({...reg , [name]:value});
}

const handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify(reg);
    axios
      .post("https://hospital-appointment-com.herokuapp.com/api/auth/user/register", reg)
      .then(res => console.log(res))
      .then(res =>alert("account have been created successful"))
      .then(res => navigate('/login'))
      .catch(err => console.log(err));

  };
  return (

    <>

<div className="login-section">
<div className="login-page" >
        <div className="login-header">
           <div className="login-item">
            </div>
            <div className="login-item">
           <h5 style={{paddingTop:"50px"}}>Create Account</h5>
            </div>
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-input">
                   <input type="text" name="firstName" onChange={handleInputs} value={reg.fname} className="" placeholder="First Name" required/>  
                </div>
                <div className="form-input">
                   <input type="text" name="lastName" onChange={handleInputs} value={reg.lname} className="" placeholder="Last Name" required/>  
                </div>
                <div className="form-input">
                   <input type="text" name="username" onChange={handleInputs} value={reg.username} className="" placeholder="username" required/>  
                </div>
                <div className="form-input">
                   <input type="text" name="email" onChange={handleInputs} value={reg.email} className="" placeholder="email" required/>  
                </div>

                <div className="form-input">
                   <input type="password" name="password" onChange={handleInputs} value={reg.password} className="" placeholder="password" required/>  
                </div>
                <div style={{paddingBottom:"30px;"}} className="form-input">
                   <button type="submit">Create Account</button> 
                </div>
            </form>
        </div>
     </div>
</div>


    
    </>
  );
};

export default Register;