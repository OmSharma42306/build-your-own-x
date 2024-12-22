import Signup from "./components/Signup";
import Login from "./components/Login";
import Landingpage from "./components/Landingpage";
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom";

export default function App(){
 
  return <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landingpage/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
  </div>
}