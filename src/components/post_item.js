import React from 'react'; // ESX
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  console.log(props);
  return (
    <div>
      {props.match.params.id} - {props.match.params.username}
    </div>
  )
}

export default PostItem;  // If you need to use this component for other component you need to available and export for them.
