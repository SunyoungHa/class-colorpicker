import React, { useState, useEffect} from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';
import RgbDisplay from './RgbDisplay';


const ColorPicker1 = ({setColor}) => {
   const [red, updateR] = useState("128");
   const [green, updateG] = useState("128");
   const [blue, updateB] = useState("128");
  
    useEffect( () => {
        updateR(red)
        updateG(green)
        updateB(blue)
        setColor({r: red, g: green, b: blue})
    }, [setColor, red, green, blue])


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
    );
}


export default ColorPicker1;