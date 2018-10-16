import React from 'react';
// import { Link } from 'react-router-dom';
import { NOT_FOUND_MESSAGE } from './../../constants';

export default () => {
  return (
    <div className="col-12">
      <h5>{NOT_FOUND_MESSAGE}</h5>
      {/* <Link to="/">Back to home</Link> */}
    </div>
  )
}
