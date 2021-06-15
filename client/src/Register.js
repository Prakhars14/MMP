import React,{useState} from 'react'
import "./Register.css"
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
import {signup,signin} from "./auth";
import axios from "axios";

const initialValue={name:"",email:"",password:"",conpassword:""};
function Register() {
	const [isSignUp,setisSignUp]=useState(false);
	const [showPassword,setshowPassword]=useState(false);
	const [formData,setformData]=useState(initialValue);
	const dispatch=useDispatch();
	const history=useHistory();
	
	const switchMode=()=>setisSignUp((prevsetisSignUp)=>(!prevsetisSignUp));
	
	const handleSubmit=(e)=>{
		e.preventDefault();
		if(isSignUp){
			dispatch(signup(formData,history));
		}else{
			dispatch(signin(formData,history));
		}
	};
	const handleChange=(e)=>{
		setformData({ ...formData,[e.target.name]:e.target.value});

	}
	const handleClickShowPassword=()=>setshowPassword((prevshowPassword)=>(!prevshowPassword));
	return (
		<div className="Register">
		<div className="login_container">
			<h1>{isSignUp?"Sign up":"Sign In"}</h1>
			<form onSubmit={handleSubmit} >
			{isSignUp && 
				<>
				<h5>Name</h5>
				 <Input type="text" name="name" onChange={handleChange} /> 
				 
				 </>

			}
			<h5>Email id </h5>
				 <Input type="text" name="email" onChange={handleChange} /> 
				 <h5>Password</h5>
				 <Input type={showPassword?"text":"Password"} name="password" onChange={handleChange} className="visible_btn" endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword} >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        } />
			{isSignUp &&<><h5>Confirm Password</h5>
				 <Input type="Password" name="conpassword" onChange={handleChange} /></>}
				 <button type="submit" className="btn">{isSignUp ?"Register":"Login"}</button>
			</form>
		</div>
		<div className="register">
				<h3>{isSignUp ?"Already have an account ?":"New user Register ?"}</h3>
				<button className="btn1" onClick={switchMode} >{isSignUp?"Sign In":"Sign Up"}</button>
				
			</div>
			
		</div>
	)
}

export default Register