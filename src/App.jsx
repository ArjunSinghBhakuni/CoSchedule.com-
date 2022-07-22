import './App.css'
import {Link} from "react-router-dom"
import { Login } from './Components/login/login'
import {Register} from "./Components/register/register"
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <div>
          <Link className="nav-login" to="/login">
          Login
          </Link>
          <Link className="nav-signup" to="/register">
          Signup
          </Link>
      </div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
