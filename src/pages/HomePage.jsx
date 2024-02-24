import React, { useState } from 'react'
// import { useGetPostsQuery } from '../redux/api/apiSlice.js';
import { useGetPostsQuery } from '../redux/api/postApiSlice';

// components
import SortBox from '../components/sortBox/SortBox'
import Post from '../components/post/Post';


const HomePage = () => {
  const [order, setOrder] = useState("descending");

  const { data: Posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();


  const handleChange = (e) => {
    console.log(order);
    setOrder(e.target.value);
    console.log(Posts);
  }

  let content;

  if (isLoading) {
    content = <p>Loading</p>
  } else if (isSuccess) {
    content = <div>
      <SortBox totalPost={Posts.length} order={order} handleChange={handleChange} />
      <div style={{
        width: '800px',
        margin: '0 auto',
        borderTop: '2px solid var(--secondary-blue)'
      }}>
        {Posts
          .slice() // Create a copy of the original array to avoid mutating the original data
          .sort((a, b) => {
            // Sort posts based on the selected order
            if (order === 'ascending') {
              return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (order === 'descending') {
              return new Date(a.createdAt) - new Date(b.createdAt);
            }
            return 0; // No sorting
          })
          .map(post => (
            <div key={post._id}>
              <Post postDetails={post} />
            </div>
          ))
        }
      </div>
    </div>
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <main>
      {content}
    </main>
  )
}

export default HomePage