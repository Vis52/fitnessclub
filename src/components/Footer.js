import React from 'react';
import './Footer.css'; // External CSS file for your custom styles
// Import Bootstrap Icons CSS directly in your React component file if not already done globally
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className='foot'>
      <p>© 2025 The Women Fitness</p>
      <div className='ui'>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <i className="bi bi-twitter" style={{ fontSize: '24px', }}> </i>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <i className="bi bi-instagram" style={{ fontSize: '24px',  }}></i>
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#">
            <i className="bi bi-facebook" style={{ fontSize: '24px' , }}></i>
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
