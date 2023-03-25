import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Game from './components/Game/Game';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/game' element={<Game />}></Route>
      <Route path='/about' element={<About />} ></Route>
    </Routes>
    </>
  );
}

export default App;
