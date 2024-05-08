import React from 'react';
import BackgroundSlider from 'react-background-slider';
import './Slider.css'
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image6 from '../img/6.jpg';

function Slider() {
    return (
        <div className="Slider_container" >
            <div className="Text_container">
                <h1 className="text_heading">Welcome To Neurth </h1>
                <h1 className="text_subheading">Your One Stop Solution For All Your Digital Tech Needs</h1>
                </div>
            <BackgroundSlider
            images={[image1, image2,image3,image6]}
            duration={10} transition={2} />
          
        </div>
    )
}

export default Slider
