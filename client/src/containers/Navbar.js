import React , { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {useLocation, useHistory} from "react-router-dom";


export default function Navbar() {

  const domLocation = useLocation();
  const history = useHistory();

  function redirect(link) {

    if(link.action !== undefined){
      return link.action();
    }

    history.push(link.href);
    
  }

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
    {
      title: "Logout", 
      href: "/logout",
      action: function () {

        //fetch api logout
        fetch('/api/logout')
          .then((res) => {
            // redirect to landing
            history.push('/')
          })

        
      }
    },
  ]);


  return (
    <Nav className="navbar"
    activeKey={domLocation.pathname}
    onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
  >
    {links.map((link) => {
      return (
        <Nav.Item key={link.title}>
          <Nav.Link onClick={() => redirect(link)} >{link.title}</Nav.Link>
        </Nav.Item>
      )
    })}
 
  </Nav>
  )
}
