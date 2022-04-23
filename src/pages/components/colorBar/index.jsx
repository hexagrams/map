import React from 'react';
import { colorData } from '../../dataList'
import './index.less'

function ColorBar() {
  const color = JSON.parse(JSON.stringify(colorData)).reverse()
  return (
    <div className='color-bar'>
      {
        color.map((item, index) => {

          return (
            <div className='color-item' key={index}>
              <div style={{ 'background': item.color, height: "18px", width: "18px" }}></div>
              <div className='number'><span className='min'>{item.min}</span>~<span className='max'>{item.max === null ? "∞" : item.max}</span></div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ColorBar;
