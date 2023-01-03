
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/nasr/About';
import Header1 from './components/header/Header'
import Book from './components/pages/maqolalar/Book';
import Book__wiew from './components/pages/nazm/Book__wiew';
import Login from './components/pages/Login/Login';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.sessionStorage.getItem('key') !== '123'){
      navigate('/')
    }
  },[location.pathname])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/books' element={<Book/>}/>
        <Route path='/book-view' element={<Book__wiew/>}/>
      </Routes>
    </div>
  );
}

export default App;
