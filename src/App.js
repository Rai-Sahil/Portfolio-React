import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="page-body">
        <HomePage />
      </section>
    </div>
  );
}

export default App;
