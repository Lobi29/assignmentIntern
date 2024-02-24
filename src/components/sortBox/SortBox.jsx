import React from 'react';

// stylesheet
import styles from './SortBox.module.css';

const SortBox = ({ order, handleChange }) => {

    return (
        <div className={styles.container}>
            <h5>12 posts</h5>
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
                    <option value="bookmark">bookmark</option>
                </select>
            </div>
        </div>
    )
}

export default SortBox