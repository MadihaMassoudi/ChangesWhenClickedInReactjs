import React from 'react';
import SlotM from './SlotM';

const App = () =>{
    return(
      <>
          <h1 className='heading_style'> 🎰 Welcome to my <span style={{fontWeight: 'bold'}}> Slot Machine Game </span> 🎰 </h1>

        <div className='MyContainer'>
          <hr />
          <SlotM x= '😸'  y = '😸'  z= '😸'/>
          <hr />
          <SlotM x= '🐬'  y= '💯'  z= '😸'/>
          <hr />
          <SlotM x= '🥛' y= '🥛'  z= '🥛'/>
          <hr />
          <SlotM x= '✈️'  y= '😄'  z= '👶' />
          <hr />
          <SlotM x= '👽'  y= '👽'  z= '👽' />
        </div>
      </>
    )
};

export default App;