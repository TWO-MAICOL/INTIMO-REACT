import {Navbar} from './Navbar.jsx'
import {Menu} from './Menu.jsx'
import {Footer} from './Footer.jsx'
//  view of data primeraReact 
import React, { useState, useEffect } from "react";
// import axios para las consultas al server
import Axios from "axios";
//  inicio of session
import Cookies from "universal-cookie";
const cookies = new Cookies(); 

export const MoreVent = ()=> {
// valid usuer for que pueda acceder
  if(!cookies.get('user')){
    window.location.href="./login";
  }
     
    return (
    <>    
     <title> Home </title> 
     <Menu/>
       
       <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
         <Navbar/>        
          <div className="container-fluid py-4 mt-2">
             <div className="row justify-content-center">
               <div className="card col-md-11 col-sm-12">
                 <div className="card-header font-weight-bolder bg-gradient-dark text-white">
                     LO +  ||  DESTACADO                   
                 </div>
                          
               </div>           
           </div>
         </div>       
         <Footer/>
       </main>    
      
 
     
    </>
  )
}
 
