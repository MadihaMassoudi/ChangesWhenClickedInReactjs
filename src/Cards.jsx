import React from 'react';
import './index.css';
import Heading from './Heading';
import Images from './Images'

function Card(props){
    return(
      <>
        <div className='container'>
          <div className='cards'>
            <div className='card'>
             <Images imgsrc = {props.imgsrc} />
              <div className='card_info'>
                <span className='text'>{props.title}</span>
                <Heading sname = {props.sname}/>
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