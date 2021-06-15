import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Switch from "react-switch";
import { MdCancel} from "react-icons/md";
import {AiFillSave} from "react-icons/ai";
import Table from "./Table"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [check,setCheck]=useState(false);

  const handleClick=()=>setCheck((prevsetCheck)=>(!prevsetCheck));
  const options = [
  { value: 'Credit-card', label: 'Credit-card' },
  { value: 'Debit-card', label: 'Debit-card' },
  { value: 'E top-up', label: 'E top-up' }
]
const bankOptions = [
  { value: 'SBI', label: 'SBI' },
  { value: 'ICICI Bank', label: 'ICICI Bank' },
  { value: 'Andhra Bank', label: 'Andhra Bank' }
]
  
  const animatedComponents = makeAnimated();

  return (

    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"

        >
          <Tab label="Setting" {...a11yProps(0)} />
          <Tab label="Bank Field" {...a11yProps(1)} />
          <Tab label="ID Type Routing" {...a11yProps(2)} />
          <Tab label="Top-up Source" {...a11yProps(3)} />
          <Tab label="Score Routing" {...a11yProps(4)} />
          <Tab label="Push Notification" {...a11yProps(5)} />
          <Tab label="Configuration" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="setting">
        <div className="setting1">
          <p>Disable Message <span className="span-col">*</span></p>
          <input type="text" placeHolder="Disable Message" />
        </div>
        <div className="setting1">
          <p>Bank field <span className="span-col">*</span></p>
          {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
          <Select className="set-switch"
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={"Indian Bank" }
      isMulti
      options={bankOptions}
    />
          </div>
          <div className="setting1">
          <p>Service <span className="span-col">*</span></p>
          <Switch  onChange={handleClick} checked={check} onColor="#DC004E" activeBoxShadow="#DC004E"/>
          
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="setting2">
        <div className="setting3">
          <p>Bank Field Mandatory For The ID Type <span className="span-col">*</span></p>
         <textarea name="" id="" cols="60" rows="7"></textarea>
        </div>
        <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .1,
    width:950,
    
}}/>
        <div className="setting3">
          <button className="btn2"><AiFillSave /><span className="sbtn">Save</span></button>
          <button className="btn3"><MdCancel /><span className="sbtn">Cancel</span></button>
        </div>
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Table />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="setting2">
        <div className="setting4">
          <p>Top-up Source <span className="span-col">*</span></p>
          <Select options={options} />
        </div>
        <div className="setting4">
          <p>Code<span className="span-col">*</span></p>
          <input type="text" placeHolder="Enter The Code" />
          </div>
          <div className="setting4">
          <p>Is Active ?<span className="span-col">*</span></p>
          <Switch onChange={handleClick} checked={check} onColor="#DC004E" activeBoxShadow="#DC004E"/>
          
          </div>
          <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .1,
    width:950,
    
}}/>
        <div className="setting3">
          <button className="btn2"><AiFillSave /><span className="sbtn">Save</span></button>
          <button className="btn3"><MdCancel /><span className="sbtn">Cancel</span></button>
        </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}