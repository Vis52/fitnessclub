import React from 'react'
import './Header.css';
import logo3 from './utils/logo3.png';

const Navbar = () => {
  return (
    <div className='container-fluid navbar'><div className='ban'> <div className='ban-left'> <a href='/'><img src={logo3} /></a></div><div className='ban-right'><a href='/'><h2> The Women<br/> Fitness</h2></a></div></div>
    
      
      <ul>
        <li><a  href='/home'> Home</a></li>
        <li><a href='/about'> About</a></li>
        <li><a  href='/classes'> Classes</a></li>
        <li><a  href='/contact'> Contact us</a></li>
        <li><a  href='/Book'> Book Free Trial</a></li>
        
       
        
      </ul> 
     
      <div class="dropdown">
    <button class="dropbtn">More</button>
    <div class="dropdown-content">
      <a href="/power">Power Yoga</a>
      <a href="/aerobics">Aerobics</a>
      <a href="/gym">Gym Fitness</a>
      <a href="/bhangra">Bhangra</a>
      <a href="/free">Free Weight</a>
      <a href="/circuit">Circuit Training</a>
      <a href="/classes">Others</a>
    </div>
  </div>
                    {/* <select id="businee" name="    Business" className='fo'>
                      <option value="volvo">More </option>
                      <option value="volvo"><a href='/power'>Power Yoga</a></option>
                      <option value="saab"><a href='/aeribics'>Aerobics</a></option>
                      <option value="fiat"><a href='/gym'>Gym Fitness</a></option>
                      <option value="volvo"><a href='/bhangra'>Bhangra </a></option>
                      <option value="saab"><a href='/free'>Free Weight</a></option>
                      <option value="fiat"><a href='/cir'>Circuit Training</a></option>
                      <option value="audi"><a href='/classes'>Others</a></option>
                    </select>
                   */}
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
