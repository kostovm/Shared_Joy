import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

import Path from "./paths"
import AuthContext from './contexts/authContext'
import * as authService from './services/authService'

import AboutUs from "./component/about-us/AboutUs"
import Catalog from "./component/catalog/Catalog"
import Header from "./component/header/Header"
import HomePage from "./component/home/HomePage"
import LoginForm from './component/login/LoginForm'
import RegisterForm from "./component/register/RegisterForm"
import CreateForm from "./component/create/CreateForm"
import Logout from './component/logout/Logout'

function App() {

  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.username, 
      values.email, 
      values.password, 
      values.city, 
      values.neighborhood, 
      values.pictureUrl
      );

    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home);
  };

  const logOutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken')
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logOutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <div className="container">
      <AuthContext.Provider value={values}>
      <Header />
      <Routes>
        <Route path={Path.Home} element={<HomePage />} />
        <Route path={Path.Catalog} element={<Catalog />} />
        <Route path="/your-offer" element={<Catalog />} />
        <Route path={Path.About} element={<AboutUs />} />
        <Route path={Path.Create} element={<CreateForm />} />
        <Route path={Path.Register} element={<RegisterForm />} />
        <Route path={Path.Login} element={<LoginForm />} />
        <Route path={Path.Logout} element={<Logout />} />
      </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
