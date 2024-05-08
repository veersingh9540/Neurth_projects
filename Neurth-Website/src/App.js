import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Services from './Components/Services/Services';
import Products from './Components/Products/Products';
import Research from './Components/Research/Research';
import Consulting from './Components/Consulting/Consulting';
function App() {
const [drawerOpen, setdrawerOpen] = useState(false);

  const toggleDrawer = () =>{
      if(!drawerOpen) {
        setdrawerOpen(true)
      }else{
        setdrawerOpen(false)
      }
  } 
  const toggleBackdrop =()=>{
    setdrawerOpen(false)
  }
let back;

if(drawerOpen){
  back = <Backdrop getclick={toggleBackdrop}/>
}

console.log(drawerOpen)
  return (
    
    <div className="App">
          <Router>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                  
                  <Route path="/services">
                  <Header clickHandler={toggleDrawer}/> 
                    <Sidebar show={drawerOpen}/>
                    {back}
                    <Services/>
                    <Footer/>
                  </Route>
                  <Route path="/products">
                  <Header clickHandler={toggleDrawer}/> 
                    <Sidebar show={drawerOpen}/>
                    {back}
                    <Products/>
                    <Footer/>
                  </Route>
                  <Route path="/research">
                  <Header clickHandler={toggleDrawer}/> 
                    <Sidebar show={drawerOpen}/>
                    {back}
                    <Research/>
                    <Footer/>
                  </Route>
                  <Route path="/consulting">
                  <Header clickHandler={toggleDrawer}/> 
                    <Sidebar show={drawerOpen}/>
                    {back}
                    <Consulting/>
                    <Footer/>
                  </Route>
                    <Route path="/">
                      <Header clickHandler={toggleDrawer}/> 
                      <Sidebar show={drawerOpen}/>
                      {back}
                      <Slider/>
                      <Banner/>
                      <Footer/>
                    </Route>
                </Switch>
          </Router>
    </div>
  );
}

export default App;
