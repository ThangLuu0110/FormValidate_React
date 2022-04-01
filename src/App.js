import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import SignInPage from './Component/SignInPage';
import SignUpPage from './Component/SignUpPage';


function App() {
  return (
      <div className="App">
        <nav className='navbar'>
          <div>
            <Link to='/'> Home </Link>
          </div>
          <ul>
            <li>
              <Link to='/signin'> Sign In </Link>
            </li>
            <li>
              <Link to='/signup'> SignUp </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/signin' element={<SignInPage />}/>
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </div>
  );
}

export default App;
