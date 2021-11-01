import React from 'react';
// const Auth = (props) => props.children
const Auth = (props) => {
  const pass = '123456';
  if (pass != '123456') {
    return <h3> You are not Authorized </h3>
  } else {
    return props.children
  }
}
export default Auth;
