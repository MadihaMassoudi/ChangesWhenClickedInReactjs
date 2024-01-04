import React from 'react';
import { useState } from 'react';

const App = () =>{

  const purple = "#8a44ad";
  const[bg, setBg] = useState(purple);
  const[name, setName] = useState('Click Me');

  const colorChange = () =>{
    let color = "#34495e";
    setBg(color);
    setName("Ouch 😟");
  };
  
  const textChange = () =>{
    let color = "#afafaf";
    setBg(color);
    setName("WTF 🤬");
  };
  
  return(
    <>
    <div style={ { backgroundColor: bg } }>
      <button onClick={colorChange} onDoubleClick={textChange}> {name} </button>
    </div>
    </>
  )
}

export default App;

// import React from 'react';
// import { useState } from 'react';

// const App = () =>{

//   const purple = "#8a44ad";
//   const[bg, setBg] = useState(purple);
//   const[name, setName] = useState('Click Me');

//   const colorChange = () =>{
//     let color = "#34495e";
//     setBg(color);
//     setName("Ouch 😟");
//   };
  
//   const textChange = () =>{
//     let color = "#afafaf";
//     setBg(color);
//     setName("WTF 🤬");
//   };
  
//   return(
//     <>
//     <div style={ { backgroundColor: bg } }>
//       <button onMouseOver={colorChange} onMouseOut={textChange}> {name} </button>
//     </div>
//     </>
//   )
// }

// export default App;
