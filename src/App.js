import logo from './logo.svg';
import './App.css';
import './style/bootstrap-5.3.3-dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './views/users.js';
import DefaultLayout from './Components/DefaultLayout.js';
import GuestLayout from './Components/GuestLayout.js';
import UserForm from './views/UserForm.js';
import Login from './views/login.js';
import Register from './views/register.js';
import TestAPI from './views/testAPI.js';
import AddProduct from './views/admin/addProduct.js';
import ProductUpdate from './views/admin/productUpdate.js';
import AddCategory from './views/admin/addCategory.js';
import CategoryUpdate from './views/admin/categoryUpdate.js';

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

          <Route path="admin/addproduct" element={<AddProduct />} />
          <Route path="admin/addcategory" element={<AddCategory />} />
          <Route path='/productupdate/:id' element={ <ProductUpdate/>  }/>
          <Route path='/categoryUpdate/:id' element={ <CategoryUpdate/>  }/>

          {/* Routes with GuestLayout */}
          <Route path="/" element={<GuestLayout />}>

          <Route path="test" element={<TestAPI/>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

        </Routes>

  
      </div>
    </Router>
  );
}

export default App;
