import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Designer from "./pages/Designer";
import Navbar from "./components/Navbar";

function App(){
 return(
  <BrowserRouter>

   <Navbar/>

   <Routes>

    <Route path="/" element={<Home/>}/>

    <Route 
    path="/designer" 
    element={<Designer/>}
    />

   </Routes>

  </BrowserRouter>
 )
}

export default App;
