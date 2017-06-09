import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

function B(props) {
  return (
    <div>
    	<p>in module B</p>
      <ul>
        <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
        <li><Link to="/counter" activeStyle={{ color: 'red' }}>Counter</Link></li>
        <li><Link to="/add" activeStyle={{ color: 'red' }}>Counter</Link></li>
      </ul>
      {/* this will render the child routes */}
      {React.cloneElement(props.children, props)}
    </div>
  );
}
B.propTypes = {
  // children: PropTypes.any.isRequired
};

export default B;
