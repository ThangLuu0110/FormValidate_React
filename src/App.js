import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import SignInPage from './Component/SignInPage';
import SignUpPage from './Component/SignUpPage';


function App() {
  const [ user, setUser ] = useState(localStorage.getItem('user') ?? [])
    
    const saveData = (firstname, lastname, email, password) => {
        const User =[...user,
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }
        ] 
        localStorage.setItem('user', JSON.stringify(User));
        setUser(User);  
    }
  
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
          <Route path='/signin' element={<SignInPage user={user}/>}/>
          <Route path='/signup' element={<SignUpPage saveData={saveData} />} />
        </Routes>
      </div>
  );
}

export default App;
