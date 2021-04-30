import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <Header />
    <NavBar />
    <img src="https://static01.nyt.com/images/2020/04/22/dining/21milkbarrex2/merlin_171379644_8f93d0c8-c7ca-41ae-a8f0-e09b4d0436ad-articleLarge.jpg" alt="Jo is a pile of pierogi" />
    <AboutMe />
    <Footer />

    </div>
  );
}

export default App;
