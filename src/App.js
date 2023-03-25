import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Game from './components/Game/Game';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className='app'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GeoGenius</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content='GeoGenius website'/>
      </Helmet>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game' element={<Game />}></Route>
        <Route path='/about' element={<About />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
