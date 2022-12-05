import React from 'react';
import axios from "../axios";



function Test() {

  const res = async () => {
    await axios.get('/user');
  }

  console.log(JSON.stringify(res));

  return (
    <div>Test</div>
  )
};

export default Test