import React, { useEffect, useState } from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';
import RgbDisplay from './RgbDisplay';
// import CardButton from './CardButton';
// import SwatchCreator from './SwatchCreator';


const Colorpicker = (props) => {
    const [red,updateR] = useState("128");
    const [green,updateG] = useState("128");
    const [blue,updateB] = useState("128");

    useEffect(()=> {
        props.setColor({r: red, g: green, b: blue})
    }, [red,green,blue])

    return (
        <div> 
        <Card className='card'>
            <Card.Body>
                <Slider label="R" val={red} updateColor={updateR}/>
                <Slider label="G" val={green} updateColor={updateG}/>
                <Slider label="B" val={blue} updateColor={updateB} />

                <div className="color-preview" style={{backgroundColor:`rgb(${red},${green},${blue})`}}></div>
                
                <RgbDisplay val={red} updateColor={updateR} />
                <RgbDisplay val={green} updateColor={updateG}/>
                <RgbDisplay val={blue} updateColor={updateB}/>

                {/* <SwatchCreator />  */}
            </Card.Body>
        </Card>
           
        </div>
    )
}


export default Colorpicker