import React from 'react';
import moment from 'moment';

// stylesheet
import styles from './Comment.module.css';

const Comment = ({ ulfa }) => {
  const timeAgo = moment(ulfa.createdAt).fromNow();

  return (
    <div className={styles.container}>
        <p>{ulfa.comment}</p>
        <div>
            <p className={styles.time}>{timeAgo}</p>
            <button className={styles.commentBtn}>reply</button>
        </div>
    </div>
  )
}

export default Comment