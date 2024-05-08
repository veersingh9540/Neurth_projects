import React, { useState, useEffect } from 'react'
import './Header.css'
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'
import LOGO from './Image_logo.png';
import LOGO2 from './NEURTH_free-file-4.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ComputerIcon from '@material-ui/icons/Computer';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
import Toggle_button from '../Toggle_button/ToggleButton.js';
import { useMediaQuery, Modal, TextField, makeStyles, Button } from '@material-ui/core';
import { db,auth,storage } from '../../firebase';


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


export default function Header(p) {
    const matches = useMediaQuery('(max-width:600px)');
    const [show,handleShow] = useState(false);
    const [openSignIN,setOpensignIN] =useState(false);
    const [OpenUpload,setOpenUpload] =useState(false);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [Password,setPassword] = useState('');
    const [Email,setEmail] = useState('');
    const [user,setUser] = useState(null);
    const [Username,setUsername] = useState('');    
    useEffect(() =>{
        const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
          
              if(authUser){
                //user is logged in 
                setUser(authUser); 
                console.log(authUser);
                
            }else{
              // user is loggd out 
              setUser(null);
            }
            
        })
         return () =>{
           // perform some cleanup action 
           unsubscribe(); 
         } 
    
      },[user , Username])
  
  useEffect(()=>{
        // scroll effect listner
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    },[])

    const scrollService = () =>{
        window.scrollTo({top: 1700, behavior: 'auto'});
      };
    

      const Login = (event) =>{
        event.preventDefault();
        //login code goes here
        auth.signInWithEmailAndPassword(Email,Password)
        .catch((error)=>alert("Invalid Username or Password"))
        setOpensignIN(false);
      }
        return (
            
            
            <nav className={`Header_container ${show && "Header_scrollContainer"}`}>
            <div className="Header_logo">
            <Link to="/" className="Header_LogoLink">
                    <img src={LOGO} alt="" className="Header_logoImage"/>
                </Link>
            </div>
            
             <div className="Header_links">
             <Link className="Header_link" to="/" onClick={scrollService}>
                     <div className="Header_linkContainer">
                         <span className="Header_linkText">
                             Services
                         </span>
                         <WorkOutlineRoundedIcon/>
                     </div>
                 </Link>
                 <Link className="Header_link" to="/products">
                     <div className="Header_linkContainer">
                         <span className="Header_linkText">
                         Products & Platforms
                         </span>
                         <ComputerIcon/>
                     </div>
                 </Link>
                 <Link className="Header_link" to="/research">
                     <div className="Header_linkContainer">
                         <span className="Header_linkText">
                             Research & Innovation
                         </span>
                         <LibraryBooksOutlinedIcon/>
                     </div>
                 </Link>
                 <Link className="Header_link" to="/" onClick={scrollService}>
                     <div className="Header_linkContainer">
                         <span className="Header_linkText">
                            Consulting
                         </span>
                         <ArrowDropDownIcon/>
                         <div className="Hover_list">
                             <a href="">Overview</a>
                             <a href="">CyberSecurity</a>
                             <a href="">Data Mining</a>
                             <a href="">Artificial intelligence</a>
                         </div>
                     </div>
                 </Link>
                 <div className="Spacer">
    
                 </div>
                {user?  
                <>
                <Link className="Header_link" onClick={()=>auth.signOut()}>
                 <div className="Header_linkContainer">
                     <span className="Header_linkText">
                        Logout
                     </span>
                     <InfoIcon/>
                 </div>
             </Link>
              
                </>
          :<Link className="Header_link" onClick={setOpensignIN}>
                     <div className="Header_linkContainer">
                         <span className="Header_linkText">
                            Login
                         </span>
                         <InfoIcon/>
                     </div>
                 </Link>
                 
                 
                 }
               
             </div>
             
             <div className="Button" >
                 <Toggle_button click={p.clickHandler}/>
             </div>
             
            <Modal
            open={openSignIN}
            onClose={()=> setOpensignIN(false)}
          >
             <div style={modalStyle} className={classes.paper}>
             <form className="App_Signup">
              <center className="center_content">
                
                <img src={LOGO}
                  alt=""
                  className="App_headerImage"
                  />
                    <h2>LOGIN (Only Admin)</h2>
              </center>
              
                    <TextField
                      id="outlined-secondary"
                      label="Email"
                      variant="outlined"
                      color="secondary"
                      className={classes.root}
                      onChange={(e)=> setEmail(e.target.value)}
                    />
                      <TextField
                      id="outlined-secondary"
                      label="Password"
                      variant="outlined"
                      color="secondary"
                      className={classes.root}
                      type="password"
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                     <Button type="submit" onClick={Login}>
                          Login
                    </Button>
                 </form>
              </div>
              
          </Modal>  
          
        </nav>
    
        )
    
}

