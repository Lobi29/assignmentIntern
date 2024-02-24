import React from 'react';

// stylesheet
import styles from './SortBox.module.css';

const SortBox = ({ totalPost = 0, order, handleChange }) => {

    return (
        <div className={styles.container}>
            <h2>{totalPost} posts</h2>
            <div className={styles.sortContainer}>
                <h5>Sort Post</h5>
                <select
                    className={styles.selectForm}
                    name="order"
                    value={order}
                    onChange={handleChange}
                >
                    <option value="ascending">ascending</option>
                    <option value="descending">descending</option>
                </select>
            </div>
        </div>
    )
}

export default SortBox