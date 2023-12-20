import React from 'react';
import './index.css';

function Card(props){
    return(
      <>
        <div className='container'>
          <div className='cards'>
            <div className='card'>
              <img src={props.imgsrc} alt='Mypic' className='cardImg'/>
              <div className='card_info'>
                <span className='text'>{props.title}</span>
                <h3 className='card_title'>{props.sname}</h3>
                <a href= {props.link} target='_blank'>
                <button> WATCH NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Card;