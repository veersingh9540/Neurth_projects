import React from 'react'
import { Button } from '@material-ui/core'
import "./Research_post.css"
function Research_post({Images,Heading,Paragraph,username,links}) {
    return (
        <div className="Post_research">
             <div className="ResearchContent_container">
            < img src={Images} alt="" className="ResearchContent_Image"/>
            <div className="ResearchContent_info">
                    <span><strong><h2>{Heading}</h2></strong></span>
                     <p>{Paragraph}</p>
                        
            </div>
            <div className="button_research">
            <Button  variant="contained" color="primary" href={links} >{username}</Button>
            </div>
            
          </div>
        </div>
    )
}

export default Research_post
