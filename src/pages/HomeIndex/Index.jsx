import React from "react";
import "./index.css";
import balanse from "./bg_1.jpg";
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from "react";
import Appoint from "./Appoint";
const Index = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/login')
  }
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
    const [showAppointment , setShowAppointment] = useState(false)

    const [showAppointments , setShowAppointments] = useState(true)

    const [doctors , setDoctors] = useState([
      {id:1, doctorName:"Mugisha" , spec:"Dental"},
      {id:2, doctorName:"Pacifique" , spec:"Nouronigics"},
      {id:1, doctorName:"Placide" , spec:"Clinical"},
    ])


    const [doctorNameFet , setDoctorNameFet] = useState("");

    const [requestDate , setRequestDate] = useState("");

    const [checkAvailabilityRequest , setCheckAvailabilityRequest] = useState([
      { doctorName:"",
      dateRequest:""
    }
    ]) 
const handleChangeDoctor = (e) => {
    setDoctorNameFet(e.target.value);
}
const handleChangeDate = (e) => {
  setRequestDate(e.target.value);
}
const show = () =>{
  if (showAppointment == true ){
    return <h1>hello world</h1>
} 
}
const sub = () =>{
  navigate('/appoint')
  setShowAppointment(true);
}
  return (

    <>
    <section class="home-banner">
      <div class="home-banner-child" >
        <div class="overlay"></div>
        <div class="container" >
          <div class="row slider-text align-items-end">
            <div class="col-md-7 col-sm-12 ftco-animate mb-5 title">
              <h1 class="mb-3" >Our friendly, qualified staff put their patients at the heart of everything they do.</h1>
            </div>
            <div className="login-admin">
              <button style={{width:"100px;", padding:"10px;"}} onClick={login}>Sign as admin</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-intro " style={{marginTop:'60px'}}>
    	<div class="container">
    		<div class="row no-gutters">
    			<div class="col-md-3 color-1 p-4">
    				<h3 class="mb-4">Emergency Cases</h3>
            <h1>{checkAvailabilityRequest.doctorName}</h1>
                  <h1>{checkAvailabilityRequest.dateRequest}</h1>
    				<span class="phone-number">+ (123) 123 1234</span>
    			</div>
    			<div class="col-md-3 color-2 p-4">
    				<h3 class="mb-4">Opening Days</h3>
    				<p class="openinghours d-flex">
    					<span>Monday - Sunday</span>
    				
    				</p>
    			</div>
    			<div class="col-md-6 color-3 p-4">
    				<h3 class="mb-2">Make an Appointment</h3>
    				<form action="#" class="appointment-form">
	            <div class="row">
	            	<div class="col-sm-4">
	                <div class="form-group">
			              <div class="select-wrap">
                      <div class="icon"><span class="ion-ios-arrow-down"></span></div>
         
                      <select name="doctor" onChange={handleChangeDoctor} value={checkAvailabilityRequest.doctorName} id="" class="form-control">
            {doctors.map((option) => (
              <option value={option.id}>{option.doctorName + "  " + option.spec + " specialist"}</option>
            ))}
          </select>
                    </div>
			            </div>
                  <h1>{doctorNameFet}</h1>
                  <h1>{requestDate}</h1>
	              </div>
                <div class="col-sm-4">
	                <div class="form-group">
	                	<div class="icon"><span class="ion-ios-calendar"></span></div>
	                  <input name="date" onChange={handleChangeDate} value={checkAvailabilityRequest.dateRequest} type="date" min={disablePastDate()} class="form-control appointment_date" placeholder="Date"/>
	                </div>    
	              </div>
	            </div>
	            <div class="row">
	              <div class="col-sm-4">
	                <div class="form-group">
                  <input onClick={sub} type="submit" value="Check availability" class="btn btn-primary"/>
	                </div>    
	              </div>
	            </div>
	          </form>
    			</div>
    		</div>
    	</div>
    </section>

    <div style={{width:"100%", border:"solid red 2px;", display:"flex" , justifyContent:"center"}}>
      <div>
      {
    showAppointment &&  <Appoint doctorNameFet="mugisha"/>
  }


        </div>

  
    </div>
    
    </>
  );
};

export default Index;