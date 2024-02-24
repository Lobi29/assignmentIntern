import React, { useState } from 'react'
// import { useGetPostsQuery } from '../redux/api/apiSlice.js';
import { useGetPostsQuery } from '../redux/api/postApiSlice';

// components
import SortBox from '../components/sortBox/SortBox'
import Post from '../components/post/Post';


const HomePage = () => {
  const [order, setOrder] = useState("");

  const { data: Posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();


  const handleChange = (e) => {
    console.log(order);
    setOrder(e.target.value);
    // console.log(Posts);
  }

  return (
    <main>
      <SortBox order={order} handleChange={handleChange} />
      <div style={{
        width: '800px',
        margin: '0 auto',
        borderTop: '2px solid var(--secondary-blue)'
      }}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default HomePage