// Same as posts. We can return direct array in const
import React from 'react'; // ESX
import { Link } from 'react-router-dom';

const Articles = () => {
  return [
    <div key="1">Hello</div>,
    <div key="2">I am</div>,
    <div key="3">a React app</div>
  ]
}

export default Articles;  // If you need to use this component for other component you need to available and export for them.
