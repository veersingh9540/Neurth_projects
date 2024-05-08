import React from 'react'
import './ToggleButton.css'
function ToggleButton(pr) {
    return (
        
            <button className="Toggle_button"  onClick={pr.click}>
                <div className="Toggle_buttonSpacing"></div>
                <div className="Toggle_buttonSpacing"></div>
                <div className="Toggle_buttonSpacing"></div>
            </button>
        
    )
}

export default ToggleButton
