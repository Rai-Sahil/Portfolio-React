import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBars/MainNavBar/NavBar';
import Home from './Pages/HomePage/HomePage';
import Projects from './Pages/ProjectPage/ProjectPage';
import Skills from './Pages/SkillsPage/SkillsPage';
import ProjectNavBar from './NavBars/ProjectNavBar/projectNavBar';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import Footer from './Pages/Footer/Footer';
import RefPage from './Pages/ReferencePage/RefPage';
import Courses from './Pages/CoursesPage/CoursesPage';
import Publication from './Pages/Publication/Publication';
import ProjectDescription from './Pages/ProjectDescriptionPage/ProjectDescription';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <section className="page-body">
        <Home />

        <Skills />

        <Publication />

        <ProjectNavBar />
        <Routes>
          <Route path="/" element={ <Projects command='WEBSITE'/> } />
          <Route path="/research" element={ <Projects command='RESEARCH'/> } />
          <Route path="/mobile-desktop-apps" element={ <Projects command='MOBILE AND DESKTOP'/> } />
          <Route path="/games" element={ <Projects command='GAMES'/> } />
          <Route path="/rest-of-them" element={ <Projects command=''/> } />

          {/* For Project Description Page */}
          <Route path="/project/:id" element={ <ProjectDescription/> } />
        </Routes>

        <ExperiencePage />

        <Courses />
        
        <RefPage />
      </section>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
