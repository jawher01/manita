import React, { useState } from "react";
import "./sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import * as Icon from 'react-bootstrap-icons';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Nav,Navbar,Container } from 'react-bootstrap';
import   {SidebarData}  from    "./data"
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  
  return (
    <>
   
     
     
 
     <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
          <div style={{marginTop:"30%"}}></div>
      <div className="menuItem">
        {SidebarData.map((item, index) => {
          return (
          
            <div
            className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
      <Link to={item.path}>       <i style={{marginTop:"30px"}}> <item.icon /></i>
     
       <span style={{marginLeft:"5%",height:"10px"}}>{item.heading}</span>
             </Link>
            </div>
          
          );
        })}

      </div>
      <div style={{marginTop:"175%",color:"darkorchid"}}>
          <UilSignOutAlt />
        </div>
</motion.div>

   
    </>
  );
};

export default Sidebar;
