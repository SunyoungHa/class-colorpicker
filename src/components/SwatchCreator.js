import React, {useState} from 'react';
import Colorpicker from './Colorpicker';
// import {Button} from 'react-bootstrap/Button';
import { Button } from '@material-ui/core';


const SwatchCreator = (props) => {
    const initialState = {...props}
    // console.log(props)
    console.log(initialState)

    const saveSwatch = () => {
        const swatch = {
            title:title,
            // description:description,
            colors:[color1,color2,color3,color4]
        }
        props.saveSwatch(swatch);
    }
    
    
    const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    const [color1, setcolor1] = useState({});
    const [color2, setcolor2] = useState({});
    const [color3, setcolor3] = useState({});
    const [color4, setcolor4] = useState({});
    
    

    return(
        <div>
        <input placeholder="Swatch Name" value={title} 
        onChange={(e) => setTitle(e.target.value)} />
        <div className="swatch-creator-wrapper">
            <Colorpicker color={color1} setColor={setcolor1}/>
            <Colorpicker color={color2} setColor={setcolor2}/>
            <Colorpicker color={color3} setColor={setcolor3}/>
            <Colorpicker color={color4} setColor={setcolor4}/>
        </div>
        <Button className='btn'oncClick={saveSwatch}>Save</Button>
        <Button className='btn'oncClick={saveSwatch}>Reset</Button>
   

        </div>

    )
}


export default SwatchCreator