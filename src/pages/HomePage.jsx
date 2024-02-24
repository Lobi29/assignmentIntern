import React, { useState } from 'react'
import SortBox from '../components/sortBox/SortBox'
import Post from '../components/post/Post';

const HomePage = () => {
  const [order, setOrder] = useState("");

  const handleChange = (e) => {
    console.log(order);
    setOrder(e.target.value);
  }

  return (
    <div>
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
    </div>
  )
}

export default HomePage