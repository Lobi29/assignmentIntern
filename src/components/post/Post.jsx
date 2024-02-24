import React, { useState } from 'react';
import moment from 'moment';
import { useGetCommentsQuery, useCreateCommentMutation } from '../../redux/api/commentApiSlice';
import { useSetBookmarkedMutation, useDeletePostMutation } from '../../redux/api/postApiSlice';

// assets
import { CgBookmark } from "react-icons/cg";
import { RiDeleteBin7Line } from "react-icons/ri";
import Comment from '../comment/Comment';
import { FaBookmark } from "react-icons/fa";

// stylesheet
import styles from './Post.module.css';

const Post = ({ postDetails }) => {
    const [comment, setComment] = useState("");
    const [condition, setConditon] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(postDetails.isBookmarked);

    const { data: comments, isLoading, isSuccess, isError, error } = useGetCommentsQuery({ postId: postDetails._id });
    const [createComment] = useCreateCommentMutation();
    const [setBookmarked] = useSetBookmarkedMutation();
    const [deletePost] = useDeletePostMutation();


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

    const handleChange =  (e) => {
        setComment(e.target.value);
    }

    const handleDelete = async () => {
        try {
            await deletePost({ postId: postDetails._id });
        } catch (error) {
            console.log('Error handling bookmark', error);
        } finally {
            console.log('post deleted succesfully');
        }
    }

    const handleBookmarked = async () => {
        try {
            await setBookmarked({ postId: postDetails._id });
        } catch (error) {
            console.log('Error handling bookmark', error);
        } finally {
            if (isBookmarked) {
                setIsBookmarked(false);
            } else {
                setIsBookmarked(true);
            }
        }
        // if (isBookmarked) {
        //     setIsBookmarked(false);
        //     console.log(postDetails._id)
        //     setBookmarked({ postId: postDetails._id });
        // } else {
        //     console.log(postDetails._id)
        //     setIsBookmarked(true);
        //     setBookmarked(postDetails);
        // }
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
                    <div>{isBookmarked === true ? 
                    <FaBookmark className={styles.icon} onClick={handleBookmarked} />
                    :
                    <CgBookmark className={styles.icon} onClick={handleBookmarked} />
                }</div>
                    <RiDeleteBin7Line className={styles.icon} onClick={handleDelete} />
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