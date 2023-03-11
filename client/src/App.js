import './App.css';
import Home from "./pages/Home";
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/">
      <Route index element={<Home/>}></Route>
      <Route path="home2" element={<Home2></Home2>}></Route>
      <Route path="home3" element={<Home3></Home3>}></Route>
      </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
