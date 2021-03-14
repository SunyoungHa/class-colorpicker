import React from 'react';


const RgbDisplay = (props) => {
    return (
        <div className="input">
         <lable>{props.label} </lable>
        <input type="number" min="0" max="255" step="1" value={props.val} onChange={(e) => props.updateColor(e.target.value)}/><br></br>
        </div>
    )
}



export default RgbDisplay