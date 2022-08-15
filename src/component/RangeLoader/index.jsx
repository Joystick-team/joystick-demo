import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RangeLoader(props) {
    const value = 60.66;

  return (
    <div>
        <div className="range__loader" >
            <CircularProgressbar value={props.value} text={`${props.value}%`} />
            <div>{`${props.value}%`}</div>
        </div>
    </div>
  )
}
