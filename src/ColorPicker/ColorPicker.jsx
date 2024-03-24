// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import styles from './ColorPicker.module.css'

function ColorPicker(){
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event){
    setColor(event.target.value);
  }

  return(
    <div className={styles["color-picker-contain"]}>
      <h1 className={styles["title"]}>Color Picker</h1>
      <div className={styles["color-display"]} style={{background: color}}>
        <p className={styles["color-value"]}>{color}</p>
      </div>
      <input type="color" onChange={handleColorChange}/>
    </div>
  );
}

export default ColorPicker