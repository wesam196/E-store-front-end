import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './views/users.js';
import DefaultLayout from './Components/DefaultLayout.js';
import GuestLayout from './Components/GuestLayout.js';
import UserForm from './views/UserForm.js';
import Login from './views/login.js';
import Register from './views/register.js';
import TestAPI from './views/testAPI.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* Routes with DefaultLayout */}
          <Route path="/" element={<DefaultLayout />}>
            <Route path="users" element={<Users />} />
            <Route path="users/new" element={<UserForm key="userCreate" />} />
            <Route path="users/:id" element={<UserForm key="userUpdate" />} />
          </Route>

          {/* Routes with GuestLayout */}
          <Route path="/" element={<GuestLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="test" element={<TestAPI/>} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
