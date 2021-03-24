import React, {useState} from 'react';
import ColorPicker from './ColorPicker1';
import Button from 'react-bootstrap/Button';


const SwatchCreator = (props) => {

    const saveSwatch = () => {
        const swatch = {
            title:title,
            colors:[color1,color2,color3,color4]
        }
        props.saveSwatch(swatch);
    }
    
    const resetSwatch =() => {
        const swatchReset = {
            title: title,
            colors: [{r:'128', g:'128', b:'128'},
            {r:'128', g:'128', b:'128'},
            {r:'128', g:'128', b:'128'},
            {r:'128', g:'128', b:'128'}]
            
        }
        setColor1({r:'128', g:'128', b:'128'})
        setColor2({r:'128', g:'128', b:'128'})
        setColor3({r:'128', g:'128', b:'128'})
        setColor4({r:'128', g:'128', b:'128'})
        props.resetSwatch();
    }
    
    const [title, setTitle] = useState('');
    const [color1, setColor1] = useState({});
    const [color2, setColor2] = useState({});
    const [color3, setColor3] = useState({});
    const [color4, setColor4] = useState({});
    
    const resetPicker = () => {
        window.location.reload();
    }

    return(
        <div  className="App" >
        <input placeholder="Swatch Name" value={title} 
        onChange={(e) => setTitle(e.target.value)} />
        <div className="swatch-creator-wrapper">
            <ColorPicker color={color1} setColor={setColor1}/>
            <ColorPicker color={color2} setColor={setColor2}/>
            <ColorPicker color={color3} setColor={setColor3}/>
            <ColorPicker color={color4} setColor={setColor4}/>
        </div>
        <Button className='btn'onClick={saveSwatch}>Save</Button>
        <Button className='reset-btn'onClick={resetPicker}>Reset</Button>
   

        </div>

    )
}


export default SwatchCreator