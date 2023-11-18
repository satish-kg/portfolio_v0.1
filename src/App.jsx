import React, { useState } from 'react'
import Sidenav from 'src/components/sidenav';
// import Sidenav from './components/sidenav';
import Main from 'src/components/Main';
import Work from 'src/components/Work';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
