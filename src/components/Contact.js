import React, { useState } from 'react'
import './Contact.css';
import Contect from './Contect.js';

const Contact = () => {
    const [firstname ,setFirstname] = useState("");
    const [lastname ,setLastname] = useState("");
    const [email ,setEmail] = useState("");
    const [phone ,setPhone] = useState("");
    const [message ,setMessage] = useState("");

    const  handleFormSubmit = (e)=>{
        e.preventDefault();
        const contactData = {
            firstname,
            lastname,
            email,
            phone,
            message
        };
        console.log(contactData);
    };
  return (

      <div class=" c1 container-fluid">
    <h1 class="c2">Contact Form</h1>
<form onSubmit={handleFormSubmit} id="contact_form" name="contact_form" method="post" action="your_server_endpoint_url">
    <div class="mb-5 row">
        <div class="col">
            <label for="first_name">First Name</label>
            <input type="text" required maxlength="50" class="form-control" id="firstname" name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}/>
        </div>
        <div class="col">
            <label for="last_name">Last Name</label>
            <input type="text" required maxlength="50" class="form-control" id="lastname" name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}/>
        </div>
    </div>
    <div class="mb-5 row">
        <div class="col">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" class="form-control" id="email" name="email"
                placeholder="name@example.com"
                value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div class="col">
            <label for="phone_input">Phone</label>
            <input type="tel" required maxlength="50" class="form-control" id="phone" name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}/>
        </div>
    </div>
    <div class="mb-5">
        <label for="message">Message</label>
        <input class="form-control" id="message" name="message" rows="5" maxlength="500"
        value={message}
        onChange={(e)=> setMessage(e.target.value)}/>
    </div>
    <button type="submit" class=" btn2 btn btn-success  px-4 my-50 mb-20 btn-lg">Submit</button>
</form>
{/* <Contect/> */}
</div>
    
  )
}

export default Contact;
