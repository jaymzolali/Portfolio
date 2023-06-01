import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Theme = () => {
    let [theme, setTheme] = useState('--color-primary');
    let redirect = useNavigate();
  return (
    <div className='dialogue__box'>
        <div className="dialogue__area">
            <div className="dialogue__colors">
                <div>
                    <div className='blue'></div>
                    <p>blue</p>
                </div>
                <div>
                    <div className='red'></div>
                    <p>red</p>
                </div>
                <div>
                    <div className='green'></div>
                    <p>green</p>
                </div>
                <div>
                    <div className='yellow'></div>
                    <p>yellow</p>
                </div>
            </div>
            {/* end of colors */}
            <div className="dialogue__bottom">
                <div className="dialogue__white">
                    <p>white</p>
                    <div className='white_bg'></div>
                </div>
                <div className="dialogue__dark">
                    <p>dark</p>
                    <div className='dark_bg'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Theme