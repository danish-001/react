import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}

const headerStyle = {
  backgroundColor: 'grey',
  color: 'white',
  textAlign: 'center',
  margin: '2px'
}

export default Header; 