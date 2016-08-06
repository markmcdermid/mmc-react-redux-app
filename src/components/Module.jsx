import React from 'react'

import './Module.scss';

const Module = ({ children }) => {
  return (
    <div className='moduleWrap'>
      <div className='module'>
        { children }
      </div>
    </div>
  );
};

export default Module;