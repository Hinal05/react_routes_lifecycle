import React from 'react';

const Conditional = () => {
  const value = true;
  const returnValue = () => {
    return false;
  }
  const showIt = () => {
    console.log(returnValue());
    return (
      returnValue() == false ?
        <div>Hello, it's True condition</div>
        :
        <div>It's False condition</div>
    )
  }
  return (
    <div>
      {value == false ?
        <div>Hello, it's False</div>
        :
        <div>It's True</div>} {/* // ternary operator */}
      ShowIt : {showIt()}
    </div>
  )
}
export default Conditional;
