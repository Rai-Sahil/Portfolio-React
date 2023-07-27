import './App.css';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import Skills from './Pages/SkillsPage/SkillsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="page-body">
        <HomePage />
        <Skills /> {/* Skills section for the after the dropdown line */}
      </section>
    </div>
  );
}

export default App;
