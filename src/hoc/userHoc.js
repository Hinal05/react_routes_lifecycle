import React from 'react'; // ESX

const userHoc = (WrappedComponent, WrappedComponent2, arg1) => {
  return (props) => (
    <div>
      {/* {console.log('UserHoc: ', props)} */}
      {arg1}
      <WrappedComponent {...props} />  {/* This props data will reflect on user.js console */}
      <WrappedComponent2 {...props} />
    </div>
  )
}

export default userHoc;
