import React from 'react'; // ESX
import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>Take me to the /profile/posts</Link>  {/* // Dynamic url */}
    </div>
  )
}

export default Profile;  // If you need to use this component for other component you need to available and export for them.
