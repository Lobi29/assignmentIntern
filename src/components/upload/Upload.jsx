import React, { useState } from 'react';
import { useCreatePostMutation } from '../../redux/api/postApiSlice';

// stylesheet
import styles from './Upload.module.css';

const Upload = () => {
    const [post, setPost] = useState({
        category: "",
        description: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [createPost] = useCreatePostMutation();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(post);
        setIsSubmitting(true); 
        try {
            await createPost(post);
            setPost({
                category: "",
                description: ""
            });
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.uploadContainer}>
                <div className={styles.headingContainer}>
                    <h1 className={styles.heading}>Upload A Post</h1>
                    <h3 className={styles.subHeading}>Whats in your Mind</h3>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.categoryBox}>
                        <h5 className={styles.heading}>Select the category:</h5>
                        <select
                            className={styles.selectForm}
                            name="category"
                            value={post.category}
                            onChange={handleChange}
                        >
                            <option value="happy">happy</option>
                            <option value="sad">sad</option>
                            <option value="moddy">moddy</option>
                        </select>
                    </div>
                    <div>
                        <h5 className={styles.heading}>Describe Your Mode:</h5>
                        <textarea
                            rows={6}
                            className={styles.textForm}
                            name='description'
                            placeholder='Describe...'
                            value={post.description}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                    <button className={styles.discard}>discard</button>
                    <button className={styles.post}>{isSubmitting ? <p>uploading</p> : <p>submit</p>}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Upload