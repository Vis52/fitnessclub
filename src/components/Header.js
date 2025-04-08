import React from 'react'
import './Header.css';
import logo9 from './utils/logo9.png';

const Navbar = () => {
  return (
    <div className='container-fluid navbar'>  <a href='/'><img src={logo9} /></a>
    
      
      <ul>
        <li><a  href='/home'> Home</a></li>
        <li><a href='/about'> About</a></li>
        <li><a  href='/classes'> Classes</a></li>
        <li><a  href='/contact'> Contact us</a></li>
        <li><a  href='/Book'> Book Free Trial</a></li>
       
        
      </ul> 
      
                    <select id="businee" name="    Business" className='fo'>
                      <option value="volvo">More </option>
                      <option value="volvo">Zumba</option>
                      <option value="saab">Aerobcs</option>
                      <option value="fiat">Cardio</option>
                      <option value="volvo">Indoor Cycling </option>
                      <option value="saab">Outoor Gym</option>
                      <option value="fiat">Marathon</option>
                      <option value="audi">Others</option>
                    </select>
                  
      </div>
    
      
      

    
//     <div>
//       <nav class="navbar n1 navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#"> Vishal's Gym</a>
//     {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button> */}
//     <div class=" d1 collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class=" u1 navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//          <li class="nav-item">
//           <a class="nav-link" href="#">Classes</a>
//         </li>
//        <li class="nav-item">
//           <a class="nav-link" href="#">Contact us</a>
//         </li>
       
          
           
//           </ul>
      
//         {/* <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li> */}
    
//       {/* <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//     </div>
//   </div>
// </nav>
// </div>
    
  )
};

export default Navbar;
