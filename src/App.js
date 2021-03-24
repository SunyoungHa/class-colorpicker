
import './App.css';
import React, { useState } from 'react';
import SwatchCreator from './components/SwatchCreator';
import Swatch from './components/Swatch';



const App = () => {
    const [swatches, setSwatches] = useState([]);
    const saveSwatch = (newSwatch) => {
        setSwatches([...swatches, newSwatch])
    }
    const resetSwatch =() => {
        setSwatches([])
      }
      const initialState = {red:'128', green:'128', blue:'128'}

    return(
        <div className='App'>
          <h2 style={{textAlign:'center'}}>Swatch Creator</h2>
            <SwatchCreator saveSwatch={saveSwatch} resetSwatch={resetSwatch} />
            <div className='swatch-main-wrapper'>
            {/* <div>{swatches.length}</div> */}
                {swatches.map((swatch,id) => (
                    <div>
                      <Swatch title={swatch.title} colors={swatch.colors} key={id}/>
                    </div>
                ))}
             
            </div>
        </div>

    )
}

export default App;