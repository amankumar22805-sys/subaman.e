import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/product";
import Login from "./Login";
import Designer from "./Designer";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/designer" element={<Designer/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;
