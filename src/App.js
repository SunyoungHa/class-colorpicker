
import './App.css';
import React, { useState } from 'react';
import SwatchCreator from './components/SwatchCreator';
import Swatch from './components/Swatch';



const App = () => {
    const [swatches, setSwatches] = useState([]);
    const saveSwatch = (newSwatch) => {
        setSwatches([...swatches, newSwatch])
    }

    return(
        <div className='App'>
          <h2 style={{textAlign:'center'}}>Swatch Creator</h2>
            <SwatchCreator saveSwatch={saveSwatch} />
            <div className='swatch-main-wrapper'>
                <div>{swatches.length}</div>
                {swatches.map((swatch)=> (
                    <div>
                        <Swatch title={swatch.title} colors={swatch.colors} />
                    </div>
                ) )}
            </div>
        </div>

    )
}

export default App;