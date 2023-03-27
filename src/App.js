import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Helmet } from "react-helmet";
import Game from "./components/Game/Game";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GeoGenius</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="GeoGenius website" />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
