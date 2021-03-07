// import React from 'react';
import Slider from './components/Slider';
import Colorpicker from './components/Colorpicker';
import './App.css';
import React, { useState } from 'react';

// export default function App() 
// function Count() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
  
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 100)}>
//           Click me
//         </button>
//       </div>
//     );
//   }

const App = () => {

    return(
        <div>
            <Colorpicker /><br />
            {/* <Count /> */}
            <Colorpicker /><br />
            <Colorpicker /><br />  
        </div>

    )
}

export default App;