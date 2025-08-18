import { Outlet } from "react-router-dom";
import Topnav from "./component/header";
import Footer from "./component/footer";


const Layout=()=>{
    return(
        <>
        {/* <Header/> */}
        <div id="navbar">
        <Topnav/>
        </div>
        <div id="outlet">
            <Outlet/>
        </div>
         
        <Footer/>
        </>
    )
}
export default Layout;