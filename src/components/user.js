import React from 'react'; // ESX
import userHoc from '../hoc/userHoc';

const User = (props) => {
  console.log('User:',props)
  return (
    <div>
      User 1
    </div>
  )
}

const User2 = (props) => {
  console.log('User2:', props)
  return (
    <div>
      User 2
    </div>
  )
}

export default userHoc(User, User2, 'Hello');
