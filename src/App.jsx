import { useState } from 'react';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
// import Intro from './components/Intro'; ← se activará después

function App() {
return(
    <>
      {<Sidebar /> }
      {<Landing />}
      {<Projects />}
    </>
  );
}

export default App;
