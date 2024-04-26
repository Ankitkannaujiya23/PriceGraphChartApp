import './App.css';
import Login from './mainPages/login-auth/login/Login';
import Signup from './mainPages/login-auth/signup/Signup';
import HomePage from './mainPages/homepage/HomePage';
import {createBrowserRouter,RouterProvider}from 'react-router-dom';
import AddProduct from './components/product/AddProduct';
import ProductDetailsPage from './components/product/ProductDetailsPage';

function App() {
const router=createBrowserRouter([
 
{
  path:'/',
  element:<Login />
},
{
  path:'/signup',
  element:<Signup />
},
{
  path:'/homepage',
  element:<HomePage />
},
{
  path:'/addProduct',
  element:<AddProduct />
},
{
  path:'/productDetailPage',
  element:<ProductDetailsPage />
}
])
  return (
    <div className="App  bg-slate-100 ">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
