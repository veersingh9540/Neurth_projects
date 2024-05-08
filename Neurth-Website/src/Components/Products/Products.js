import React from 'react';
import './Products.css';
import SmartSlider from "react-smart-slider";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HeaderContent from './HeaderContent';


function Products() {
  const [insta ,handleinsta] =useState(false);
  const [Netflix ,handleNetflix] =useState(true);
  const [amazon ,handleamazon] =useState(false);
  const [ToDo ,handleToDo] =useState(false);
  

  const DummyCaption = ({ caption }) => (
    <div className="ProductCaptions_style">
      {caption}
      
    
    </div>
 
  )
  const DummyCaption2 = ({ caption }) => (
    <div className="ProductCaptions_style2">
      {caption}
      
    
    </div>
 
  )
  const myfunction=()=>{
    handleinsta(true);
    handleNetflix(false);
    handleToDo(false);
    handleamazon(false);
  } ;
  const myfunction2=()=>{
    handleinsta(false);
    handleNetflix(false);
    handleToDo(false);
    handleamazon(true);
  } ;
  const myfunction4=()=>{
    handleinsta(false);
    handleNetflix(true);
    handleToDo(false);
    handleamazon(false);
  } ;
 
  
    const slidesArray = [
        {
            url: "https://cdn.pixabay.com/photo/2015/06/24/16/36/office-820390_960_720.jpg",
            childrenElem: <DummyCaption caption="Frontend Demos " />
          },
        {
            url: "https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_960_720.jpg",
     
            // (Optional) Set if you want to add any content on your slide
            childrenElem: <DummyCaption2 caption="Cloud Based ERP Platform" />
          },
          
          
      ];
    return (
        <div className="Products_container">

                <SmartSlider
                    slides={slidesArray}
                    buttonShape="round" // round or square
                    height={500}
                    
                       
                       />
        <div className="Header_cards">

        <HeaderContent
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4zr1L?ver=955a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Draw from worldwide experts"
          paragraph="Count on us to deliver the right mix of resources for your project, regardless of where you are in your transformation journey."
        />
        <HeaderContent
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4zwd9?ver=3dd6&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Innovate relentlessly"
          paragraph="Continually develop new ways to apply the latest technologies with a team of relentless innovators."
        />
        <HeaderContent
          image="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4ztxg?ver=f444&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          title="Gain intellectual capital"
          paragraph="Enhance your organization’s knowledge and skills through collaborating with our team of business and technology experts."
        />
        
        
        
      

        </div>
        <div className="Content_heading">
                    <h1> Some of Our Demo Work </h1>
                </div>
               
        <div className="Content_links">
                <span onClick={myfunction4} className={`Content_link ${Netflix && "content_linkStyle"}`}>OTT Demo </span>
                <span onClick={myfunction2} className={`Content_link ${amazon && "content_linkStyle"}`}>E-commerce website Demo</span>
                 <span onClick={myfunction} className={`Content_link ${insta && "content_linkStyle"}`}>Social Media site Demo</span>
                 
                 
               </div>    
        {insta?  <div className="Content_demo">
          
          <div className="opci_pup">
          <div className="cardContent_container">
            < img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" alt="" 
            className="cardContent_Image"/>
            <div className="cardContent_info">
                <span><strong><h2>Instagram Clone</h2></strong></span>
                        <p>Used authentication , storage and database for backend services and also made frontend using javascript frameworks
                          It is a realtime post sharing website you guys can register yourself and Post images also comment on them 
                        </p>
                        
            </div>
            <div className="button">
            <Button  variant="contained" color="primary" href="https://instagram-c2b0a.web.app" >Visit Site</Button>
            </div>
          </div>
         
          
          </div>
          
        </div>:null}
        {amazon?  <div className="Content_demo2" >
          
          <div className="opci_pup">
          <div className="cardContent_container">
            < img src="https://image.flaticon.com/icons/svg/891/891462.svg" alt=""
            className="cardContent_Image"
            />
            <div className="cardContent_info">
                <span><strong><h2>Amazon clone Website</h2></strong></span>
                        <p>Used Javascript framework and database authentication
                          made whole login and register portal with checkout page using ContextAPI</p>
                        
            </div>
            <div className="button">
            <Button  variant="contained" color="primary" href="https://clone-e21e8.web.app" >Visit Site</Button>
            </div>
          </div>
         
          
          </div>
          
        </div>:null}
        {Netflix?  <div className="Content_demo4">
          
          <div className="opci_pup">
            
          <div className="cardContent_container">
            < img src="https://image.flaticon.com/icons/svg/3003/3003166.svg" alt="" className="cardContent_Image"/>
            <div className="cardContent_info">
                <span><strong><h2>OTT Netflix clone</h2></strong></span>
                        <p>Made an Netflix clone using javascript frameworks, The Movie Database API .</p>
                        
            </div>
            <div className="button">
            <Button  variant="contained" color="primary" href="https://netflix-clone-f7112.web.app" >Visit Site</Button>
            </div>
          </div>
         
          
          </div>
          
        </div>:null}



                       
       
        </div>
    )
}

export default Products
