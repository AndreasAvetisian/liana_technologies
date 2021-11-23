import logo from './logo.svg';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Container from './components/Container';
import styles from './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
