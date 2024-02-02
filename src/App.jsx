 import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 import LandScape from './components/LandScape';
 import HomePage from './components/HomePage';
import LandscapeList from './components/LandScapesList';
import RegisterForm from './components/Register';
import LoginForm from './components/Login';

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/landscapes' element={ <LandscapeList/>}/>
          <Route path='/landscape/:id' element={ <LandScape/>}/>
          <Route path='/login' element={ <LoginForm/>}/>
          <Route path='/register' element={ <RegisterForm/>}/>
        </Routes>
      </Router>
  
 
   
  );
}
export default App;
