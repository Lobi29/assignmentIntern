import React, { useState } from 'react';


// assets
import { CgBookmark } from "react-icons/cg";
import { RiDeleteBin7Line } from "react-icons/ri";
import Comment from '../comment/Comment';

// stylesheet
import styles from './Post.module.css';

const Post = () => {
    const [comment, setCommet] = useState('');
    const [condition, setConditon] = useState(true);

    const handleComment = () => {
        if (!condition) {
            setConditon(true);
        }
    }

    const handleShow = () => {
        if (condition) {
            setConditon(false);
        }
    }

    const handleChange = (e) => {
        setCommet(e.target.value);
    }


    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.heading}>#sad</div>
                <div className={styles.features}>
                    <CgBookmark className={styles.icon} />
                    <RiDeleteBin7Line className={styles.icon} />
                </div>
            </div>
            <div className={styles.middleConatiner}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et eos quos soluta nemo veritatis quia, accusantium obcaecati reiciendis reprehenderit omnis corrupti expedita autem non deserunt placeat, velit dolorem quaerat?</p>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.time}>12 minutes ago</div>
                <div className={styles.features}>
                    <button className={styles.commentBtn} onClick={handleComment}>Add Comment</button>
                    <button className={styles.showBtn} onClick={handleShow}>Show Comment</button>
                </div>
            </div>
            <div style={styles.commentContainer}>
                {condition ?
                    <form className={styles.form} onSubmit={() => { }}>
                        <input
                            type="text"
                            className={styles.searchQuery}
                            name="comment"
                            placeholder='Comment...'
                            value={comment}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                        <button className={styles.querySubmit}>Add Comment</button>
                    </form>
                    :
                    <div style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                }
            </div>
        </div>
    )
}

export default Post