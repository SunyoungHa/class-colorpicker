import React, { useState } from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';


const Colorpicker = () => {
    const [red,updateR] = useState("128");
    const [green,updateG] = useState("128");
    const [blue,updateB] = useState("128");

    
    return (
        <div> 
        <Card style={{width: '20vw'}}>
            <Card.Body style={{width: '10vw'}}>
                <Slider label="R" val={red} updateColor={updateR}/>
                <Slider label="G" val={green} updateColor={updateG}/>
                <Slider label="B" val={blue} updateColor={updateB} />

                <div className="color-preview" style={{backgroundColor:`rgb(${red},${green},${blue})`}}></div>
            </Card.Body>
        </Card>
           
        </div>
    )
}


export default Colorpicker