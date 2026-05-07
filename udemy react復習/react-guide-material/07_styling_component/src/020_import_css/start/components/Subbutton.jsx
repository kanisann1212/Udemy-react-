
import { useState } from 'react';
import styles from'./Subbutton.module.css'

const SubButton = () =>{
  const [click,setclick] = useState(false);
  const toggleClick =()=> setclick((prev)=>!prev)

  return (
    <button className={`${styles.btn} ${click ? styles.selected:""}`} onClick={toggleClick}>サブボタン</button>
  )
}

export default SubButton;