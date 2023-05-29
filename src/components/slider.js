import React from 'react'
import Data from './sliderdata'
//import './slider.scss'
export default function Slider(props) {
  const slides=Data.map((data,index) => {
       return <div className='slide' key={index}>
            <img src={data.src} alt={data.alt}/>

       </div>
  })
  const style={
       width : `${Data.length*100}%`,
       transform : `translateX(-${props.currentIndex*(100/Data.length)}%)`
  }
  return (
    <div className='slider' style={style}>
        {slides}
    </div>
  )
}
