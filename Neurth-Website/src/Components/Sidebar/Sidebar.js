import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../Header/Image_logo.png';


function Sidebar(condn) {
  let classes = ['Sidebar_container ']
  if(condn.show === true)
  {
    classes =['Sidebar_container open']
  }
  const scrollService = () =>{
    window.scrollTo({top: 1700, behavior: 'smooth'});
  };
  return (
    <div className={classes}>
          <div className="Sidebar_links">

                <Link to="/"className="Sidebar_link">
                            <div className="Sidebar_linkContainer">
                                
                                <span className="Sidebar_linkText" onClick={scrollService}>
                                    Services
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/products" className="Sidebar_link">
                            <div className="Sidebar_linkContainer">
                                <span className="Sidebar_linkText">
                                    Products & Platforms
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/research" className="Sidebar_link">
                            <div className="Sidebar_linkContainer">
                                <span className="Sidebar_linkText">
                                    Research & Innovation
                                </span>
                                
                            </div>
                        </Link>
                        <Link to="/" className="Sidebar_link" onClick={scrollService}>
                            <div className="Sidebar_linkContainer">
                                <span className="Sidebar_linkText">
                                    Consulting
                                </span>
                                
                            </div>
                        </Link>
                        
            </div>   
            <Link to="/"> 
            <div className="Logo2">
              <img className="Logo_image2" src={logo} alt="NEURTH LOGO"/>
              </div> 
              </Link>
    </div>
  )
}
export default Sidebar
