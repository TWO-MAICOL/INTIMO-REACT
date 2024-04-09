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
// import input con reac 
import { InputText } from 'primereact/inputtext'; 
// import Toast message ASND button
import { Button } from 'primereact/button';
// data table para mostrar mis productos primeraReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// avatar primeraReact
import { Avatar } from 'primereact/avatar';
// import styles media queries
import '../../assets/css/media.css';

export const MoreVent = ()=> {
// valid usuer for que pueda acceder
  if(!cookies.get('user')){
    window.location.href="./login";
  }
  const [products,serProducts] = useState([]);
  
  useEffect(() => {
    Axios.get('http://localhost:3000/getProducts')
    .then((res) => serProducts(res.data))
    .catch((err) => console.log(err));
  }, []);

   // este es el que se encarga de mostrar la imagen del perfil 
  const showImg = (img) => {
    return (          
        <Avatar image={`../img/products/${img.routeImg}`} size="large" shape="circle" />    
    );
  };
 
  return (
  <>    
    <title> Lo mas destacado </title> 
    <Menu/>       
 
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y "> 
        <Navbar/>
        <div className="container-fluid py-4 mt-4">
          <div className='row'>    
              <div className="card col-md-12 quitar-margin col-sm-12 col-lg-6" style={{marginRight:"3em",marginLeft:"1em", }} >              
                <div className="card-header font-weight-bolder bg-gradient-dark text-white">
                      MIS  ||  PRODUCTOS                   
                    </div>
                      <div className="card-body  ">   
                        <div className="card">
                          <DataTable value={products} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                              <Column field="" body={showImg} header="IMG" style={{ width: '19%' }}></Column>
                              <Column field="nombre" header="Nombre" style={{ width: '25%' }}></Column>
                              <Column field="precio" header="Precio" style={{ width: '25%' }}></Column>
                              <Column field="company" header="Estado" style={{ width: '25%' }}></Column>
                              <Column field="representative.name" header="Acciones" style={{ width: '25 %' }}></Column>
                            </DataTable>
                      </div>                                 
                      </div>
                    <hr className="dark horizontal my-0"/>
                    <div className="card-footer d-flex">           
                </div>             
            </div>         
              <div className="card col-md-12 col-sm-12 col-lg-5" >              
                <div className="card-header font-weight-bolder bg-gradient-dark text-white">
                      AGREGAR  || A MI WEB                   
                  </div>
                    <div className="card-body text-center ">
                                    
                  </div>
                  <hr className="dark horizontal my-0"/>
                  <div className="card-footer d-flex">           
              </div>
              </div>         
          </div>
       </div>          
      
        <Footer/>
      </main>
 
 
      
 
     
    </>
  )
}
 
