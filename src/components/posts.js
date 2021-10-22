import React from 'react'; // ESX
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div>
      <Link to="/posts/1">Post1</Link><br />
      <Link to="/posts/2">Post2</Link><br />
      <Link to="/posts/3">Post3</Link>
    </div>
  )
}

export default Posts;  // If you need to use this component for other component you need to available and export for them.
