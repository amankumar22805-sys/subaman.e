import {HashRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Designer from "./Designer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./Login";
import Product from "./pages/product";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";


function App(){

return(

<HashRouter>

<Navbar/>

<Routes>

<Route 
path="/" 
element={<Home/>}
/>


<Route 
path="/designer" 
element={<Designer/>}
/>


<Route 
path="/cart" 
element={<Cart/>}
/>


<Route 
path="/checkout" 
element={<Checkout/>}
/>


<Route 
path="/login" 
element={<Login/>}
/>


<Route 
path="/product" 
element={<Product/>}
/>


<Route 
path="/admin" 
element={<Admin/>}
/>


</Routes>


</HashRouter>

)

}


export default App;
