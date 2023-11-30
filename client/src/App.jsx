import { Routes, Route } from "react-router-dom"
import AboutUs from "./component/AboutUs"
import Catalog from "./component/Catalog"
import CreateForm from "./component/CreateForm"
import Header from "./component/Header"
import HomePage from "./component/HomePage"
import LoginForm from './component/LoginForm'
import RegisterForm from "./component/RegisterForm"

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/your-offer" element={<Catalog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}

export default App
