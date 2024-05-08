import React, { useState } from 'react';
import './Banner.css';
import Midcontent from '../Midcontent/Midcontent.js';
import { makeStyles, Button } from '@material-ui/core';
import {FaArrowCircleUp} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '50px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  


function Banner() {
    const [showScroll, setShowScroll] = useState(false);
    const [scale,handlescale]= useState(true);
    const [product,handleproduct]= useState(false);
    const [experience,handleexperience]= useState(false);
    const [Security,handleSecurity]= useState(false);
    const [Expert,handleExpert]= useState(false);
    const [Resources,handleResources]= useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 600){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)
    const classes = useStyles();
    
    
    const myfunction=()=>{
      handlescale(true);
      handleproduct(false);
      handleexperience(false);
      handleSecurity(false);
      handleExpert(false);
      handleResources(false);
    } ;
    const myfunction2=()=>{
      handlescale(false);
      handleproduct(true);
      handleexperience(false);
      handleSecurity(false);
      handleExpert(false);
      handleResources(false);
   
    } ;
    const myfunction3=()=>{
      handlescale(false);
      handleproduct(false);
      handleexperience(true);
      handleSecurity(false);
      handleExpert(false);
      handleResources(false);
   
    } ;
    const myfunction4=()=>{
      handlescale(false);
      handleproduct(false);
      handleexperience(false);
      handleSecurity(true);
      handleExpert(false);
      handleResources(false);
   
    } ;
    const myfunction5=()=>{
      handlescale(false);
      handleproduct(false);
      handleexperience(false);
      handleSecurity(false);
      handleExpert(true);
      handleResources(false);
   
    } ;
    const myfunction6=()=>{
      handlescale(false);
      handleproduct(false);
      handleexperience(false);
      handleSecurity(false);
      handleExpert(false);
      handleResources(true);
   
    } ;
    return (
            
            <div className="Banner_container">
                
                {/* {title,link_text,image} */}
                <div className="Content_head">
                  
                </div>
                <div className="Content_row">
                    <Midcontent
                    title="Creativity"
                    image="https://image.flaticon.com/icons/svg/904/904560.svg"
                    paragraph="The Willingness To Create Highly functional Apps  Using latest Technologies "
                    />
                    <Midcontent
                    title="Proficiency"
                    image="https://image.flaticon.com/icons/svg/3135/3135783.svg"
                    paragraph="Our IT consulting advisors study your existing software solutions and the ways in which your employees use them, identifying problems in workflows and automation.    "
                    />
                    <Midcontent
                    title="Emancipation"
                    image="https://image.flaticon.com/icons/svg/2916/2916695.svg"
                    paragraph="Freedom is the ultimate goal of a life thus, Our services available from startups to Big Organizations"
                    />
                </div>
                {/* Heading one */}
                <div className="Content_heading mediaContent">
                    <h1> Powering your digital transformation </h1>
                </div>
                <div className="Content_fueling mediaContent">
                    
                        <div className="Content_subheading">
                            <h1>Knowledge Is Power</h1>
                            <h4 className="Content_para">We consistently keep track of emerging technologies to deliver advanced software solutions. Our IT strategy consulting will help you choose the right technologies for your business and industry, map out the implementation strategy, as well as help you implement them.</h4>
                        </div>
                        <img src="https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        alt="Content image" 
                        className="Content_IImage"
                        />
                </div>
                
             

                <div className="Content_heading">
                    <h1> Latest Technology updates </h1>
                </div>
                       {/* Heading two */}
                <div className="Scale_boxes">
                    <img 
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4yojB?ver=1883&q=90&m=6&h=291&w=517&b=%23FFFFFFFF&l=f&o=t&aim=true" 
                    alt=""
                    className="Scale_box"
                    />

                    <img 
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ygBP?ver=925e&q=90&m=6&h=291&w=517&b=%23FFFFFFFF&l=f&o=t&aim=true" 
                    alt=""
                    className="Scale_box"
                    />

                    <img 
                    src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4yqW1?ver=0bf1&q=90&m=6&h=291&w=517&b=%23FFFFFFFF&l=f&o=t&aim=true" 
                    alt=""
                    className="Scale_box"
                    />
                  
                
                </div>
           
                <div className="Content_row">
                    <Midcontent
                    title="Web Development"
                    image="https://cdn.pixabay.com/photo/2017/01/29/13/20/mobile-devices-2017978_960_720.png"
                    paragraph="One stop web designing company to strengthen your online presence"
                    />
                    <Midcontent
                    title="Mobile App Development"
                    image="https://cdn.pixabay.com/photo/2017/01/08/08/00/bubbles-1962355_960_720.png"
                    paragraph="Our mobile app development strategy is simple.Iterating on the Minimum Viable Product our developers 
                    and strategists keep on refining mobile applications for perfection."
                    />
                </div>
                
                <div className="Content_row">
                    <Midcontent
                    title="Artificial Intelligence"
                    image="https://cdn.pixabay.com/photo/2018/05/08/08/46/artificial-intelligence-3382509_960_720.png"
                    paragraph="Use machine and deep learning algorithms to tackle your Big Data, and get valuable insights into your operations. Create AI-based predictive models for fail-safe decision making."
                    />
                    <Midcontent
                    title="Cloud Computing"
                    image="https://cdn.pixabay.com/photo/2016/06/28/12/23/cloud-computing-1484538_960_720.png"
                    paragraph="Use cloud platforms like Firebase , Microsoft Azure and Amazon AWS to create a flexible, scalable, and connected business environment.
                    FinTech"
                    />
                    <Midcontent
                    title="Internet Of Technologies"
                    image="https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_960_720.png"
                    paragraph="Use secure IoT solutions to monitor your operations, optimise them, and introduce high efficiency. Gain more insights from the Big Data gathered by IoT devices."
                    />
                    
                </div>
                <div className="Content_row">
                    <Midcontent
                    title="Cyber Security"
                    image="https://image.flaticon.com/icons/svg/2716/2716612.svg"
                    paragraph="Navigate the transformation journey with confidence by relying on our experience, global partner network, and world-class customer support."
                    />
                    <Midcontent
                    title="Data Visualisation "
                    image="https://image.flaticon.com/icons/svg/2782/2782728.svg"
                    paragraph="Activate your organization for digital growth with support at every step from a trusted partner committed to your success."
                    />
                </div>
                
                {/* Heading four */}
                <div className="Content_heading">
                    <h1> Benefits Of Working with Neurth</h1>
                </div>
               <div className="Content_links">
                 <span onClick={myfunction} className={`Content_link ${scale && "content_linkStyle"}`}>Scalable Solutions</span>
                 <span onClick={myfunction2} className={`Content_link ${product && "content_linkStyle"}`}>Product Experts</span>
                 <span onClick={myfunction3} className={`Content_link ${experience && "content_linkStyle"}`}>Our Experience</span>
                 <span onClick={myfunction4} className={`Content_link ${Security && "content_linkStyle"}`}>Proactive Security</span>
                 <span onClick={myfunction5} className={`Content_link ${Expert && "content_linkStyle"}`}>Product Experts</span>
                 <span onClick={myfunction6} className={`Content_link ${Resources && "content_linkStyle"}`}>Global Resources</span>
               </div>
                
               {scale ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h1>Scale your solutions easily</h1>
                                <h4 className="Content_para">We have the worldwide presence to evolve your project from a small pilot to a global solution. using various Trending and Powwerful Technologies</h4>

                            
                            </div>
            </div>: null
            }
            {product ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2015/02/05/08/10/iphone-624709_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h1>Collaborate with product experts</h1>
                                <h4 className="Content_para">We connect with the teams that design and build Microsoft technology.</h4>

                            
                            </div>
            </div>: null
            }
              {experience ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h1>We understand your business</h1>
                                <h4 className="Content_para">We have a track record of making high quality products to overcome unique challenges.</h4>

                            
                            </div>
            </div>: null
            }
             {Security ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2017/05/08/19/35/cyber-security-2296269_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h2>Maximize your data and system security</h2>
                                <h4 className="Content_para">We have a team of over 3,500 cybersecurity experts committed to meeting your security needs.</h4>

                            
                            </div>
            </div>: null
            }
             {Expert ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2018/05/08/08/42/handshake-3382503_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h1>Collaborate with product experts</h1>
                                <h4 className="Content_para">We connect with the teams that design and build Microsoft technology.</h4>

                            
                            </div>
            </div>: null
            }
             {Resources ?  <div className="Content_fueling" >
                    
                    <img src="https://cdn.pixabay.com/photo/2017/07/13/08/14/teamwork-2499638_960_720.jpg" 
                            alt="Content image" 
                            className="Content_IImage"
                            />  
                            <div className="Content_subheading">
                                <h1>Our Products and Platforms</h1>
                                <h4 className="Content_para">We design and made our Products with hogh efficiency. We assemble the right group of experts and partners for every project.</h4>

                            
                            </div>
            </div>: null
            }   
                
                
                
                <div className="Scroll_top">
                    <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
                </div>
                
                
                   
                
            </div>
            
    )
}

export default Banner