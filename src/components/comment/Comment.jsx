import React from 'react';

// stylesheet
import styles from './Comment.module.css';

const Comment = () => {
  return (
    <div className={styles.container}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, magni!</p>
        <div>
            <p className={styles.time}>12 minutes ago</p>
            <button className={styles.commentBtn}>reply</button>
        </div>
    </div>
  )
}

export default Comment