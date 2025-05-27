import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Languages from './components/Languages';

function App() {
return(
  <div>
    <div>
      {<Sidebar /> }
    </div>
    <div>
        {<Home />}
        {<Languages />}
        {<Projects />}
        {<Experience />}
    </div>
  </div>
  );
}

export default App;
