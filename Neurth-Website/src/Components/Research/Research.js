import React from 'react'
import './Research.css';
import SmartSlider from "react-smart-slider";
import Research_post from './Research_post';

const DummyCaption2 = ({ caption }) => (
    <div className="ResearchCaptions_style">
      {caption}
      <h1 className="Research_subheading">Research Paper Coming Soon </h1>
    
    </div>
  )
  const DummyCaption = ({ caption }) => (
    <div className="ResearchCaptions_style">
      {caption}
      <h1 className="Research_subheading">Research Paper Coming Soon </h1>
    
    </div>
  )


function Research() {



    const slidesArray = [
        {
            url: "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_960_720.jpg",
     
            // (Optional) Set if you want to add any content on your slide
            childrenElem: <DummyCaption caption="Augmented Reality" />
          },
          {
            url: "https://cdn.pixabay.com/photo/2016/02/19/11/44/car-1209912_960_720.jpg",
            childrenElem: <DummyCaption2 caption="Self Driving Cars" />
          },
          
      ];


    return (
        

        <div className="Researchs_container">
                <SmartSlider
                    slides={slidesArray}
                    buttonShape="round" // round or square
                        />
                        {/* first paper  */}
        <div className="Research_content">
       
        <Research_post
        Images="https://image.flaticon.com/icons/svg/2488/2488271.svg"
        Heading="Augmented Reality As An Information Database"
        Paragraph="New approach for making education easier for humans that makes learning more practical and reliant. Computer Vision has a wide variety of technologies.Augmented Reality is one of the popular technologies of Computer vision.Augmented reality is the next revolutionary approach...."
        username="Read More."
        links="https://firebasestorage.googleapis.com/v0/b/neurth-7d634.appspot.com/o/Augmented%20Reality%20as%20a%20database.pdf?alt=media&token=1cc58de3-45da-4f32-9e43-604105695387"
        />
        </div>
       
          


         
        

        </div>
    )
}

export default Research
