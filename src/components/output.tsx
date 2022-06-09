import React from 'react';
import style from '../App.module.css'

// Displays data recieved from JSON file
function Output() {
  return (
    <div className={style.grid}>
        <p>1 Degree▫</p>
        <p>Feels like 100 Degrees▫</p>
        <p>Bright Sunny</p>
    </div>
  );
}

export default Output;
