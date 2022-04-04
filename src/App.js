import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import SignInPage from './Component/SignInPage';
import SignUpPage from './Component/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.scss';


function App() {
  const [ users, setUsers ] = useState(localStorage.getItem('users') ?? [])
    
    const saveData = (firstname, lastname, email, password) => {
        const User =[...users,
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }
        ] 
        localStorage.setItem('users', JSON.stringify(User));
        setUsers(User);  
    }
  
  return (
      <div className="App">
        <nav className='navbar container-md'>
          <div className='navbar__title'>
            <Link to='/' className='navbar__title-text'> Home </Link>
          </div>
          <div className='navbar__sign'>
            <ul className='navbar__sign-list'>
              <li className='navbar__sign-list__items'>
                <Link to='/signin' className='navbar__sign-list__items-text'> Sign In </Link>
              </li>
              <li className='navbar__sign-list__items'>
                <Link to='/signup' className='navbar__sign-list__items-text'> SignUp </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/signin' element={<SignInPage users={users}/>}/>
          <Route path='/signup' element={<SignUpPage saveData={saveData} />} />
        </Routes>
      </div>
  );
}

export default App;
