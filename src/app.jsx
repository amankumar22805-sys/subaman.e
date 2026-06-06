import {HashRouter, Routes, Route} from "react-router-dom";

function App(){

return (
<HashRouter>

<Routes>

<Route 
path="/" 
element={
<h1>SabAman.e Website Working</h1>
}
/>

</Routes>

</HashRouter>
)

}

export default App;
