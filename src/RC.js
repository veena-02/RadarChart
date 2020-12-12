import React, { useState } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import Slider from './Slider';

const RC=()=>{
    const [vardata,setVarData]=useState(
      {
        battery: 0.7,
        design: .8,
        useful: 0.9,
        speed: 0.67,
        weight: 0.8
      },
    );
    const [showLoading,toggleShowLoading]=useState(null);
    const toggleShowLoadingHandler=(event,index)=>{
      const person={
        ...vardata
      }
      switch(index){
        case 0:
          person.battery=parseFloat(event.target.value);
          break;
        case 1:
          person.design=parseFloat(event.target.value);
          break;
        case 2:
          person.useful=parseFloat(event.target.value);
          break;
        case 3:
          person.speed=parseFloat(event.target.value);
          break;
        case 4:
          person.weight=parseFloat(event.target.value);
          break;        
      }

      setVarData(person);
    }    
    const data=[
                  {
                    data: vardata,
                    meta: { color: 'blue' }
                  },
                  {
                    data: {
                      battery: 0.6,
                      design: .85,
                      useful: 0.5,
                      speed: 0.6,
                      weight: 0.7
                    },
                    meta: { color: 'red' }
                  }
               ];
    
    const captions = {
        // columns
        battery: 'competitive coding',
        design: 'development',
        useful: 'core subjects',
        speed: 'aptitude',
        weight: 'meditation'
      };
      const style={
        textAlign:'center'
      }
      let captionArr=Object.values(captions);
    return(
        <div style={style}>
            <div>{showLoading}</div>
            <RadarChart
            captions={captions}
            data={data}
            size={450}
            />
          {
            captionArr.map((cp,index) =>{
              return(<Slider name={cp} changeLoading={(event)=>toggleShowLoadingHandler(event,index)}/>);
            })
          }
        </div>
    );
}
export default RC;