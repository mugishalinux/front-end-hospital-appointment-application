import React, { useState, useEffect } from "react"
import appointment from "./appointment.jpg";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from "notistack";
import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
  Chip,
  Divider,
  ListItemSecondaryAction,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core"; 

import Format from "date-fns/format";
import {Close,Today,DateRange} from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    height:"70px"
  },
  middle:{
    height:"350px",
    backgroundColor:"#007ACC"
  },
  formControl:{
    backgroundColor:"#fff",
    // width:250,
    marginTop:50,
    borderRadius:5,
    textTransform:"capitalize"
  },
  container:{
    marginTop:80
  },
  title:{
    marginTop:50,
    color:"#fff"
  },
  footer:{
    height:"50px",
    backgroundColor:"#535A6B" 
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button:{
    textTransform:"capitalize" 
  }
}));

function Index(props){

  const navigate = useNavigate()

  const disablePastDates = () => {
  
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
 
};

  const classes = useStyles();
  
  useEffect(()=>{
   
    get_doctors();
  },[])

  const disablePastDate = () => {
    const today = new Date();
<<<<<<< HEAD
    const dd = String(today.getDate() + 1).padStart(1, "0");
    const mm = String(today.getMonth() + 1).padStart(1, "0"); 
=======
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
>>>>>>> e834af33faf4429b3155373eec246b7c85ce95d8
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // get list of doctors 

  const [doctors,setDoctors]=useState([]);
  const get_doctors=()=>{

<<<<<<< HEAD
   axios.get("http://localhost:8080/api/v1/doctor" )
=======
   axios.get("https://hospital-appointment-com.herokuapp.com/api/v1/doctor" )
>>>>>>> e834af33faf4429b3155373eec246b7c85ce95d8
    .then(res=>{
      console.log(res.data);
      setDoctors(res.data);
     })
    .catch(err=>{
        var e = err.message;
        if (err.response) {
          e = err.response.data.message;
       
        }
      });
  }


  // get doctor appointment schedule 

//   const [body , setBody] = useState({
//     "patientName":"mugisha",
//     "patientEmail":"mugi@gmail.com",
//     "patientSicknessDetail":"munda",
//      "appointmentDate":"2022-05-29",
//     "appointmentHour":"14",
// })

// disable previous dates

  const [appointmentDate, setAppointmentDate] = useState({value:Format(new Date(), ["yyyy-MM-dd",]),error:""});
  const [doctorId,setDoctorId]=useState({value:0,error:""});

  const [appointmentLoad,setAppointmentLoad]=useState(false);
  const [appointments,setAppointments]=useState([]);
  const get_appointment=()=>{
    if(doctorId.value==0){
   
      return
    }else{
      setAppointmentLoad(true);
    
      var obj={
        id:doctorId.value,
        date:appointmentDate.value
      };
      setDoctorId(obj.id)

     
     
<<<<<<< HEAD
        axios.get(`http://localhost:8080/api/v1/apt/doc/${obj.id}/date/${obj.date}`)
=======
        axios.get(`https://hospital-appointment-com.herokuapp.com/api/v1/apt/doc/${obj.id}/date/${obj.date}`)
>>>>>>> e834af33faf4429b3155373eec246b7c85ce95d8

        .then(res=>{
          var data=res.data;
          console.log(data);
          setAppointmentLoad(false);
          setAppointments(data);
        })
      
        .catch(err=>{
        setAppointmentLoad(false);
        var e = err.message;
        if (err.response) {
          e = err.response.data.message;

        }
      })
    }
  }

  // request doctor appointment
  const [requestDialog,setRequestDialog]=useState(false);
  const [firstName,setFirstName]=useState({value:"",error:""});
  const [lastName,setLastName]=useState({value:"",error:""});
  const [email,setEmail]=useState({value:"",error:""});
  const [sickness, setSickness]=useState({value:"",error:""});
  const [requestLoad,setRequestLoad]=useState(false);
  const [appointmentHour,setAppointmentHour]=useState(0);
  const request_appointment=()=>{
    if(firstName.value==""){
      setFirstName({value:"",error:"Please enter your first name"});
    }else if(lastName.value==""){
      setLastName({value:"",error:"Please enter your last name"});
    }else if(email.value==""){
      setEmail({value:"",error:"Please enter your email"});
    }else if(sickness.value==""){
      setSickness({value:"",error:"Please briefly explain your sickness"});
    }else{
      setRequestLoad(true);
      var requestBody={
        patientName:firstName.value+" "+lastName.value,
        patientEmail:email.value,
        patientSicknessDetail:sickness.value,
        appointmentHour:appointmentHour,
        appointmentDate:appointmentDate.value,
      };
      // axios.get((`http://localhost:8080/api/v1/apt/${doctorId}`), requestBody)
<<<<<<< HEAD
      axios.post(`https://localhost:8080.com/api/v1/apt/${doctorId}`, {
=======
      axios.post(`https://hospital-appointment-com.herokuapp.com/api/v1/apt/${doctorId}`, {
>>>>>>> e834af33faf4429b3155373eec246b7c85ce95d8
        patientName:firstName.value+" "+lastName.value,
        patientEmail:email.value,
        patientSicknessDetail:sickness.value,
        appointmentHour:parseInt(appointmentHour),
        appointmentDate:appointmentDate.value,
      })
      
      .then((res)=>{
        var message="appointment successful booked";
        alert(message)
      setTimeout(() => {
        window.location.reload(true);
      },1000);
      setRequestLoad(false);
      setRequestDialog(false);

      setFirstName({value:"",error:""});
      setLastName({value:"",error:""});
      setEmail({value:"",error:""});
      setSickness({value:"",error:""});

      })
      .catch((err)=>{
      setRequestLoad(false);
        var e = err.message;
        if (err.response) {
          e = err.response.data;
  
        }
      })
    }
  }
const login = () =>{
navigate('/home');
}

  return(
<div>



<section class="home-banner">
      <div class="home-banner-child" >
        <div class="overlay"></div>
        <div class="container" >
          <div class="row slider-text align-items-end">
            <div class="col-md-7 col-sm-12 ftco-animate mb-5 title">
              <h1 class="mb-3" >Our friendly, qualified staff put their patients at the heart of everything they do.</h1>
            </div>
            <div className="login-admin">
              <button style={{width:"150px;", padding:"10px;"}} onClick={login}>Browse admin</button>
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
                    <label><small>select doctor</small></label>
<<<<<<< HEAD
                      <select  style={{backgroundColor:"black"}} labelId="doctor"
                      className ="form-control"
=======
                      <select  labelId="doctor"
                      className="form-control"
>>>>>>> e834af33faf4429b3155373eec246b7c85ce95d8
          id="doctor"
          value={doctorId.value}
          required
          onChange={(e)=>{
            if(e.target.value!=0){
              setDoctorId({value:e.target.value,error:""});
            }else{
              setDoctorId({value:0,error:"Incorrect value"})
            }
          }}>
            {doctors.map((option) => (
              <option  style={{backgroundColor:"black"}} value={option.id}>{option.firstName + " " + option.lastName + "  " + option.department.name + " specialist"}</option>
            ))}
          </select>
                    </div>
			            </div>
                 
	              </div>
                <div class="col-sm-4">
	                <div class="form-group">
	                	<div class="icon"><span class="ion-ios-calendar"></span></div>
                    <label><small>pick date</small></label>
	                  <input  className="form-control"
    value={appointmentDate.value}
    required
    id="date" 
    type="date"  
    size="small" 
    variant="outlined" 
    onChange={(e)=>{
      setAppointmentDate({value:e.target.value,error:""});
      console.log(e.target.value);
    }}
     min={disablePastDates()} 
     class="form-control appointment_date" 
     placeholder="Date"/>


 	                </div>    
	              </div>
	            </div>
	            <div  class="row">
	              <div class="col-sm-4">
	                <div class="form-group">
                 
                  <button 
      className="btn btn-primary"
      style={{backgroundColor:"#00e600", marginTop:"10px", color:"white",width:"160px",borderRadius:"5px"}}
      disableElevation
      variant="contained"
      disabled={appointmentLoad}
      startIcon={<Today/>}
      onClick={()=>{get_appointment();}}
      >
        {appointmentLoad? <CircularProgress size={25} />:"check availability"}
      </button>
	                </div>    
	              </div>
	            </div>
	          </form>
    			</div>
    		</div>
    	</div>
    </section>


<Box>

<Box>
  <Container maxWidth="sm">
   
  <List>
    {appointments.map((o)=>{
      return(
      <>
      <ListItem style={{border:"solid 2px red;"}}>
        <ListItemAvatar>
        <img src={appointment} width={100}  />
        </ListItemAvatar>
        <ListItemText primary={<Typography>{o.date} {o.time}</Typography>} />
         <ListItemSecondaryAction>
         
           <Button className={classes.button} startIcon={<DateRange/>} variant="outlined" onClick={()=>{
            setAppointmentHour(o.time);
            setRequestDialog(true);
           }}>
             Book
             </Button>
            
         </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      </>
      );
    })}
    
    </List>

   {appointments.length==0&&<center> 
  
 
    </center>}
    
   
  </Container>
</Box>
</Box>


{/* request appointment  start dialog*/}
<Dialog
    maxWidth="sm"
    fullWidth
        open={requestDialog}
        onClose={()=>{
          setRequestDialog(false);
        }}
        aria-labelledby="request appointment"
        aria-describedby="request appointment"
      >
        <DialogTitle style={{color:"red"}}>Book Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText >
            <Box>
              <Box>
              <ListItem>
                <ListItemAvatar>
                <img src={appointment} style={{width:"200px"}}  />
                </ListItemAvatar>
                <ListItemText primary={<Typography>2{appointmentDate.value} {appointmentHour}</Typography>}  />
              </ListItem>
              </Box>
              <Box display="flex" mt={1} alignItems='center' justifyContent='center'>
              <TextField size='small' 
              variant='outlined' 
                error={firstName.error!==""}
                helperText={firstName.error}
                value={firstName.value}
                onChange={(e)=>{
                  if(e.target.value===""){
                    setFirstName({value:"",error:"Enter firstname"});
                  }else{
                    setFirstName({value:e.target.value,error:""});
                  }
                }}
            label="First Name"
            color='primary' 
             fullWidth/>
              </Box>
              <Box display="flex" style={{marginTop:6}} alignItems='center' justifyContent='center'>
              <TextField size='small' 
              variant='outlined' 
                error={lastName.error!==""}
                helperText={lastName.error}
                value={lastName.value}
                onChange={(e)=>{
                  if(e.target.value===""){
                    setLastName({value:"",error:"Enter Lastname"});
                  }else{
                    setLastName({value:e.target.value,error:""});
                  }
                }}
            label="Last Name"
            color='primary' 
             fullWidth/>
              </Box>

              <Box display="flex" style={{marginTop:6}} alignItems='center' justifyContent='center'>
              <TextField size='small' 
              variant='outlined' 
                error={sickness.error!==""}
                helperText={sickness.error}
                value={sickness.value}
                onChange={(e)=>{
                  if(e.target.value===""){
                    setSickness({value:"",error:"Briefly explain your sickness "});
                  }else{
                    setSickness({value:e.target.value,error:""});
                  }
                }}
                label="Briefly explain your sickness"
                color='primary' 
                fullWidth/>
              </Box>

              <Box display="flex" style={{marginTop:6}} alignItems='center' justifyContent='center'>
              <TextField size='small' 
              variant='outlined' 
                error={email.error!==""}
                helperText={email.error}
                value={email.value}
                onChange={(e)=>{
                  if(e.target.value===""){
                    setEmail({value:"",error:"Enter email"});
                  }else{
                    setEmail({value:e.target.value,error:""});
                  }
                }}
                type="text"
                label="Email"
                color='primary' 
                fullWidth/>
              </Box>

            </Box>
            </DialogContentText>
       </DialogContent>
       <DialogActions>
          
          <Button variant="outlined" className={classes.button} onClick={()=>{
            setRequestDialog(false);
          }} color="secondary" >
          
           Cancel

          </Button>
             <Button autoFocus className={classes.button} disableElevation variant="contained" color="primary" onClick={()=>{
                request_appointment();
              }}>
               {requestLoad?<CircularProgress  color="secondary" size={25}/>:"Request Appointment"}
                </Button>
         

        </DialogActions>
</Dialog>
{/* request appointment  end dialog*/}
</div>
  );

}

export default Index;
