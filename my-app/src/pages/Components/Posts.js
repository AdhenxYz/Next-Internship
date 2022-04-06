import React from 'react'
import styles from '../../styles/Home.module.css'
function Input() {
  return (
    <div>
      <p>Title</p>
      <input type="text" />
      <p>Description</p>
      <textarea></textarea>
      <br />
      <button classname={styles.buttons} type="submit">Post</button>
    </div>
  );
}

export default Input