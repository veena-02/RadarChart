import React, { useState } from 'react';

const Slider=(props)=>{
    const [sliderVal,changeSliderVal]=useState(0);
    const sliderValHandler=(event)=>{
        changeSliderVal(
            event.target.value
        );}
    const style={
        textAlign:'center'
    }
    return(
        <div style={style}>
            <span>{props.name} </span>       
            <input type="range" onInput={sliderValHandler} onChange={props.changeLoading} min="0" max="1" step="0.1" />
            <span>{sliderVal}</span>
        </div>
    );
}
export default Slider;
