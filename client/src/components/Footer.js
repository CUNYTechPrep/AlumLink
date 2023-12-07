import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import './FooterStyles.css';

function Footer() {
 return (
   <footer className="footer">
     <div className="footer-content">


       <div className="footer-section">
         <h6 className="footer-title">ABOUT</h6>
         <ul className="footer-links">
           <li><a href="#">PlaceHolder</a></li>
           <li><a href="#">PlaceHolder</a></li>
         </ul>
       </div>


       <div className="footer-section">
         <h6 className="footer-title">FOLLOW US</h6>
         <ul className="footer-links">
           <li><a href="#">Social</a></li>
           <li><a href="#">Social</a></li>
         </ul>
       </div>


       <div className="footer-section">
         <h6 className="footer-title">LEGAL</h6>
         <ul className="footer-links">
           <li><a href="#">Privacy Policy</a></li>
           <li><a href="#">Terms Conditions</a></li>
         </ul>
       </div>


     </div>


     <div className="footer-bottom">
       <p>© 2023 AlumLink</p>
       <div className="footer-socials">
         <a href="#" className="social-icon facebook"><FaFacebook /></a>
         <a href="#" className="social-icon instagram"><FaInstagram /></a>
         <a href="#" className="social-icon twitter"><FaTwitter /></a>
         <a href="#" className="social-icon github"><FaGithub /></a>
       </div>
     </div>


   </footer>
 );
}


export default Footer;