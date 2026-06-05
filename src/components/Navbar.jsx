import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/Home";
import Designer from "./pages/Designer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";


function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>


<Route path="/" element={<Home/>}/>

<Route path="/designer" element={<Designer/>}/>

<Route path="/cart" element={<Cart/>}/>

<Route path="/checkout" element={<Checkout/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/product" element={<Product/>}/>

<Route path="/admin" element={<Admin/>}/>


</Routes>

</BrowserRouter>

)

}

export default App;
