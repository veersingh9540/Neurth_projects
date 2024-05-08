import React from 'react'
import "./Midcontent.css"
function Midcontent({title, image,paragraph}) {
    function truncate(str,n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        
        <div className="Content_container">
            < img src={image} alt="" className="Content_Image"/>
            <div className="Content_info">
                <span><strong><h2>{title}</h2></strong></span>
                        <h4>{paragraph}</h4>
            </div>
            
        </div>
    )
}

export default Midcontent
