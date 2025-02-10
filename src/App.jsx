import React from "react"
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navlinks from "./components/navlinks/Navlinks"

function App() {


  return (
      <div className="App" style={{height:"100vh",width: "100vw"}}>

        <Navlinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
  )
}

export default App

