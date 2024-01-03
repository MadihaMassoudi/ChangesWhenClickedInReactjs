import React, { useState } from 'react';

const App = () =>{

  let newTime = new Date().toLocaleTimeString();  

  const [cTime, setCTime] = useState(newTime);

  const UpdatedTime = () =>{
    newTime = new Date().toLocaleTimeString(); 
    setCTime(newTime);
  }
  return(
    <>
      <div>
        <h1> {cTime} </h1>
        <button onClick={UpdatedTime}> Get Time </button>
      </div>
    </>
  )
}

export default App;



// import React, { useState } from 'react';

// const App = () =>{

//   let newTime = new Date().toLocaleTimeString();
//   const[cTime, setCTime] = useState(newTime);

//   const UpdatedTime = () =>{
//     newTime = new Date().toLocaleTimeString();
//     setCTime(newTime);
//   }

//   setInterval(UpdatedTime, 1000)
//   return (
//     <>
//       <div>
//         <h1>{cTime}</h1>
//       </div>
//     </>
//   )
// }

// export default App;
