import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import Shimmer from "./components/Shimmer"
// import Grocery from "./components/Grocery"
import ResturentDetails from "./components/ResturentDetails"
import { BrowserRouter,Routes,Route,Outlet} from "react-router"

const Grocery = lazy(()=>import("./components/Grocery"))

const AppComponent= () => {
    return(
        <div className="app-container">
            <Header/>
            <Outlet/>
        </div>
    )
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppComponent/>}>
                    <Route path="/" element={<Body/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/grocery" element={<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>}/>
                    <Route path="/resturent/:resid" element={<ResturentDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppRouter/>)