import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/registration";

import UserDashboard from "./pages/userdashboard";
import Layout from "./Layout";
import Login from "./pages/login";


const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
         <Route path="registration" element={<Registration/>}/>
         <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
      <Routes>
         <Route path="/dashboard" element={<UserDashboard/>}>
         
         </Route>
      </Routes>
    </BrowserRouter>   
    </>
  )
}
export default App;