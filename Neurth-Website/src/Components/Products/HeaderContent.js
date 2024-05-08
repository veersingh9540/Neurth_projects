import React from 'react'
import './HeaderContent.css'
import { Button } from '@material-ui/core'
function HeaderContent({title, image,paragraph,site}) {
    return (
        <div className="HeaderContent_container">
        < img src={image} alt="" className="HeaderContent_Image"/>
        <div className="HeaderContent_info">
            <span><strong><h2>{title}</h2></strong></span>
                    <p>{paragraph}</p>
        </div>
        
    </div>
    )
}

export default HeaderContent
