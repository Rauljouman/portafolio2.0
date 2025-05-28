import { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Footer from './components/Footer.jsx';

function App() {
return(
  <div>
    <header>
      {<Sidebar /> }
    </header>
    <main>
        {<Home />}
        {<Languages />}
        {<Projects />}
        {<Experience />}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  );
}

export default App;
