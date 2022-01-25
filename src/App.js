//I didn’t manage to make a separate component for changing the data and didn’t have time :(
//For this project i use React, Hooks(useState, useEffect), TailwindCss, React-Bootstrap, Reac-Icons
import React from 'react'
// Here I connect the main components. Content and Header.

import Content from './components/content/Content'
import Header from './components/header/Header'
function App() {
  return (
      <div className='container mx-auto '>
        <Header />
        <Content />
      </div>
  );
}

export default App;

