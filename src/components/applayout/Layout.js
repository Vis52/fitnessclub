
import React from 'react';
import Header from '../Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer';
import './Layout.css';
import Welcome from '../Welcome.js';


function Layout ()  {
  const location = useLocation () ; 
  const isWelcome = location.pathname === '/';

  
  
  return (
    <div>
      <Header />
      {isWelcome &&(
        <div> <Welcome />
</div>    
  )}
    
      
      
     
      {/* <Home /> */}
      <Outlet/>
     
      <Footer/>
    </div>
  )
}

export default Layout;
