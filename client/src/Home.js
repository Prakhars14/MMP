import React,{useState} from 'react'
import {useDispatch} from "react-redux";
import "./Home.css";
import {Link,useHistory} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader, SidebarFooter, SidebarContent} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaList} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog} from "react-icons/bi";
import { BsFillBarChartFill,BsEjectFill,BsPeopleCircle} from "react-icons/bs";
import { AiFillDashboard} from "react-icons/ai";
import {useStateValue} from "./StateProvider";




function Home() {
  const [state, dispatch]=useStateValue();
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("profile")));
 const history=useHistory();
  const despatch=useDispatch();
  const logout=()=>{
    despatch({type:"LOGOUT"});
    history.push("/");

  }
  const setValue=(e)=>{
    const roleUser=e.target.value;
    // console.log(roleUser);
    dispatch({
      type:"ADD",
      roles:roleUser
    });
  };
	return (
		<div className="Home">

<ProSidebar >
<div className="pro-con">
  <SidebarHeader>
   <img className="logo-img" src="https://mtradeasia.com/main/wp-content/themes/mtrade/img/merchantrade-logo.jpg" />
  </SidebarHeader>
  <SidebarContent>
  	 <Menu iconShape="square">
    <MenuItem  icon={<AiFillDashboard/>}><button className="rmvbtn" value="das" onClick={setValue}>Dashboard</button></MenuItem>
    <SubMenu icon={<BiCog />} title="Marketing" i>
       <MenuItem ><button className="rmvbtn" value="rou" onClick={setValue}>Id type Routing</button></MenuItem>
    <MenuItem onClick={setValue}>Kenanga bank</MenuItem>
    <MenuItem >Brand</MenuItem>
    <MenuItem >Bank</MenuItem>
    <MenuItem >GST</MenuItem>
    <MenuItem >Commission</MenuItem>
    <MenuItem >Language parameter</MenuItem>
    <MenuItem >Online Registration Fpx Bank</MenuItem>
    <MenuItem >Online Registration Setup</MenuItem>
    </SubMenu>
    <SubMenu icon={<RiPencilLine />} title="Setup" i>
       <MenuItem icon={<FiHome />}>Fpx bank</MenuItem>
    <MenuItem >Kenanga bank</MenuItem>
    <MenuItem >Brand</MenuItem>
    <MenuItem >Bank</MenuItem>
    <MenuItem >GST</MenuItem>
    <MenuItem >Commission</MenuItem>
    <MenuItem >Language parameter</MenuItem>
    <MenuItem >Online Registration Fpx Bank</MenuItem>
    <MenuItem >Online Registration Setup</MenuItem>
    </SubMenu>
   
    <SubMenu icon={<BiCog />} title="Configuration" i>
       <MenuItem >Fpx bank</MenuItem>
    <MenuItem >Kenanga bank</MenuItem>
    <MenuItem >Brand</MenuItem>
    <MenuItem >Bank</MenuItem>
    <MenuItem >GST</MenuItem>
    <MenuItem >Commission</MenuItem>
    <MenuItem >Language parameter</MenuItem>
    <MenuItem >Online Registration Fpx Bank</MenuItem>
    <MenuItem >Online Registration Setup</MenuItem>
    </SubMenu>
    <SubMenu icon={<BsFillBarChartFill />} title="Report" i>
       <MenuItem >Fpx bank</MenuItem>
    <MenuItem >Kenanga bank</MenuItem>
    <MenuItem >Brand</MenuItem>
    <MenuItem >Bank</MenuItem>
    <MenuItem >GST</MenuItem>
    <MenuItem >Commission</MenuItem>
    <MenuItem >Language parameter</MenuItem>
    <MenuItem >Online Registration Fpx Bank</MenuItem>
    <MenuItem >Online Registration Setup</MenuItem>
    </SubMenu>
    <SubMenu icon={<BsEjectFill />} title="Remit Report" i>
       <MenuItem >Fpx bank</MenuItem>
    <MenuItem >Kenanga bank</MenuItem>
    <MenuItem >Brand</MenuItem>
    <MenuItem >Bank</MenuItem>
    <MenuItem >GST</MenuItem>
    <MenuItem >Commission</MenuItem>
    <MenuItem >Language parameter</MenuItem>
    <MenuItem >Online Registration Fpx Bank</MenuItem>
    <MenuItem >Online Registration Setup</MenuItem>
    </SubMenu>
   
  </Menu>
  
   
  </SidebarContent>
  <SidebarFooter className="foot">
  <div >
  	<Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={logout}>Logout</MenuItem>
            </Menu>
  </div>
    
  </SidebarFooter>
  </div>
</ProSidebar>
	<div className="home-nav">
		<div className="user-name"><button className="rmvbtn"><BsPeopleCircle  /><span className="sbtn">{user?.result.name}</span></button></div>	

		</div>
    
			
		</div>

	)
}

export default Home