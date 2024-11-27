import React, { useState, useEffect } from 'react'
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {

  useEffect(() => {
    document.title = "Satish Portfolio";
  }, []);

  return (
    <>
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
