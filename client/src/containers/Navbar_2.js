import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useLocation, useHistory} from "react-router-dom";


import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },

  tab: {
    
  }
});

export default function CenteredTabs() {
  const classes = useStyles();
  const domLocation = useLocation();
  const history = useHistory();


  
  
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [links, setLinks] = useState([
    {
      title: "Landing",
      href: '/',
    },
    {
      title: "Login",
      href: '/login',
    },
    
    {title: "Signup", href: "/signup"},
    {title: "User", href: "/user"},
    {title: "Contact", href: "/contact"},
    {title: "About", href: "/about"},
    {title: "Logout", href: "/logout"},
  ]);


  
  const [value, setValue] = useState(0);


  useEffect(() => {

    const pathname = domLocation.pathname;  // 'contact'

    const foundIndex = links.findIndex((link) => {
      return link.href === pathname;
    });

    setValue(foundIndex);

  }, [domLocation]);


  function onClickTab(link){
    history.push(link.href);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {links.map((link,index) => <Tab onClick={() => onClickTab(link)}  key={index} label={link.title}/>)}

      </Tabs>
    </Paper>
  );
}
