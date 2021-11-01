import React from 'react'; // ESX
import { Link } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = (props) => {
  console.log(props)
  const redir = () => {
    // props.history.push('/') // Redirect to Home page
  }
  return (
    <Auth>
      <Card>
        <Link to={{
          pathname: `${props.match.url}/posts`
        }}>Take me to the /profile/posts</Link>  {/* // Dynamic url */}
        {/* {redir()} */}
      </Card>
    </Auth>
  )
}

export default Profile;  // If you need to use this component for other component you need to available and export for them.
