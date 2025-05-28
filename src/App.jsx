import Home from './components/Home';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Home />
        <Languages />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
