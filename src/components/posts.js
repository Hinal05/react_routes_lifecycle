import React from 'react'; // ESX
import { Link } from 'react-router-dom';

const Posts = () => {
  const ids = [
    { id: '1', name: 'Post 1' },
    { id: '2', name: 'Post 2' },
    { id: '3', name: 'Post 3' },
  ]
  // For All the versions
  // const list = ids.map(item => { //Loop using map method
  //   return (
  //     <div key={item.id}>
  //       <Link to={item.id}>{item.name}</Link>
  //     </div>
  //   )
  // })
  // return (
  //   <div>
  //     {/* <Link to="/posts/1">Post1</Link><br />
  //     <Link to="/posts/2">Post2</Link><br />
  //     <Link to="/posts/3">Post3</Link> */}
  //     {list}
  //   </div>
  // )

  // For React 16
  return ids.map(item => { //Loop using map method
    return (
      <div key={item.id}>
        <Link to={item.id}>{item.name}</Link>
      </div>
    )
  })
}

export default Posts;  // If you need to use this component for other component you need to available and export for them.
