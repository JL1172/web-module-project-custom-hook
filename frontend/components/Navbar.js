import React from 'react';

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <p>{props.data}</p>
      <div className="dark-mode__toggle">
        <div 
          onClick={props.setData}
          className={props.data ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
