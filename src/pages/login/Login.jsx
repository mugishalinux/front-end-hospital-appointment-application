import React, { useState } from "react";
import "./login.css";
import logo from "./doctor-icon.jpg"
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  const auth = () => {
    navigate('/home')
  }
  const register = () => {
    navigate('/register')
  }

const [success , setSuccess] = useState(false)

const [key , setKey] = useState("");

if(success == true){
  navigate('/home');
  localStorage.setItem('auth', key);
}


const [email , setEmails] = useState("");

const [password , setPassWords] = useState("");

const [data , setData] = useState({
  email:"",
  password:""
})

const handleEmail = (e) => {
  setEmails(e.target.value);
}

const handlePassword = (e) => {
  setPassWords(e.target.value)
}

const handleIn = (e) =>{
  const {name , value} = e.target;
  setData({...data, [name]:value})
}



  const log = (e) =>{
  
    e.preventDefault();

    // const map1 = new Map(Object.entries(data));

    // const map2 = new Map(Object.fromEntries(map2));

    // console.log(map1)

    // console.log(map2 + " json")

      console.log(data);
 
    axios
      .post("http://localhost:8080/api/auth/user/login", data)
      .then(res => console.log(res.data))
      // .then(res => localStorage.setItem('auth', res.data))
      .then(res=> setKey(res.data))
      // .then(res =>alert("account have been created successful"))
      // .then(res => navigate('/login'))
      .catch(err => console.log(err));

  }

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};


  return (

    <>

<div className="login-section">
<div className="login-page" >
        <div className="login-header">
           <div className="login-item">
           <img src={logo}></img>
            </div>
            <div className="login-item">
           <h5>Login Form</h5>
            </div>
            <form onSubmit={log} className="form-group">
                <div className="form-input">
                   <input type="text" name="email" value={data.email} onChange={handleIn} className="" placeholder="Username"/>  
                </div>
                <div className="form-input">
                   <input type="password" name="password" value={data.password} onChange={handleIn} className="" placeholder="Password"/>  
                </div>
                <div className="form-input">
                   <button type="submit">Sign In</button> 
                </div>
                <div className="form-input-btn">
                   <button onClick={register}>Create Account</button> 
                </div>
            </form>

        </div>
     </div>
</div>


    
    </>
  );
};

export default Login;