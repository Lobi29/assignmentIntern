import React, { useState } from 'react';
import moment from 'moment';
import { useGetCommentsQuery, useCreateCommentMutation } from '../../redux/api/commentApiSlice';

// assets
import { CgBookmark } from "react-icons/cg";
import { RiDeleteBin7Line } from "react-icons/ri";
import Comment from '../comment/Comment';

// stylesheet
import styles from './Post.module.css';

const Post = ({ postDetails }) => {
    const [comment, setComment] = useState("");
    const [condition, setConditon] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data: comments, isLoading, isSuccess, isError, error } = useGetCommentsQuery({ postId: postDetails._id });
    const [createComment] = useCreateCommentMutation();


    const handleComment = () => {
        if (!condition) {
            setConditon(true);
            console.log(postDetails)
        }
    }

    const handleShow = () => {
        if (condition) {
            setConditon(false);
        }
    }

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await createComment({ postId: postDetails._id, comment })
            setComment("");
        } catch (error) {
            console.error('Error creating comment:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    // formating the time
    const timeAgo = moment(postDetails.createdAt).fromNow();


    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.heading}>#{postDetails.category}</div>
                <div className={styles.features}>
                    <CgBookmark className={styles.icon} />
                    <RiDeleteBin7Line className={styles.icon} />
                </div>
            </div>
            <div className={styles.middleConatiner}>
                <p>{postDetails.description}</p>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.time}>{timeAgo}</div>
                <div className={styles.features}>
                    <button className={styles.commentBtn} onClick={handleComment}>Add Comment</button>
                    <button className={styles.showBtn} onClick={handleShow}>Show Comment</button>
                </div>
            </div>
            <div style={styles.commentContainer}>
                {condition ?
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={styles.searchQuery}
                            name="comment"
                            placeholder='Comment...'
                            value={comment}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                        <button className={styles.querySubmit}>{isSubmitting ? <p>uploading</p> : <p>add comment</p>}</button>
                    </form>
                    :
                    <div style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {/* {comments && comments.map(comment => (
                            <div key={comment._id}>
                                <p>{comment.text}</p>
                            </div>
                        ))} */}
                        {isSuccess ?
                            <div style={{
                                display: 'flex',
                                boxSizing: 'border-box',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                {comments.map(ulfa => (
                                    <div key={ulfa._id}>
                                        <Comment ulfa={ulfa} />
                                    </div>
                                ))}
                            </div>
                            :
                            <p>loading</p>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Post