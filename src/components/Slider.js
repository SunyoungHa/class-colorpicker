import React from 'react';


const Slider = (props) => {
    return (
        <div>
           <lable>{props.label} </lable>
           <input type="range" min="0" max="255" step="1" value={props.val} 
           onChange={(e) => props.updateColor(e.target.value)}/><br></br>
        </div>
    )
}




export default Slider