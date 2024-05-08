import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Footer() {
    const scrollService = () =>{
        window.scrollTo({top: 1700, behavior: 'smooth'});
      };
    return (
    <footer>
        <div className="Footer_container">
            <div className="About">
                <div className="About_content">
                    <h2>About Us</h2>
                    <p className="About_para">Freedom is the ultimate goal of a life thus, Our services available from startups to Big Organizations</p>
                </div>
                    <div className="Contact_us">
                        <EmailIcon/> 
                        <span>veersingh9540@neurth.com</span>

                        <CallIcon/>
                        <span>8317214626</span>
            </div>
                    
                <div className="Info_links">
                <Link to="/"className="Info_link">
                            <div className="Info_linkContainer">
                                
                                <span className="Info_linkText" onClick={scrollService}>
                                    Services
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/"className="Info_link">
                            <div className="Info_linkContainer">
                                
                                <span className="Info_linkText" onClick={scrollService}>
                                    Products & Platforms
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/"className="Info_link">
                            <div className="Info_linkContainer">
                                
                                <span className="Info_linkText" onClick={scrollService}>
                                    Research and Innovation
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/"className="Info_link">
                            <div className="Info_linkContainer">
                                
                                <span className="Info_linkText" onClick={scrollService}>
                                    Consulting
                                </span>
                                
                            </div>
                        </Link>
                        
                       
                </div>
                <div className="Social">
                    
                    <Button    href="https://www.instagram.com/neurth_global/" ><InstagramIcon/></Button>
                    <Button    href="https://www.facebook.com/neurthglobal/" > <FacebookIcon/></Button>
                    <Button    href="https://www.linkedin.com/company/neurth/" ><LinkedInIcon/></Button>
                        
                        
                    </div>  
            </div>
            
           
            </div> 
            <div className="Spacer">

            </div>
            <div className="Copyright">
                <CopyrightIcon/> 
                <h4 className="Copyright_text">Copyright  2020 <strong> NEURTH Pvt ltd. </strong>  All Rights Reserved.</h4>
            </div>
    </footer>
    )
}

export default Footer
