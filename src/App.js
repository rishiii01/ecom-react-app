import logo from './logo.svg';
import './App.css';
import About from "./Components/Pages/About"
import Layout from "./Components/Layout/Layout"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import LearnHooks from './Components/Modules/LearnHooks';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path= "/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="/about" element={<About />} />
    <Route path="./Components/Modules/LearnHooks.jsx" element={<LearnHooks />} />
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
